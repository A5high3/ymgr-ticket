import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./css/SpApp.css";
import "./css/SpCast.css";
import "./css/SpChoose.css";
import axios from "axios";
import dayjs from "dayjs";
import { HeroHeader } from "./components/Header";
import { SpAbout } from "./components/sp/SpAbout";
import { SpCastButtons } from "./components/sp/SpCastButtons";
import { SpGradationSquere } from "./components/sp/SpGradSquere";
import { SpTweetsResults } from "./components/sp/SpTweetsResult";
import { SpSectionHeader } from "./components/sp/SpSectionHeader";
import { SpLinks } from "./components/sp/SpLinks";

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
    if (3 < requestIds.length) {
      return "一度に取得できるキャスト様は3名までとなっています";
    }
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
    return "チケット情報を取得するキャスト様を\n3名まで選択してください";
  }
  return "チケット情報を取得する";
}

function SpApp() {
  const [requestIds, setId] = useState([] as string[]);
  const [castData, setTweetObject] = useState([] as Response[]);
  const [isEnable, setEnableFlag] = useState(true);
  const [squereInitial] = useState(true);
  useEffect(() => {
    const expireTime = localStorage.getItem("expireTime");
    if (expireTime === null || expireTime === undefined) {
      setEnableFlag(true);
    }
    if (3 < requestIds.length) {
      setEnableFlag(false);
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
  useEffect(() => {}, [squereInitial]);
  return (
    <div className="SpApp">
      <HeroHeader />
      <SpAbout />

      <SpCastButtons requestIds={requestIds} setId={setId} />
      <div style={{ position: "relative", marginLeft: "5vw", zIndex: -1 }}>
        <SpGradationSquere squere={squereInitial} />
        <SpGradationSquere squere={squereInitial} />
        <SpGradationSquere squere={squereInitial} />
        <SpGradationSquere squere={squereInitial} />
      </div>
      <div style={{ position: "relative", paddingLeft: "50vw", zIndex: -1 }}>
        <SpGradationSquere squere={squereInitial} />
        <SpGradationSquere squere={squereInitial} />
        <SpGradationSquere squere={squereInitial} />
        <SpGradationSquere squere={squereInitial} />
      </div>
      <div
        style={{
          marginRight: 20,
          marginLeft: 20,
          marginTop: 50,
          marginBottom: 100,
        }}
      >
        {requestIds.length !== 0 && isEnable ? (
          <Button
            onClick={async () =>
              await fetchTweet(requestIds, setTweetObject, setId)
            }
            style={{ width: 200, whiteSpace: "pre-wrap" }}
          >
            {judgeEnableState(isEnable, requestIds)}
          </Button>
        ) : (
          <Button
            variant="secondary"
            disabled={requestIds.length === 0 || isEnable === false}
            onClick={async () =>
              await fetchTweet(requestIds, setTweetObject, setId)
            }
            style={{ width: 200, whiteSpace: "pre-wrap" }}
          >
            {judgeEnableState(isEnable, requestIds)}
          </Button>
        )}
      </div>
      {castData.length !== 0 && (
        <div>
          <SpSectionHeader title={"TWEETS"} />
          {castData.map((cast) => {
            return <SpTweetsResults castInfo={cast} />;
          })}
        </div>
      )}
      <SpLinks />
    </div>
  );
}

async function fetchTweet(
  requestIds: string[],
  setTweetObject: React.Dispatch<React.SetStateAction<Response[]>>,
  setId: React.Dispatch<React.SetStateAction<string[]>>
) {
  const response = await axios.post(
    "https://1t9s9wq59b.execute-api.us-east-1.amazonaws.com/develop/ticket",
    JSON.stringify({ requestIds: requestIds })
  );
  setTweetObject(response.data.content);
  const epocSec = dayjs(new Date()).unix();
  // localStorage.setItem("expireTime", (epocSec + 1800).toString());
  setId([]);
  return;
}

export default SpApp;
