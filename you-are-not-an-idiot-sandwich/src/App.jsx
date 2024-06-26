import { useState } from 'react'
import './App.css'
import List from './components/List.jsx'


function App() {

  return (
    <>
    <navbar>
      <img src="" alt="logo" />
      <div>company name</div>
      <img src="" alt="menu icon" />
      <div>
        <a href="">Home</a>
        <a href="">About Us</a>
      </div>
    </navbar>
    <section className='content'>
<List />
    </section>
    <footer>

    </footer>
    </>
  )
}

export default App
