const Hand = ({img}) => {
	console.log(img);
	const style = {
		border: "15px solid red",
		borderRadius: "50%",
		width: "100px",
		padding: "1em"

	}
	return (
		
			<img style={style} src={img} alt="" />
		
	)
}

export default Hand;