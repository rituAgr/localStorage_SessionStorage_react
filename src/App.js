import './App.css';
import ComponentA from "./ComponentA";

function App() {
    const setData = () =>{
        let obj = {'name': 'Ritu', 'Occupation': 'Engineer'};
        localStorage.setItem('data', JSON.stringify(obj));
    }
    const getData = () => {
        let item = localStorage.getItem('data');
        console.log('item : ', JSON.parse(item));
        console.log('item name : ', JSON.parse(item).name);
    }
    const setSessionData = () => {
        let obj = {'name': 'Ritu Session', 'Occupation': 'Engineer Session'};
        sessionStorage.setItem('Session Object', JSON.stringify(obj));
    }
    const getSessionData = () => {
        let item = sessionStorage.getItem('Session Object');
        console.log('item : ', JSON.parse(item));
        console.log('item name : ', JSON.parse(item).name);
    }
    return (
        <div className="App">
            <h2>Local Storage</h2>
            <button onClick={setData}>Set data</button>
            <button onClick={getData}>Get data</button>
            <ComponentA/>
            <br />
            <h2>Session Storage</h2>
            <button onClick={setSessionData}>Set Session data</button>
            <button onClick={getSessionData}>Get Session data</button>
        </div>
    );
}

export default App;
