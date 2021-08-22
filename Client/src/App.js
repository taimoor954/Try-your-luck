import logo from "./logo.svg";
import "./App.css";
import web3 from "./web3";

function App() {
  // console.log(web3.version);
  // web3.eth.getAccounts().then(console.log); //wont work because meta mask k latter version may permission mangta hai apki app meta mask extension say once approved tou accounts mil jatay hen
  web3.eth.requestAccounts().then(console.log);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
