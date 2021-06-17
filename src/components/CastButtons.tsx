import React from "react";
import { castInfo, castInfoIncludedGraduated } from "../consts/castInfo";
import { SectionHeader } from "./SectionHeader";

interface Props {
  requestIds: string[];
  setId: React.Dispatch<React.SetStateAction<string[]>>;
  isShowGraduated: boolean;
}

export function CastButtons({ requestIds, setId, isShowGraduated }: Props) {
  return (
    <>
      <SectionHeader title={"CASTS"} />
      <div
        style={{
          marginRight: 250,
          marginLeft: 250,
          fontFamily: "a-otf-gothic-bbb-pr6n, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          zIndex: 1,
          position: "relative",
        }}
      >
        {isShowGraduated ? (
          <div>
            {castInfoIncludedGraduated.map((data) => {
              if (!requestIds.includes(data.castId)) {
                return (
                  <a
                    className={`btn effect${data.castId}`}
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
                    className={`btn-choose${data.castId} effect-choose${data.castId}`}
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
        ) : (
          <div>
            {castInfo.map((data) => {
              if (!requestIds.includes(data.castId)) {
                return (
                  <a
                    className={`btn effect${data.castId}`}
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
                    className={`btn-choose${data.castId} effect-choose${data.castId}`}
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
        )}
      </div>
    </>
  );
}
