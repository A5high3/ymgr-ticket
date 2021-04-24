import React from "react";

export function FilteringCondition() {
  return (
    <div
      style={{
        border: "groove",
        borderRadius: 20,
        width: 1020,
        height: 250,
        marginTop: 50,
        backgroundColor: "#fff"
      }}
    >
      <div
        style={{
          fontSize: 30,
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
          fontSize: 22,
        }}
      >
        ・ 2021年4月25日現在、在籍されているキャスト様
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
