import react from "react";

export function SpSectionHeader({title}: any) {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "left",
        marginLeft: 10,
        marginTop: 50,
        paddingBottom: 30,
        fontSize: 40,
        fontFamily: "a-otf-midashi-go-mb31-pr6n, sans-serif",
        fontWeight: 600,
        fontStyle: "normal",
      }}
    >
      {title}
    </div>
  );
}
