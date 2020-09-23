import { css } from "styled-components";

const sizes = {
  desktop: 64,
  tablet: 48,
  mobile: 23.438,
};
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}rem) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
