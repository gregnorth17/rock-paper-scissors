import { useState, useEffect } from "react";
import './App.css';
import Hand from "./Hand";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import rules from "./images/image-rules.svg";

function App() {



	const [score, setScore] = useState(JSON.parse(localStorage.getItem("score")));
	const [start, setStart] = useState(false);
	const [userChoice, setUserChoice] = useState("");
	const [chosenClass, setChosenClass] = useState("");

	const [houseChoice, setHouseChoice] = useState("");
	const [randomImg, setRandomImg] = useState("");

	const [resultMessage, setResultMessage] = useState("");

	useEffect(() => {
		localStorage.setItem("score", JSON.stringify(score));
	},[score])

	useEffect(() => {
		const getHouseHand = () => {
			const houseImg = [rock, paper, scissors];
			const houseArray = ["rock", "paper", "scissors"]
		
			const randomNumber = Math.floor(Math.random() * houseArray.length);
			setHouseChoice(houseArray[randomNumber]);
			setRandomImg(houseImg[randomNumber]);
		}
		getHouseHand();
	},[randomImg]);


	useEffect(() => {
		const result = () => {
			const user = chosenClass.split(" ")[1];
			console.log(user, houseChoice);
			if(user === houseChoice) {
				setResultMessage("IT'S A DRAW");
			} else if(
							user === "rock" && houseChoice === "paper" ||
							user === "paper" && houseChoice === "scissors" ||
							user === "scissors" && houseChoice === "rock"
							) {
				setResultMessage("YOU LOSE");
			} else if (
				user === "paper" && houseChoice === "rock" ||
				user === "scissors" && houseChoice === "paper" ||
				user === "rock" && houseChoice === "scissors"
			) {
				setScore(prevScore => prevScore + 1);
				setResultMessage("YOU WIN");
			}
		}
		result();
	}, [userChoice])

	const openRules = () => {
		document.querySelector(".overlay").style.display = "block"; 
	}

	const closeRules = () => {
		document.querySelector(".overlay").style.display = "none"; 
	}

	const restartGame = () => {
		setStart(false);
		setUserChoice("");
		setChosenClass("");
		setHouseChoice("");
		setRandomImg("");
		setResultMessage("");
	}

	
	
  return (
    <div className="App">
			<div>
				<div className="container">
					<div className="options">
						<h3 className="option">Rock</h3>
						<h3 className="option">Paper</h3>
						<h3 className="option">Scissors</h3>
					</div>
					<div className="score-container">
						<p className="score-text">score</p>
						<p className="score">{score}</p>
					</div>
				</div>
			</div>
			{
				userChoice == false ? 
					<div className="triangle">
						<Hand setStart={setStart} setChosenClass={setChosenClass} setUserChoice={setUserChoice}  img={rock} class="rock" />
						<Hand setStart={setStart} setChosenClass={setChosenClass} setUserChoice={setUserChoice} img={paper} class="paper" />
						<Hand setStart={setStart} setChosenClass={setChosenClass} setUserChoice={setUserChoice} img={scissors} class="scissors" />
					</div>:
					<div className="game">
						<div>
							<Hand img={userChoice} class={`chosen ${chosenClass}`} />
							<p className="game-text">you picked</p>
						</div>
						<div>
							<Hand img={randomImg} class={`random ${houseChoice}`}/>
							<p className="game-text">the house picked</p>
						</div>
					</div>
				
			}
			{
					start && 
					<div className="play-again">
						<p className="result-message">{resultMessage}</p>
						<button className="btn play-again-btn" onClick={restartGame}>play again</button>
					</div>
					}
			<div>
			<button onClick={openRules} className="btn">Rules</button>
				<div className="overlay">
					<div className="rules">
						<h3 className="rules-title">RULES</h3>
						<img className="rules-img" src={rules} alt="" />
						<button className="rules-btn" onClick={closeRules}>X</button>
					</div>
				</div>
			</div>
    </div>
	
  );
}

export default App;
