import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter basename="space-tourism-website">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
