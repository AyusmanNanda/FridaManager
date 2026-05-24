import './App.css'
function App() {
    return (
        <main className="app">
            <h1>Frida Manager</h1>
            <div className="status-card">
                <h2>Status</h2>
                <p>Frida server: Stopped</p>
            </div>
            <div className="actions">
                <button>Start Frida</button>
                <button>Stop Frida</button>
                <button>Check Status</button>
            </div>
        </main>

    )
}
export default App;