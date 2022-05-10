import * as React from "react";
import { createRoot } from "react-dom/client";
import Main from "./components/main";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Main />);
