import React from "react";
import dayjs from "dayjs";

export function TweetsResults({castInfo}: any) {
  return (
    <div style={{ display: "inline-grid", marginLeft: 50, marginRight: 50 }}>
      <div>
        <img src={castInfo.cast.profile_image_url} />
        <div style={{ fontSize: 20, paddingBottom: 20 }}>{castInfo.cast.name}</div>
      </div>
      {castInfo.tweets.map((tweet: any) => (
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
}
