import { useEffect, useState } from 'react'

import './App.css'

function DefaultPrompt() {
    return (
        <>
            <p>Welcome to Siddharth's Portfolio. Type 'help' to see all available commands</p>
        </>
    )
}

function TermWindow() {
    return (
        <div className="container-lg" id="term-window">
            <DefaultPrompt />
        </div>
    )
}

function App() {
    useEffect(() => {
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: false,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xa43f3f,
            backgroundColor: 0x201f29
        })
    }, [])

    return (
        <>
            <div className="vantaBg" id="vanta-bg"></div>
            <div className="screen">
                <TermWindow/>
            </div>

        </>
    )
    // const [count, setCount] = useState(0)

    /*return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={ viteLogo } className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={ reactLogo } className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={ () => setCount((count) => count + 1) }>
                    count is { count }
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )*/
}

export default App
