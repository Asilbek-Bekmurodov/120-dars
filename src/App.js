import "./assets/styles/app.css";
import Bunner from "./components/bunner";
import Header from "./components/header";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Header />
      <Bunner/>
    </div>
  );
}

export default App;
