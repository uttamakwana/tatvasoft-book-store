import "./App.css";
import ContextProvider from "./context/ContextProvider";
import AllRoutes from "./routes/AllRoutes";
import ThemeProvider from "./theme/ThemeProvider";

function App() {
  return (
    <ContextProvider>
      <ThemeProvider />
    </ContextProvider>
  );
}

export default App;
