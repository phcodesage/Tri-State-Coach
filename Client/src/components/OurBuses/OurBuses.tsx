/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

interface Props {
  property1: "variant-2" | "default";
  className: any;
}

export const OurBuses = ({ property1, className }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`w-[94px] h-[22px] relative ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`[font-family:'Palatino_Linotype-Bold',Helvetica] left-0 tracking-[0] text-[16px] -top-px [text-shadow:0px_2px_4px_#00000040] font-bold text-center leading-[normal] absolute ${
          state.property1 === "variant-2" ? "text-[#a13d3d]" : "text-[#192636]"
        }`}
      >
        OUR BUSES
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}
