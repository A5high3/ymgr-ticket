import React from "react";
import dayjs from "dayjs";

export function SpTweetsResults({castInfo}: any) {
  return (
    <div style={{ display: "inline-grid", marginLeft: 10, marginRight: 20, width: "30vw" }}>
      <div>
        <img src={castInfo.cast.profile_image_url} />
        <div style={{ fontSize: 15, paddingBottom: 20 }}>{castInfo.cast.name}</div>
      </div>
      {castInfo.tweets.map((tweet: any) => (
        <div style={{ marginBottom: 30, fontSize: 12 }}>
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
