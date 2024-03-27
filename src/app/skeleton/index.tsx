import React from "react";

interface SkeletonProps {
  border?: number;
  outerHeight?: number | string;
  outerWidth?: number;
  imgHeight?: number;
  imgWidth?: number;
  lines?: number;
  lineHtt?: number;
  lineWt?: number;
  lineMargin?: number;
  isImageCircle?: boolean;
  padding?: number;
  center?: boolean;
}

const Skeleton = ({
  border = 20,
  outerHeight = "auto",
  outerWidth = 400,
  imgHeight = 150,
  imgWidth = 200,
  lines = 2,
  lineHtt = 30,
  lineWt = 300,
  lineMargin = 10,
  isImageCircle = false,
  padding = 20,
  center = false,
}: SkeletonProps) => {
  const arr = [];
  for (let i = 1; i <= lines; i++) {
    arr.push(i.toString());
  }

  return (
    <div
      style={{
        border: `${border}px solid #ececec`,
        height: outerHeight,
        width: outerWidth,
        padding: padding,
        ...(center && { display: "flex" }),
        ...(center && { justifyContent: "center" }),
        ...(center && { flexDirection: "column" }),
        ...(center && { alignItems: "center" }),
      }}
    >
      <div
        style={{
          height: imgHeight,
          width: imgWidth,
          ...(isImageCircle && { borderRadius: "50%" }),
        }}
        className="is-loading-img"
      ></div>
      {arr?.map((line: string) => (
        <div
          className="is-loading"
          style={{ height: lineHtt, width: lineWt, marginTop: lineMargin }}
        ></div>
      ))}
      <div
        className="is-loading"
        style={{ height: lineHtt, width: lineWt / 2, marginTop: lineMargin }}
      ></div>
    </div>
  );
};

export default Skeleton;
