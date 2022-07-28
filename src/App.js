import './App.css';
import Hand from "./Hand";
import triangle from "./images/bg-triangle.svg";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";

function App() {

  return (
    <div className="App">
			<div className="container">
				<div className="options">
					<h3 className="option">Rock</h3>
					<h3 className="option">Paper</h3>
					<h3 className="option">Scissors</h3>
				</div>
				<div className="score-container">
					<p className="score-text">score</p>
					<p className="score">0</p>
				</div>
			</div>
			<div className="triangle">
				<img className="triangle2" src={triangle} alt="" />
				<Hand  img={rock} class="rock" />
				<Hand  img={paper} class="paper" />
				<Hand  img={scissors} class="scissors"/>
			</div>
			<button>Rules</button>
    </div>
  );
}

export default App;
