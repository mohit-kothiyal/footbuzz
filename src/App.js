import './App.css';
import GlobalStyle from './components/GlobalStyle';
import Home from './components/Home';
import Nav from './components/Nav';
function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<Home />
		</div>
	);
}

export default App;
