import { createGlobalStyle } from "styled-components";
import ResponsiveCalculator from "../utils/ResponsiveCalculator";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${ResponsiveCalculator(24)};

      @media (min-width: 768px) {
        font-size: ${ResponsiveCalculator(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${ResponsiveCalculator(16)};
      }
    }
`;

export default Global;