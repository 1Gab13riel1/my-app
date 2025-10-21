import logo from './logo.svg';
import './App.css'

function App(){
    return(
        <div className='App'>
            <h1>App className</h1>
            <header className="App-header">
                <img
                    src="http://pngimg.com/image/12489"
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