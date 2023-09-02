import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import UpdateTask from './components/UpdateTask';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}/>

        <Route path='/task' element={<TaskList />}></Route>
        <Route path='/create' element={<CreateTask />}></Route>
        <Route path='/update/:id' element={<UpdateTask />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App