import { css } from "@emotion/react";

const bulletPonts = css`
  list-style: none;
`;
const bullet = css`
  position: relative;
  padding-left: 1rem;
  margin-bottom: 0.5rem;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #000;
  }
`;

export default {
  bulletPonts,
  bullet,
};
