import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { SectionHeader } from "../components/SectionHeader";

export function Notice() {
  const [noticeSection, handleNoticeSection] = useState("ToGuest");
  return (
    <>
      <SectionHeader title={"NOTICE"} />
      <div
        style={{
          borderBottom: "groove",
          borderLeft: "groove",
          borderRight: "groove",
          borderRadius: 20,
          width: 1200,
          height: 420,
          marginLeft: 130,
          marginTop: 20,
          marginBottom: 200,
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            fontSize: 40,
            marginLeft: 20,
            paddingBottom: 10,
            marginTop: -30,
            background: "transparent",
            position: "absolute",
          }}
        >
          <Row style={{ width: 1200, backgroundColor: "#fff" }}>
            {noticeSection === "ToGuest" ? (
              <Col
                style={{
                  backgroundImage: `linear-gradient(150deg, rgba(59, 196,241, 0.8), rgba(202,79,146))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                onClick={() => handleNoticeSection("ToGuest")}
              >
                ゲスト様へ
              </Col>
            ) : (
              <Col onClick={() => handleNoticeSection("ToGuest")}>
                ゲスト様へ
              </Col>
            )}
            |
            {noticeSection === "ToCast" ? (
              <Col
                style={{
                  backgroundImage: `linear-gradient(150deg, rgba(59, 196,241, 0.8), rgba(202,79,146))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                onClick={() => handleNoticeSection("ToCast")}
              >
                キャスト様へ
              </Col>
            ) : (
              <Col onClick={() => handleNoticeSection("ToCast")}>
                キャスト様へ
              </Col>
            )}
            |{noticeSection === "ToAdmin" ? (
              <Col
                style={{
                  backgroundImage: `linear-gradient(150deg, rgba(59, 196,241, 0.8), rgba(202,79,146))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                onClick={() => handleNoticeSection("ToAdmin")}
              >
                運営様へ
              </Col>
            ) : (
              <Col onClick={() => handleNoticeSection("ToAdmin")}>
                運営様へ
              </Col>
            )}
          </Row>
          <br />
        </div>
        {noticeSection === "ToGuest" && (
          <div
            style={{
              textAlign: "left",
              paddingLeft: 10,
              paddingTop: 70,
              paddingBottom: 10,
              fontSize: 22,
            }}
          >
            ・
            当サイトは必ずキャスト様のチケットスケジュールツイートを抜粋するわけではありません。
            <div style={{ paddingLeft: 20 }}>
              例)
              補填チケット対応のツイートやチケットキャンセルのツイートなども表示される可能性がございます。
            </div>
            <div style={{ paddingTop: 20 }}>
              ・当サイトは必ず最新かつ有効であるツイートを取得することを保証しません。
              <div style={{ paddingLeft: 20 }}>
                ツイート時刻をよく確認いただき、有効な情報かどうかをご自身でご確認ください。
              </div>
            </div>
            <div style={{ paddingTop: 20 }}>
              ・当サイト並びに製作者は、当サイトから発生した一切の損失の責任を負いません。
              <div style={{ paddingLeft: 20 }}>
                当サイトが表示した内容に不安が残る場合はご自身でキャスト様のTwitter情報を確認いただき、
              </div>
              <div style={{ paddingLeft: 20 }}>
                ご自身で判断をお願いいたします。
              </div>
              <div style={{ paddingLeft: 20 }}>
                例) チケットツイートが正常に表示されず購入の機会を逸したなど
              </div>
            </div>
          </div>
        )}
        {noticeSection === "ToCast" && (
          <div
            style={{
              textAlign: "left",
              paddingLeft: 10,
              paddingTop: 70,
              paddingBottom: 10,
              fontSize: 22,
            }}
          >
            ・当サイトはキャスト様に「チケット, チケ, ﾁｹｯﾄ,
            ﾁｹ」を含む文言で必ずツイートをしていただきたいと
            <div style={{ paddingLeft: 20 }}>
              遠回しに表現する意図で公開はしておりません。
            </div>
            <div style={{ paddingLeft: 20 }}>
              配信や普段のツイートをいつも楽しく拝見しておりますが、それらに告知の連絡が埋もれてしまう場合があることや、
            </div>
            <div style={{ paddingLeft: 20 }}>
              新たなキャストさんが増えるであろうことを鑑みて、チケット販売情報のみを切り出せたらと考えた次第でございます。
            </div>
            <div style={{ paddingTop: 20 }}>
              ・製作者の独断でツイート情報の加工・表示を行っており申し訳ございません。
              <div style={{ paddingLeft: 20 }}>
                当サイトの機能の対象外にしてほしいなどの要望ありましたらお手数をおかけし恐縮ですが、
              </div>
              <div style={{ paddingLeft: 20 }}>
                Twitter@7ashgray7までリプライいただければ、なるべく早く対応をいたします。よろしくお願いいたします。
              </div>
            </div>
          </div>
        )}
        {noticeSection === "ToAdmin" && (
          <div
            style={{
              textAlign: "left",
              paddingLeft: 10,
              paddingTop: 70,
              paddingBottom: 10,
              fontSize: 22,
            }}
          >
            ・当サイトはいちから株式会社の二次創作ガイドラインを熟読した上で
            <div style={{ paddingLeft: 20 }}>
              ユメノグラフィアに関する二次創作として公開しております。
            </div>
            <div style={{ paddingLeft: 20 }}>
              またこれらに抵触すると運営様から判断が下された場合はただちに当サイトの公開停止を行いますので
            </div>
            <div style={{ paddingLeft: 20 }}>
              Twitter@7ashgray7へ リプライまたはダイレクトメッセージ、
            </div>
            <div style={{ paddingLeft: 20 }}>
              または yumgra.un.official.ticket.info@gmail.com へご連絡いただければと思います。
            </div>
          </div>
        )}

        <br />
      </div>
    </>
  );
}
