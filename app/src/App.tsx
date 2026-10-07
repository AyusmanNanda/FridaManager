import { registerPlugin } from "@capacitor/core";
import {useState} from "react";
import './App.css'

const Root: any = registerPlugin('Root')

function App() {
    const [status, setStatus] = useState('unknown ')
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
    const checkStatus = async() => {
        try{
            const result = await Root.status()
            setStatus(result.status)
            console.log(result)
        }
        catch(err){
            console.log(err)
            setStatus('error')
        }
    }
    const startFrida = async () => {
        try {
            const result = await Root.start()
            console.log(result)
            alert(result.output)
            await checkStatus()
        } catch (err: any) {
            console.error(err)
            alert(`Failed to start Frida: ${err}`)
        }
    }

    const stopFrida = async () => {
        try {
            const result = await Root.stop()
            console.log(result)
            alert(result.output)
            await checkStatus()
        } catch (err: any) {
            console.error(err)
            alert(`Failed to stop Frida: ${err}`)
        }
    }
    return (
        <main className="app">
            <h1>Frida Manager</h1>
            <div className="status-card">
                <h2>Status</h2>
                <p>Frida server: {status}</p>
            </div>
            <div className="actions">
                <button>Start Frida</button>
                <button>Stop Frida</button>
                <button onClick={startFrida}>Start Frida</button>
                <button onClick={stopFrida}>Stop Frida</button>
                <button onClick={checkStatus}>Check Status</button>
                <button onClick={testBridge}>Test Android Bridge</button>
            </div>
        </main>

    )
}
export default App;
