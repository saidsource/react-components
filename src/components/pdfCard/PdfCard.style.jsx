import styled from "styled-components";

export const PdfCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 20px;
`;

export const PdfCardWrapper = styled.div`
  width: calc(
    ${({ colCount }) => 100 / colCount}% -
      ${({ colCount }) => ((colCount -1) * 20)/colCount + 1 }px
  );
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  transform: scale3d(1, 1, 1);
  &:hover {
    transform: scale3d(1.01, 1.01, 1.01);
  }
  .pdfcard {
    font-family: "Heebo";

    height: 20em;

    font-size: 1.5em;
    color: white;
    border-radius: 1em;
    padding: 1em;
    /*margin: 2em;*/
    display: flex;
    align-items: flex-end;
    background-size: cover;
    background-position: center;
    box-shadow: 0 0 3em -1em black;
    transition: all, var(--transition-time);
    position: relative;
    overflow: hidden;
    border: 10px solid #ccc;
    text-decoration: none;
  }
  .pdfcard:hover {
    transform: rotate(0);
  }
  .pdfcard:before,
  .pdfcard:after {
    content: "";
    transform: scale(0);
    transform-origin: top left;
    border-radius: 50%;
    position: absolute;
    left: -50%;
    top: -50%;
    z-index: -5;
    transition: all, var(--transition-time);
    transition-timing-function: ease-in-out;
  }
  .pdfcard:before {
    background: #ddd;
    width: 250%;
    height: 250%;
  }

  .pdfcard:after {
    background: white;
    width: 200%;
    height: 200%;
  }
  @media screen and (max-width: 1285px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    padding: 4rem 2rem;

    .pdfcard {
      max-width: calc(100vw - 4rem);
    }
  }
`;
