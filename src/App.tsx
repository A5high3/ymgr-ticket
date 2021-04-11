import React, { useState, useEffect } from "react";
import { castInfo } from "./consts/castInfo";
import { Button } from "react-bootstrap";
import "./App.css";
import "./Cast.css";
import "./Choose.css";
import axios from "axios";
import dayjs from "dayjs";

export interface Response {
  tweets: {
    id: string;
    text: string;
    author_id: string;
    created_at: string; // ISO string
  }[];
  cast: {
    id: string;
    name: string;
    username: string;
    profile_image_url: string;
  };
}

function judgeEnableState(isEnable: boolean, requestIds: string[]): string {
  if (isEnable === false) {
    const expireTime = localStorage.getItem("expireTime");
    if (expireTime) {
      return `リクエストいただきありがとうございます。\n次の制限解除時刻は\n${dayjs(
        +expireTime * 1000
      ).format("YYYY[年]MM[月]DD[日] HH[時]mm[分]ss[秒]")}を予定しております。`;
    } else {
      return `リクエストいただきありがとうございます。\n次の制限解除時刻までしばらくお待ちください`;
    }
  }
  if (requestIds.length === 0) {
    return "チケット情報を取得するキャストさんを\n3名まで選択してください";
  } else {
    return "チケット情報を取得する";
  }
}

function App() {
  const [requestIds, setId] = useState([] as string[]);
  const [castData, setTweetObject] = useState([] as Response[]);
  const [isEnable, setEnableFlag] = useState(true);
  useEffect(() => {
    const expireTime = localStorage.getItem("expireTime");
    if (expireTime === null || expireTime === undefined) {
      setEnableFlag(true);
    }
    if (expireTime && isNaN(+expireTime)) {
      setEnableFlag(false);
    }
    if (expireTime && dayjs(new Date()).unix() < +expireTime) {
      setEnableFlag(false);
    }
    if (expireTime && +expireTime < dayjs(new Date()).unix()) {
      setEnableFlag(true);
    }
  });
  return (
    <div className="App">
      <header className="App-header">ユメグラ非公式チケット情報サイト</header>
      <div
        style={{
          textAlign: "left",
          marginLeft: 200,
          marginTop: 50,
          marginBottom: 50,
        }}
      >
        <div
          style={{
            fontSize: 40,
            fontFamily: "a-otf-midashi-go-mb31-pr6n, sans-serif",
            fontWeight: 600,
            fontStyle: "normal",
          }}
        >
          ABOUT
        </div>
        <br />
        <div
          style={{
            fontFamily: "a-otf-gothic-bbb-pr6n, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: 18,
          }}
        >
          <div>
            このサイトはユメノグラフィア所属キャスト様のツイッターアカウントのツイートを取得し、
            <br />
            チケットについて言及されているツイートのみを抜粋するwebサイトです。
            <br />
            また、公式とは一切関係のない非公式での製作・運営となります。
            <br />
            <br />
          </div>
          <div>
            <div style={{ paddingBottom: 10 }}>
              当サイトがチケットを取得する条件は下記の通りとなります。
              <br />
            </div>
            <div style={{ paddingLeft: 10, paddingBottom: 10 }}>
              - 2021年4月15日現在、在籍されているキャスト様
              <br />
              - キャスト様の最新のツイート100件(※リプライ・リツイートは除く)から
              <br />
              「チケット, チケ, ﾁｹｯﾄ, ﾁｹ」の単語でフィルタリングしたもの
            </div>
            <br />
          </div>
          ユメノグラフィア所属キャスト様のツイートを取得するにあたって下記の制限を設けています。
          <br />
          ツイート取得制限については下記の通りとなります。
          <br />
          <div style={{ paddingLeft: 10, paddingBottom: 10 }}>
            -
            一度のリクエストで1人以上、最大3名までのキャスト様のツイートまで取得することができる
            <br />
            -
            一度ツイート取得した後は、30分間は再度ツイート取得することができない
            <br />
          </div>
          以上となります。
          <br />
          これらの制限はサーバーへの予期せぬ負荷を抑制する意図として設けております。
          <br />
          実際の負荷を確認し、予告なくこれらの制限を改定・撤廃する場合があります。ご了承ください。
          <br />
        </div>
      </div>
      <div
        style={{
          marginRight: 300,
          marginLeft: 200,
          fontFamily: "a-otf-gothic-bbb-pr6n, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: 18,
        }}
      >
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
      <div
        style={{
          marginRight: 300,
          marginLeft: 300,
          marginTop: 100,
          marginBottom: 200,
        }}
      >
        {requestIds.length !== 0 && isEnable ? (
          <Button
            onClick={async () =>
              await fetchTweet(requestIds, setTweetObject, setId)
            }
            style={{ width: 400, whiteSpace: "pre-wrap" }}
          >
            {judgeEnableState(isEnable, requestIds)}
          </Button>
        ) : (
          <Button variant="secondary"
            disabled={requestIds.length === 0 || isEnable === false}
            onClick={async () =>
              await fetchTweet(requestIds, setTweetObject, setId)
            }
            style={{ width: 400, whiteSpace: "pre-wrap" }}
          >
            {judgeEnableState(isEnable, requestIds)}
          </Button>
        )}
      </div>
      {castData && (
        <div>
          {castData.map((cast) => {
            return (
              <div style={{ display: "inline-grid", marginRight: 100 }}>
                <div>
                  <img src={cast.cast.profile_image_url} />
                  <div style={{ fontSize: 20, paddingBottom: 20 }}>
                    {cast.cast.name}
                  </div>
                </div>
                {cast.tweets.map((tweet) => (
                  <div style={{ width: 340, marginBottom: 30, fontSize: 16 }}>
                    {tweet.text}
                    <br />
                    <br />
                    ツイート日時:{" "}
                    {dayjs(tweet.created_at).format(
                      "YYYY[年]MM[月]DD[日] HH[時]mm[分]ss[秒]"
                    )}
                    <div
                      style={{
                        marginTop: 20,
                        borderTop: "1px",
                        borderLeft: "1px",
                        borderRight: "1px",
                        borderColor: "#dbdbdb",
                        borderStyle: "solid",
                      }}
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

async function fetchTweet(
  requestIds: string[],
  setTweetObject: React.Dispatch<React.SetStateAction<Response[]>>,
  setId: React.Dispatch<React.SetStateAction<string[]>>
) {
  console.log("request", requestIds);
  console.log("request", JSON.stringify({ requestIds: requestIds }));
  const response = await axios.post(
    "https://1t9s9wq59b.execute-api.us-east-1.amazonaws.com/develop/ticket",
    JSON.stringify({ requestIds: requestIds })
  );
  console.log("api", response);
  setTweetObject(response.data.content);
  const epocSec = dayjs(new Date()).unix();
  localStorage.setItem("expireTime", (epocSec + 1800).toString());
  setId([]);
  return;
}

export default App;
