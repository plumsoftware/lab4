import { useState } from 'react'
import clsx from 'clsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import classes from './App.module.css'
import PrimaryButton from './components/primary-button'
import TopNav from './components/top_nav/TopNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={classes.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img 
          src={reactLogo} 
          className={clsx(classes.logo, classes.react)} 
          alt="React logo" />
        </a>

        <TopNav arr={['1', '2', '3', '4', '5']}></TopNav>
      </div>
      <h1>Vite + React</h1>
      <div className={classes.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <PrimaryButton text="Click me" />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={classes.readDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
