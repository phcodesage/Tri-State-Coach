import { useReducer } from "react";

interface Props {
  property1: "variant-2" | "default";
  className: any;
}

export const Button = ({ property1, className }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <button
      className={`all-[unset] box-border w-[284px] h-[66px] rounded-[10px] relative ${
        state.property1 === "variant-2" ? "bg-[#a13d3d]" : "bg-[#eae2bf]"
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`[font-family:'Inter',Helvetica] left-[47px] tracking-[0] text-[24px] font-normal text-center leading-[normal] absolute ${
          state.property1 === "variant-2" ? "top-[18px]" : "top-[17px]"
        } ${state.property1 === "variant-2" ? "text-[#faf9f3]" : "text-black"}`}
      >
        Request a Quote
      </div>
    </button>
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
