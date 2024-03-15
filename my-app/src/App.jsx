import React from 'react'
import './App.css'
import Render from './Render.jsx'
import { Header,SideBar } from './components/index.js'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="flex h-screen ">
      <div>
        <SideBar />
      </div>
      <div className="flex flex-col flex-1 overflow-x-hidden">
        <Header />
        <div className="overflow-y-auto flex-1">
          <Render></Render>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}




export default App
