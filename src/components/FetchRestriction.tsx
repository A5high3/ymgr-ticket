import React from "react";

export function FetchRestriction() {
  return (
    <div
      style={{
        border: "groove",
        borderRadius: 20,
        width: 1020,
        height: 220,
        marginTop: 50,
        backgroundColor: "#FFF"
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
        チケットツイート取得制限
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
        ・
        一度のリクエストで1人以上、最大3名までのキャスト様のツイートを取得することができる
        <br />
        <div style={{ paddingTop: 30 }}>
          ・一度ツイート取得した後は、30分間再度ツイート取得することができない
        </div>
      </div>
      <br />
    </div>
  );
}
