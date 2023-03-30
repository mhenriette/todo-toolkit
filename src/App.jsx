import "./App.css";
import ToDo from "./components/ToDo";

const App = () => {
  return (
    <div className="flex h-screen justify-center bg-gradient-to-tr from-[#bdc3c7] to-[#2c3e50]">
      <ToDo />
    </div>
  );
};

export default App;
