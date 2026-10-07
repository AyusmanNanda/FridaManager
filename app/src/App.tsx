import { registerPlugin } from "@capacitor/core";
import { useState } from "react";
import "./App.css";

const Root: any = registerPlugin("Root");

function App() {
    const [status, setStatus] = useState("unknown");

    const checkStatus = async () => {
        try {
            const result = await Root.status();

            console.log("Status:", result);

            setStatus(result.output);
        } catch (err) {
            console.error("Status check failed:", err);
            setStatus("error");
        }
    };

    const testBridge = async () => {
        try {
            await Root.test();

            console.log("Bridge works");
            alert("Bridge works");
        } catch (err) {
            console.error("Bridge failed:", err);
            alert("Bridge failed");
        } finally {
            await checkStatus();
        }
    };

    const startFrida = async () => {
        try {
            const result = await Root.start();

            console.log("Start:", result);
            alert(result.output);
        } catch (err: any) {
            console.error("Failed to start Frida:", err);
            alert(`Failed to start Frida: ${err}`);
        } finally {
            await checkStatus();
        }
    };

    const stopFrida = async () => {
        try {
            const result = await Root.stop();

            console.log("Stop:", result);
            alert(result.output);
        } catch (err: any) {
            console.error("Failed to stop Frida:", err);
            alert(`Failed to stop Frida: ${err}`);
        } finally {
            await checkStatus();
        }
    };

    return (
        <main className="app">
        <h1>Frida Manager</h1>

        <div className="status-card">
        <h2>Status</h2>
        <p>Frida server: {status}</p>
        </div>

        <div className="actions">
        <button onClick={startFrida}>
        Start Frida
        </button>

        <button onClick={stopFrida}>
        Stop Frida
        </button>

        <button onClick={checkStatus}>
        Check Status
        </button>

        <button onClick={testBridge}>
        Test Android Bridge
        </button>
        </div>
        </main>
    );
}
export default App;
