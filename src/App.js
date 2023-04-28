
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" ></Route>
          <Route path="/addtask" ></Route>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
