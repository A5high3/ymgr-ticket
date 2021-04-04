import React, { useState } from "react";
import { castInfo } from "./consts/castInfo";
import "./App.css";
import "./Cast.css";
import "./Choose.css";
import axios from "axios";
import dayjs from "dayjs"

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

function App() {
  const [requestIds, setId] = useState([] as string[]);
  const [castData, setTweetObject] = useState([] as Response[]);
  return (
    <div className="App">
      <header className="App-header">ユメグラ非公式チケット情報サイト</header>
      <div style={{ marginRight: 300, marginLeft: 300 }}>
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
        <button
          disabled={requestIds.length === 0}
          onClick={async () => await fetchTweet(requestIds, setTweetObject, setId)}
        >
          {requestIds.length === 0
            ? "チケット情報を取得するキャストさんを3名まで選択してください"
            : "チケット情報を取得する"}
        </button>
      </div>
      {castData && (
        <div>
          {castData.map((cast) => {
            return (
              <div style={{display: "inline-grid", marginRight: 100}}>
                <div>
                <img src={cast.cast.profile_image_url} />
                <div style={{fontSize: 20, paddingBottom: 20}}>
                  {cast.cast.name}
                </div>
                </div>
                {cast.tweets.map((tweet) => (
                  <div style ={{width: 340, marginBottom: 30, fontSize: 16}}>
                    {tweet.text}
                    <br /><br />
                    ツイート日時: {dayjs(tweet.created_at).format("YYYY[年]MM[月]DD[日] HH[時]mm[分]ss[秒]")}
                    <div style={{ marginTop: 20,borderTop: "1px", borderLeft: "1px", borderRight: "1px", borderColor:"#dbdbdb", borderStyle:'solid'}} />
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
  setId([])
  return;
}

export default App;
