import React from "react";

export function SpFilteringCondition() {
  return (
    <div
      style={{
        border: "groove",
        borderRadius: 20,
        width: "90vw",
        height: 250,
        marginTop: 50,
        backgroundColor: "#fff"
      }}
    >
      <div
        style={{
          fontSize: 25,
          paddingBottom: 10,
          marginTop: -20,
          backgroundColor: "#ffffff",
          position: "absolute",
        }}
      >
        チケットツイート取得条件
        <br />
      </div>
      <div
        style={{
          paddingLeft: 10,
          paddingTop: 50,
          paddingBottom: 10,
          fontSize: 15,
        }}
      >
        ・ 2021年9月21日現在、在籍されているキャスト様
        <br />
        <div style={{ paddingTop: 30 }}>
          ・キャスト様の最新のツイート100件(※リプライ・リツイートは除く)から
          <br />
          「チケット, チケ, ﾁｹｯﾄ, ﾁｹ」の単語でフィルタリングしたもの
        </div>
      </div>
      <br />
    </div>
  );
}
