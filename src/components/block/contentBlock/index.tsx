import { useState } from "react";
import { decodes } from "../../../service/decode";
import { encodes } from "../../../service/encode";
import { ICode } from "../../../service/model";
import { useTextInputStore } from "../../../store/useTextInputStore";
import classes from "./contentBlock.module.scss";

export type IContentItemBlock = {
  codes: Array<ICode>;
};

export const ContentItemBlock = ({ codes }: IContentItemBlock) => {
  const { text } = useTextInputStore();
  const [state, setState] = useState(-1);
  return (
    <div className={classes.ContentItemBlock}>
      {codes.map((code, index) => (
        <div className={classes.item} key={index}>
          <h4>{code.name}</h4>
          <div>{code.function(text)}</div>

          {state == index ? (
            <span className={classes.copy}>Скопирован</span>
          ) : (
            <svg
              width="18px"
              height="px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                var input = document.createElement("input");
                input.setAttribute("value", code.function(text));
                document.body.appendChild(input);
                input.select();
                var result = document.execCommand("copy");
                document.body.removeChild(input);
                setState(index);
                setTimeout(() => {
                  setState(-1);
                }, 3000);
                return result;
              }}
            >
              <path
                d="M20.9983 10C20.9862 7.82497 20.8897 6.64706 20.1213 5.87868C19.2426 5 17.8284 5 15 5H12C9.17157 5 7.75736 5 6.87868 5.87868C6 6.75736 6 8.17157 6 11V16C6 18.8284 6 20.2426 6.87868 21.1213C7.75736 22 9.17157 22 12 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V15"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 10V16C3 17.6569 4.34315 19 6 19M18 5C18 3.34315 16.6569 2 15 2H11C7.22876 2 5.34315 2 4.17157 3.17157C3.51839 3.82475 3.22937 4.69989 3.10149 6"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export const serverMethod = {
  encodes,
  decodes,
};

export const ContentBlock = () => {
  return (
    <div className={classes.ContentBlock}>
      <div className={`${classes.content} content`}>
        <h2>Декодировано</h2>
        <ContentItemBlock codes={decodes} />
        <h2>Закодировано</h2>
        <ContentItemBlock codes={encodes} />
      </div>
    </div>
  );
};
