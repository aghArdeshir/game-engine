import React from "react";
import { I_Rectangle } from "./game";

type Props = { shape: I_Rectangle };

function Rectangle(props: Props, ref: React.Ref<HTMLDivElement>) {
  const { shape } = props;

  return (
    <div
      ref={ref}
      style={{
        width: shape.width,
        height: shape.height,
        backgroundColor: shape.backgroundColor,
        position: "absolute",
      }}
    />
  );
}

export default React.forwardRef(Rectangle);
