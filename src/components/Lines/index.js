import React from "react";

import { NODE_WIDTH } from "../../constants";

import "./style.css";

const NODE_MARGIN = 24;
const HALF_NODE_WIDTH = NODE_WIDTH / 2;
const NODE_OUTER_WIDTH = NODE_WIDTH + NODE_MARGIN;
const TOTAL_LEVEL_GAP = 60;
const LINE_OFFSET = 2;

function Lines(props) {
  const { parentId, parentNodeRef, nodeRefs, totalWeight, weight } = props;

  const firstNodeRect = nodeRefs[0].getBoundingClientRect();
  const lastNodeRect = nodeRefs[nodeRefs.length - 1].getBoundingClientRect();
  const levelRect = nodeRefs[0].parentNode.parentNode.getBoundingClientRect();
  const parentNodeRect = parentNodeRef.getBoundingClientRect();

  const parentCenterX = parentNodeRect.left + HALF_NODE_WIDTH;

  const mostLeftPoint = Math.min(
    firstNodeRect.left + HALF_NODE_WIDTH,
    parentCenterX
  );
  const mostRightPoint = Math.max(
    lastNodeRect.right - HALF_NODE_WIDTH,
    parentCenterX
  );
  const lineWidth = mostRightPoint - mostLeftPoint;

  const connectorLeft = mostLeftPoint - levelRect.left;
  const siblingsOnTheRight =
    firstNodeRect.left + HALF_NODE_WIDTH - parentCenterX > 0;

  const LOW_LEVEL_GAP = (TOTAL_LEVEL_GAP / (totalWeight + 1)) * weight;
  const HIGH_LEVEL_GAP = TOTAL_LEVEL_GAP - LOW_LEVEL_GAP;

  // sibling lines
  const offset =
    (siblingsOnTheRight
      ? firstNodeRect.left - mostLeftPoint + HALF_NODE_WIDTH
      : 0) + LINE_OFFSET;

  const siblingsPaths = Array(nodeRefs.length)
    .fill()
    .reduce((acc, cur, i) => {
      return acc.concat(
        <path
          key={i}
          d={`M${offset +
            i * NODE_OUTER_WIDTH},${LOW_LEVEL_GAP} l00,${HIGH_LEVEL_GAP}`}
        />
      );
    }, []);

  // siblings connector
  const siblingsConnector = `M${LINE_OFFSET},${LOW_LEVEL_GAP} l${lineWidth},00 `;

  // add parent line
  const parentLine = `M${(siblingsOnTheRight
    ? 0
    : parentCenterX - mostLeftPoint) + LINE_OFFSET},00 l00,${LOW_LEVEL_GAP}`;

  return (
    <svg
      class="lines"
      data-parentId={parentId}
      style={{
        top: -TOTAL_LEVEL_GAP,
        left: connectorLeft,
        width: lineWidth + LINE_OFFSET * 2,
        height: TOTAL_LEVEL_GAP
      }}
    >
      {siblingsPaths}
      <path d={siblingsConnector} />
      <path d={parentLine} />
    </svg>
  );
}

export default Lines;
