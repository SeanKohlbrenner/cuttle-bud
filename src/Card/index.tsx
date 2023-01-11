import { useEffect, useState } from "react";

import "./index.css"

type CardProps = {
	cardType: string,
	activeCard: string,
	setActiveCard: React.Dispatch<React.SetStateAction<string>>
	suit: number
}

function Card({cardType, activeCard, setActiveCard, suit}: CardProps) {
	const [cardClass, setCardClass] = useState("card");

	// Other card clicked, remove class
	useEffect(() => {
		if (activeCard !== cardType) {
			setCardClass("card");
		}
	}, [activeCard]);

	const handleCardClick = () => {
		if (activeCard === cardType) {
			// card already active: return to base state
			setCardClass("card");
			setActiveCard("JOK");
		}
		else {
			setCardClass("card active")
		}
	}

	let suitSymbol;
	if (suit === 1) {
		suitSymbol = <p>♠</p>
	}
	else if (suit === 2) {
		suitSymbol = <p>♥</p>
	}
	else if (suit === 3) {
		suitSymbol = <p>♦</p>
	}
	else {
		suitSymbol = <p>♣</p>
	}

	return (
		<div
			className={cardClass}
			onClick={() => {
				setActiveCard(cardType);
				handleCardClick();
			}}>
			<div className={suit === 2 || suit === 3 ? "card-label card-label-upper red-suit" : "card-label card-label-upper"}>
				<p>{cardType}</p>
				{suitSymbol}
			</div>
			<div className="card-label card-label-main">
				<p>{cardType}</p>
			</div>
			<div className={suit === 2 || suit === 3 ? "card-label card-label-lower red-suit" : "card-label card-label-lower"}>
				<p>{cardType}</p>
				{suitSymbol}
			</div>
		</div>
	);
}

export default Card;