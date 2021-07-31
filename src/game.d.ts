export type I_ActionMove = {
  type: "move";
  direction: "up" | "right" | "down" | "left";
  speed: number;
};

export type I_Action = I_ActionMove;

export type I_Event = {
  key:
    | "ArrowUp"
    | "ArrowRight"
    | "ArrowDown"
    | "ArrowLeft"
    | " " /* Space */
    | "Enter"
    | "Escape";
  actions: I_Action[];
};

export type I_Rectangle = {
  type: "rectangle";
  width: number;
  height: number;
  backgroundColor: string; // hex+alpha color, e.g. `#65F8F880`
};

export type I_Circle = {
  type: "circle";
  radius: number;
  backgroundColor: string; // hex+alpha color, e.g. `#65F8F880`
};

export type I_Thing = {
  name: string;
  shape: I_Rectangle | I_Circle;
  events: I_Event[];
};

export type I_RoomThing = {
  name: string;
  x: number;
  y: number;
};

export type I_Room = {
  width: number;
  height: number;
  things: RoomThing[];
};

export type I_Game = {
  things: I_Thing[];
  rooms: I_Room[];
};
