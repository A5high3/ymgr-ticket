import React from "react";
import "../../css/SpApp.css";
import { SpFilteringCondition } from "./SpFilteringCondition";
import { SpFetchRestriction } from "./SpFetchRestriction";
import { SpSectionHeader } from "./SpSectionHeader";
import { Row, Col } from "react-bootstrap";



export function SpAbout() {
  const Animation = (
    <style>
      {`
            @keyframes spin {
              0% {
                  opacity: 0;
                }
                10% {
                  opacity: 100;   
                }
                90% {
                  opacity: 100;
                }
                100% {
                  transform: translateY(-2000px) rotate(360deg);
                  opacity: 0;
                }
            }
          `}
    </style>
  );
  return (
    <Row style={{padding: 0, margin: 0}}>
      <Col style={{padding:0, margin: 0}}>
        <SpSectionHeader title={"ABOUT"} />
        <div
          style={{
            position: "relative",
            textAlign: "left",
            marginBottom: 50,
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          {Animation}
          <br />
          <div
            style={{
              fontFamily: "a-otf-gothic-bbb-pr6n, sans-serif",
              fontWeight: 20,
              fontStyle: "normal",
              fontSize: 15,
            }}
          >
            <div>
              このサイトはユメノグラフィア所属キャスト様のツイッターアカウントのツイートを取得し、
              チケットについて言及されているツイートのみを抜粋するwebサイトです。
              <br />
              <br />
              また、公式とは一切関係のない非公式個人での製作・運営となります。
              <br />
              <br />
              ご連絡・ご要望がある場合はお手数をお掛けしますが下記連絡先までご連絡のほどよろしくお願いいたします。
              <br />
              ・Twitter: @7ashgray7 へのリプライまたはダイレクトメッセージ
              <br />
              ・yumgra.un.official.ticket.info@gmail.com 宛へのメール
            </div>
            <SpFilteringCondition />
            <SpFetchRestriction />
          </div>
        </div>
      </Col>
    </Row>
  );
}
