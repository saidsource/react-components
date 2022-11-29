import React from "react";
import { PdfCardWrapper } from "./PdfCard.style";

const PdfCard = ({ url, img, colCount }) => {
  return (
    <>
      <PdfCardWrapper colCount={colCount}>
        <a
          className="pdfcard"
          href={url}
          target={"_blank"}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.01),rgba(0, 0, 0, 0.01)), url(${img})`,
          }}
        ></a>
      </PdfCardWrapper>
    </>
  );
};

export default PdfCard;
