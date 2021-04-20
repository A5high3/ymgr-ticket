import React from "react"
import bg2 from "../assets/bg2.png";


export function HeroHeader() {
  return (
    <header
      className="App-header"
      style={{
        background: `linear-gradient(150deg, rgba(59, 196,241, 0.8), rgba(202,79,146,0.8)), url(${bg2})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div style={{ marginLeft: 100, marginTop: -150 }}>
        Unofficial Ticket Info
      </div>
      <div style={{ marginLeft: 100, marginBottom: 200, fontSize: 25 }}>
        ユメノグラフィア所属キャストさんのチケット関連ツイートを取得する非公式サイト
      </div>
    </header>
  );
}
