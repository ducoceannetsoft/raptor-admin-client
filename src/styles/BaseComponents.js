import ResponsiveCalculator from "../utils/ResponsiveCalculator";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${ResponsiveCalculator(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Card = styled.div`
  display: flex;
  width: ${ResponsiveCalculator(320, 320)};
  min-height: ${ResponsiveCalculator(200, 320)};
  flex-direction: column;
  padding: ${ResponsiveCalculator(20)};
  margin: ${ResponsiveCalculator(20)};
  background-color: ${(props) => props.bgColor};
  height: 100%;

  @media (min-width: 768px) {
    width: ${ResponsiveCalculator(320, 768)};
    min-height: ${ResponsiveCalculator(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${ResponsiveCalculator(500)};
    min-height: ${ResponsiveCalculator(300)};
    height: 100%;
  }
`;

export const CardTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const CardText = styled.p`
  margin-top: ${ResponsiveCalculator(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
