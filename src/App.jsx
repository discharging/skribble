import { createRoot } from "react-dom/client";
import Page from "./Page";

const App = () => {
  return (
    <div>
      <Page />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
