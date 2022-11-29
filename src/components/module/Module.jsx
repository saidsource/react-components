import React from "react";
import { ModuleWrapper } from "./Module.style";

const Module = ({ src, title, text }) => {
  return (
    <>
      <ModuleWrapper className="col-md-4">
        <div className="fitter">
        <a href={src} target={"_blank"}>
          <a href={src} target={"_blank"} className="atitle">
            {title}
          </a>
          <div className="bosluk"></div>
          {typeof text == "object" ? (
            text.map((item) => (
              <p>
                <span>&bull;</span>
                {item}
              </p>
            ))
          ) : (
            <p>
              <span>&bull;</span>
              {text}
            </p>
          )}
        </a>
        </div>
      </ModuleWrapper>
    </>
  );
};

export default Module;
