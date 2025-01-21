import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App/>);

export function Button() {
    return <button>Click me</button>;
}