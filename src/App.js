import logo from './logo.svg';
import './App.css'

function App(){
    return(
        <div className='App'>
            <h1>App className</h1>
            <header className="App-header">
                <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvip2.loli.io%2F2023%2F02%2F09%2FVLDBIjE2T8FAve3.jpg&f=1&nofb=1&ipt=09d1ddda5fdde1c9c3278c1232eb7f3ea33bbbd1a8ff64378fa4eeabe986f21c"
                    alt="Ops no img loading"
                    style={{ 
	                    width: "100%", 
	                    maxWidth: "600px",
	                    height: "auto"
                    }} />
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