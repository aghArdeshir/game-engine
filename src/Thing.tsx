import { useEffect, useRef } from "react";
import { I_Action, I_Thing } from "./game";
import Rectangle from "./Rectangle";

type Props = {
  thing: I_Thing;
};

function actOn(ref: HTMLDivElement, actions: I_Action[]) {
  actions.forEach((action) => {
    if (action.type === "move") {
      switch (action.direction) {
        case "down":
          ref.style.top = (parseInt(ref.style.top) || 0) + action.speed + "px";
          break;
        case "left":
          ref.style.left =
            (parseInt(ref.style.left) || 0) - action.speed + "px";
          break;
        case "right":
          ref.style.left =
            (parseInt(ref.style.left) || 0) + action.speed + "px";
          break;
        case "up":
          ref.style.top = (parseInt(ref.style.top) || 0) - action.speed + "px";
          break;
      }
    }
  });
}

export default function Thing(props: Props) {
  const { thing } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    thing.events.forEach((thingEvent) => {
      document.addEventListener("keydown", (e) => {
        if (e.key === thingEvent.key) {
          if (ref.current) {
            actOn(ref.current, thingEvent.actions);
          }
        }
      });
    });
  });

  if (thing.shape.type === "rectangle") {
    return <Rectangle ref={ref} shape={thing.shape} />;
  }

  return <></>;
}
