import { useState } from "react";
import './App.css';
import Hand from "./Hand";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import rules from "./images/image-rules.svg";

function App() {

	const [userChoice, setUserChoice] = useState("");
	const [chosenClass, setChosenClass] = useState("");


	const openRules = () => {
		document.querySelector(".overlay").style.display = "block"; 
	}

	const closeRules = () => {
		document.querySelector(".overlay").style.display = "none"; 
	}

	
	console.log(userChoice)
	console.log(chosenClass)
	


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
			{
				userChoice == false ? 
				<div className="triangle">
					<Hand setChosenClass={setChosenClass} setUserChoice={setUserChoice}  img={rock} class="rock" />
					<Hand setChosenClass={setChosenClass} setUserChoice={setUserChoice} img={paper} class="paper" />
					<Hand setChosenClass={setChosenClass} setUserChoice={setUserChoice} img={scissors} class="scissors" />
				</div>:
				<Hand img={userChoice} class={chosenClass} />
			}

			<button onClick={openRules} className="btn">Rules</button>
			<div className="overlay">
				<div className="rules">
					<h3 className="rules-title">RULES</h3>
					<img className="rules-img" src={rules} alt="" />
					<button className="rules-btn" onClick={closeRules}>X</button>
				</div>
			</div>
    </div>


  );
}

export default App;
