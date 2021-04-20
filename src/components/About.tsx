import React from "react";
import "../App.css";
import { FilteringCondition } from "./FilteringCondition";
import { FetchRestriction } from "./FetchRestriction";
import { Row, Col } from "react-bootstrap";
import { SectionHeader } from "./SectionHeader";

export function About() {
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
        <SectionHeader title={"ABOUT"} />
        <div
          style={{
            position: "relative",
            textAlign: "left",
            marginLeft: 130,
            marginBottom: 50,
          }}
        >
          {Animation}
          <br />
          <div
            style={{
              fontFamily: "a-otf-gothic-bbb-pr6n, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: 20,
            }}
          >
            <div>
              このサイトはユメノグラフィア所属キャスト様のツイッターアカウントのツイートを取得し、
              <br />
              チケットについて言及されているツイートのみを抜粋するwebサイトです。
              <br />
              また、公式とは一切関係のない非公式個人での製作・運営となります。
              <br />
              <br />
            </div>
            <FilteringCondition />
            <FetchRestriction />
          </div>
        </div>
      </Col>
    </Row>
  );
}
