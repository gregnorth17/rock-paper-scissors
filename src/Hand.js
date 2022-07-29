const Hand = (props) => {

	const selectHand = (event) => {
		console.log(event.target.className)
		// console.log(event.currentTarget.class)
		
		props.setUserChoice(event.target.src)
		// props.setChosenClass(event.target.className)
	}

	return (

	<div 	onClick={selectHand} >
			<img  className={`hand ${props.class}`}  src={props.img} alt="hand" />
		</div>
	)
}

export default Hand;