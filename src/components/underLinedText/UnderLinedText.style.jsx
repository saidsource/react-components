import styled from "styled-components";

export const UnderLinedText = styled.div`
width: fit-content;
  &:before {
    ${({ center, bottom,width }) =>
      center
        ? `
            content: "";
            position: absolute;
            height: 2px;
            width: ${width ? width : 100}px;
            background-color: #2250fc;
            bottom: -${bottom ? bottom : "30"}px;
            left: calc(50% - ${width ? width / 2 : 50}px);
            right: 0;
            `
        : `
            content: "";
            position: absolute;
            height: 2px;
            width: ${width ? width : 100}px;
            background-color: #2250fc;
            bottom: -${bottom ? bottom : "30"}px;
            left: 0;
            right: 0;
            `}
  }
`;
