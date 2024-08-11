import './App.css'

import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Provider  from './Context/MyContext'
import Home from './Pages/Home';
import Activity from './Pages/Activity'

function App() {

  return (
    <Provider>
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/activity/:actId' element={<Activity/>}/>
    </Routes>
    </BrowserRouter>
    
    </Provider>
  )
}

export default App
