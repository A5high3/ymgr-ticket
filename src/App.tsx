import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import "./Cast.css";
import "./Choose.css";
import axios from "axios";
import dayjs from "dayjs";
import { HeroHeader } from "./components/Header";
import { About } from "./components/About";
import { CastButtons } from "./components/CastButtons";
import { GradationSquere } from "./components/GradSquere";
import { TweetsResults } from "./components/TweetsResult";
import { SectionHeader } from "./components/SectionHeader"

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
      return "一度に取得できるキャストさんは3名までとなっています";
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
    return "チケット情報を取得するキャストさんを\n3名まで選択してください";
  }
  return "チケット情報を取得する";
}

function App() {
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
  useEffect(() => {
    console.log("ykmt!!!!");
  }, [squereInitial]);
  return (
    <div className="App">
      <HeroHeader />
      <About />
      <CastButtons requestIds={requestIds} setId={setId} />
      <div style={{ position: "relative", marginLeft: 100, zIndex: -1 }}>
        <GradationSquere squere={squereInitial} />
        <GradationSquere squere={squereInitial} />
        <GradationSquere squere={squereInitial} />
        <GradationSquere squere={squereInitial} />
        <GradationSquere squere={squereInitial} />
        <GradationSquere squere={squereInitial} />
        <GradationSquere squere={squereInitial} />
      </div>
      <div style={{ position: "relative", marginLeft: 1200, zIndex: -1 }}>
        <GradationSquere squere={squereInitial} />
        <GradationSquere squere={squereInitial} />
        <GradationSquere squere={squereInitial} />
        <GradationSquere squere={squereInitial} />
        <GradationSquere squere={squereInitial} />
        <GradationSquere squere={squereInitial} />
        <GradationSquere squere={squereInitial} />
      </div>
      <div
        style={{
          marginRight: 300,
          marginLeft: 300,
          marginTop: 100,
          marginBottom: 100,
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
          <Button
            variant="secondary"
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
      {castData.length !== 0 && (
        <div>
          <SectionHeader title={"TWEETS"}/>
          {castData.map((cast) => {
            return <TweetsResults castInfo={cast} />;
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
