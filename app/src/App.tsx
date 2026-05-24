import './App.css'
import { registerPlugin } from "@capacitor/core";

const Root: any = registerPlugin('Root')

function App() {
    const testBridge = async () =>{
        try{
            await Root.test()
            console.log('Bridge works')
            alert('Bridge works')
        }
        catch(err){
            console.log(err)
            alert('Bridge failed')
        }
    }
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
                <button onClick={() => testBridge()}>Test Andrid Bridge</button>
            </div>
        </main>

    )
}
export default App;