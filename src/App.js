
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<TaskList/>}></Route>
          <Route path="/addtask" element={<TaskForm/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
