import React from 'react'
import Header from './components/Header'
import { Home } from './pages/Home'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  )
}

export default App
