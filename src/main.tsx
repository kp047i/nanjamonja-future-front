import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Robby } from "./pages/game/Robby";
import { Play } from "./pages/game/Play/play.tsx";
import { GameLayout } from "./features/Game/GameContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "game",
    element: <GameLayout />,
    children: [
      {
        path: "robby",
        element: <Robby />,
      },
      {
        path: "play",
        element: <Play />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
