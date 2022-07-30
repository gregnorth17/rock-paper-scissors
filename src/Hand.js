const Hand = (props) => {

	const selectHand = (event) => {
		props.setStart(true)
		props.setUserChoice(event.target.src)
		props.setChosenClass(event.target.className)
	}

	return (

		<div onClick={selectHand}>
			<img  className={`hand ${props.class}`}  src={props.img} alt="hand" />
		</div>
	)
}

export default Hand;