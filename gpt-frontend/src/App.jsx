import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

export default function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar/>
      <ChatWindow/>
    </div>
  );
}

