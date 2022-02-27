import React from "react";
import { SectionHeader } from "./SectionHeader";
import { castInfo } from "../consts/castInfo";

export function Links() {
  return (
    <div>
      <SectionHeader title={"LINKS"} />
      <div
        style={{
          textAlign: "left",
          marginLeft: 140,
          flexDirection: "column",
          paddingBottom: 20,
          fontSize: 30,
        }}
      >
        ユメノグラフィア公式
        <br />
        <div style={{ fontSize: 25 }}>
          <a href={"https://www.yumenographia.com/"}>・公式サイト</a>
          <br />
          <a href={"https://note.com/yume_note1205"}>・公式note(お知らせ)</a>
        </div>
      </div>
      {castInfo.map((cast) => {
        return (
          <div
            style={{
              display: "inline-flex",
              textAlign: "left",
              marginLeft: 120,
              width: 230,
              flexDirection: "column",
              paddingBottom: 20,
            }}
          > 
            <div style={{ fontSize: cast.castId === "54" ? 18 : 20 }}>{cast.name}</div>
            <div style={{ paddingLeft: 20 }}>
              <div>
                <a href={cast.links.tickets} target="_blank" rel="noreferrer noopener">チケットページ</a>
              </div>
              <div>
                <a href={cast.links.twitter} target="_blank" rel="noreferrer noopener">Twitter</a>
              </div>
              <div>
                <a href={cast.links.youtube} target="_blank" rel="noreferrer noopener">Youtube</a>
              </div>
              {/* {cast.links?.summerNotification &&
                <div>
                  <a href={cast.links.summerNotification} target="_blank" rel="noreferrer noopener">夏空間ルール</a>
                </div>
              } */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
