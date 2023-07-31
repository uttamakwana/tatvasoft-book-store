import "./App.css";
import ContextProvider from "./context/ContextProvider";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <ContextProvider>
      <AllRoutes />
    </ContextProvider>
  );
}

export default App;
