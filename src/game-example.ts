import { I_Game } from "./game";

export const gameExample: I_Game = {
  things: [
    {
      name: "ship",
      shape: {
        type: "rectangle",
        width: 200,
        height: 100,
        backgroundColor: "#00FFFF",
      },
      events: [
        {
          key: "ArrowUp",
          actions: [
            {
              type: "move",
              direction: "up",
              speed: 15,
            },
          ],
        },
        {
          key: "ArrowRight",
          actions: [
            {
              type: "move",
              direction: "right",
              speed: 15,
            },
          ],
        },
        {
          key: "ArrowLeft",
          actions: [
            {
              type: "move",
              direction: "left",
              speed: 15,
            },
          ],
        },
        {
          key: "ArrowDown",
          actions: [
            {
              type: "move",
              direction: "down",
              speed: 15,
            },
          ],
        },
      ],
    },
  ],
  rooms: [
    {
      width: 600,
      height: 400,
      things: [
        {
          x: 100,
          y: 100,
          name: "ship",
        },
      ],
    },
  ],
};
