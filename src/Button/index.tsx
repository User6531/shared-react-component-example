import React, { memo, PropsWithChildren, ButtonHTMLAttributes } from "react";

type Props = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: "red" | "blue" | "huinua";
  };

export const Button = memo(({ children, color, ...props }: Props) => (
  <button
    style={{
      backgroundColor: "green",
      color: "black",
      padding: "15px 30px",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      columnGap: "20px",
    }}
    {...props}
  >
    {children} {color}
  </button>
));

Button.displayName = "Button";
