import styled from "styled-components";

//    box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
export const ModuleWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
  border-radius: 0.42rem;
  padding: 20px;
  cursor: pointer;
  border: 1px solid #e4e6ef;
  margin: 0 5px;
  width: calc(33.2% - 10px);
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  transform: scale3d(1, 1, 1);
  a {
    color: #000;
    text-decoration: none;
  }
  .bosluk {
    height: 10px;
    width: 1px;
  }
  .fitter {
    height: 100%;
  }
  & a .atitle {
    color: #000;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
  }
  & a .atitle:hover {
    color: #06c;
  }
  p {
    margin: 0;
    font-size: 12px;
    font-weight: 400;
    text-transform: none;
    line-height: 1.7;
    letter-spacing: 0;
  }
  p span {
    padding: 10px;
    font-size: 15px;
  }
  & p:not(:last-child) {
    padding-bottom: 10px;
  }

  &:hover {
    box-shadow: 2px 4px 16px rgb(0 0 0 / 16%);
    transform: scale3d(1.01, 1.01, 1.01);
  }
`;
