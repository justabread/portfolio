import { css } from "@emotion/react";

const listContainer = css`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

const listRow = css`
  border: 2px solid black;
  display: flex;
  padding: 5px;
  column-gap: 15px;
`;

const listRowElement = css`
  display: flex;
`;

export default {
  listContainer,
  listRow,
  listRowElement,
};
