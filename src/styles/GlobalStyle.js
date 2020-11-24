import { COLORS } from 'constants/Styles';
import { createGlobalStyle } from 'styled-components';

const basicStyle = `
  body {
    font-family: "Nunito", sans-serif;
    height: 100%;
    font-size: 14px;
    line-height: 1.2;
    color: ${COLORS.TEXT};

    * {
      box-sizing: border-box;
    }
    img {
      max-width: 100%;
    }
    a {
      text-decoration: none;
    }
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      font-weight: 400;
    }

    p {
      font-size: 14px;
      line-height: 20px;
      margin-top: 0;
    }

    .pointer {
      cursor: pointer;
    }

    .text {
      &--red {
        color: ${COLORS.RED};
      }
    }


    .text-center {
      text-align: center;
    }
    .text-left {
      text-align: left;
    }
    .text-right {
      text-align: right;
    }

    .text--bold {
      font-weight: 700;
    }
    .text--semibold {
      font-weight: 500;
    }

    .flex {
      display: flex;
      &--row {
        flex-flow: row;
      }
      &--column {
        flex-flow: column;
      }

      &--1 {
        flex: 1;
        min-height: 0;
      }

      &--auto {
        flex: auto;
      }

      &--wrap {
        flex-wrap: wrap;
      }
      &--no-wrap {
        flex-wrap: no-wrap;
      }
    }

    .justify-content {
      &-start {
        justify-content: flex-start;
      }
      &-end {
        justify-content: flex-end;
      }
      &-center {
        justify-content: center;
      }
      &-space-around {
        justify-content: space-around;
      }
      &-space-between {
        justify-content: space-between;
      }
    }

    .align-items {
      &-start {
        align-items: flex-start;
      }
      &-end {
        align-items: flex-end;
      }
      &-center {
        align-items: center;
      }
    }
`;

const textSizes = [13, 14, 15, 16, 17, 18, 20, 22, 30];
const textSizeStyle = textSizes.map((size) => `.text--size-${size} { font-size: ${size}px };`);
const directions = {
  t: 'top',
  b: 'bottom',
  l: 'left',
  r: 'right',
};

const spacingTypes = {
  p: 'padding',
  m: 'margin',
};
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const paddingStyle = arr.map((item) => {
  let output = '';
  Object.keys(spacingTypes).forEach((spacingType) => {
    Object.keys(directions).forEach((dKey) => {
      output += `
        .${spacingType}${dKey}-${item} {
          ${spacingTypes[spacingType]}-${directions[dKey]}: ${5 * item}px;
        }
      `;
    });
  });

  return output;
});
export default createGlobalStyle`
  ${basicStyle}
  ${textSizeStyle.join(' ')}
  ${paddingStyle.join(' ')}
`;