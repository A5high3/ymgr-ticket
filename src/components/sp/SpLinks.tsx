import React from "react";
import { SpSectionHeader } from "./SpSectionHeader";
import { castInfo } from "../../consts/castInfo";

export function SpLinks() {
  return (
    <div>
      <SpSectionHeader title={"LINKS"} />
      <div
        style={{
          textAlign: "left",
          marginLeft: 10,
          marginRight: 10,
          flexDirection: "column",
          paddingBottom: 20,
          fontSize: 20,
        }}
      >
        ユメノグラフィア公式
        <br />
        <div style={{ fontSize: 18 }}>
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
              marginLeft: 10,
              marginRight: 10,
              flexDirection: "column",
              paddingBottom: 20,
            }}
          >
            <div style={{ fontSize: 18 }}>{cast.name}</div>
            <div style={{ paddingLeft: 12 }}>
              <div>
                <a href={cast.links.tickets}>チケットページ</a>
              </div>
              <div>
                <a href={cast.links.twitter}>Twitter</a>
              </div>
              <div>
                <a href={cast.links.youtube}>Youtube</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
