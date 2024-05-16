import { loadExternalStyles } from "alem";
import Home from "./pages/Home";

const App = () => {
  // NOTE: You can configure this font with Tailwind, see tailwind.config.js file
  loadExternalStyles(["https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"]);

  return <Home />;
};

export default App;
