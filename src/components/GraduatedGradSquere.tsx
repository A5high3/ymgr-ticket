import React, { useEffect, useState } from "react";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function GraduatedGradationSquere({ squere, setIsShowGraduated }: any) {
  const [squereSize, setSquereSize] = useState(0);
  const [marginLeft3digit, set3digit] = useState(0);
  const [marginLeft2digit, set2digit] = useState(0);
  const [marginLeft1digit, set1digit] = useState(0);
  const [rotateDeg, setRotateDeg] = useState(0);
  const [animationTime, setAnimationTime] = useState(0);
  useEffect(() => {
    const widthAndHeight = +`1${getRandomInt(1, 2)}0`;
    const marginLeft3digit = getRandomInt(0, 2);
    const marginLeft2digit = getRandomInt(0, 9);
    const marginLeft1digit = getRandomInt(0, 9);
    const rotateDeg = getRandomInt(10, 120);
    const animationTime = getRandomInt(15, 30);

    setSquereSize(widthAndHeight);
    set3digit(marginLeft3digit);
    set2digit(marginLeft2digit);
    set1digit(marginLeft1digit);
    setRotateDeg(rotateDeg);
    setAnimationTime(animationTime);
  }, [squere]);
  return (
    <>
      <div
        style={{
          marginTop: 20,
          marginLeft:
            +`${marginLeft3digit}${marginLeft2digit}${marginLeft1digit}`,
          width: +`${squereSize}`,
          height: +`${squereSize}`,
          position: "absolute",
          border: "3px solid #c21500",
          borderImage:
            "linear-gradient(to right, rgba(76, 111, 271) 0%, rgba(0, 0, 51) 100%)",
          borderImageSlice: 1,
          zIndex: 1,
          transform: `translateY(0px) rotate(${rotateDeg}deg)`,
          animation: `spin infinite ${animationTime}s linear`,
        }}
        onClick={() => {
          alert("卒業されたキャストさん表示をオンにしました")
          setIsShowGraduated(true);
        }}
      >
      </div>
    </>
  );
}
