import React from "react";
import { castInfo } from "../../consts/castInfo";
import { SpSectionHeader } from "./SpSectionHeader";

interface Props {
  requestIds: string[];
  setId: React.Dispatch<React.SetStateAction<string[]>>;
}

export function SpCastButtons({requestIds, setId}: Props) {
  return (
    <>
      <SpSectionHeader title={"CASTS"} />
      <div
        style={{
          marginRight: 10,
          marginLeft: 10,
          fontFamily: "a-otf-gothic-bbb-pr6n, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          zIndex: 1,
          position: "relative"
        }}
      >
        {castInfo.map((data) => {
          if (!requestIds.includes(data.castId)) {
            return (
              <a
                className={`spbtn speffect${data.castId}`}
                onClick={() => {
                  let arr;
                  if (requestIds.includes(data.castId)) {
                    arr = requestIds.filter((id) => id !== data.castId);
                  } else {
                    arr = [...requestIds, data.castId];
                  }
                  setId(arr);
                }}
              >
                {data.name}
              </a>
            );
          } else {
            return (
              <a
                className={`sp-btn-choose${data.castId} effect-choose${data.castId}`}
                onClick={() => {
                  let arr;
                  if (requestIds.includes(data.castId)) {
                    arr = requestIds.filter((id) => id !== data.castId);
                  } else {
                    arr = [...requestIds, data.castId];
                  }
                  setId(arr);
                }}
              >
                {data.name}
              </a>
            );
          }
        })}
      </div>
    </>
  );
}
