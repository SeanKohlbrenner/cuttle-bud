import {
	ONE_OFF_EFFECTS,
	PERMANENT_EFFECTS,
	POINT_CARDS
} from "../common/rules.js";

import "./index.css";

type CardActionDetailsProps = {
	activeCard: string,
	suit: number
}

function getScuttleSuits(suit: number) {
	switch(suit) {
		case 1:
			return "♥, ♦, or ♣";
		case 2:
			return "♦ or ♣";
		default:
			return "♣";
	}
}

function getScuttleText(activeCard: string, suit: number) {
	if (activeCard === "A") {
		return "n A of " + getScuttleSuits(suit);
	}
	else if (activeCard === "2") {
		return "ny A or " + activeCard + " of " + getScuttleSuits(suit);
	}
	else {
		return "ny " + (Number(activeCard) - 1) + " or " + activeCard + " of " + getScuttleSuits(suit);
	}
}

function CardActionDetails({ activeCard, suit }: CardActionDetailsProps) {
	return (
		<div id="card-action-details">
			{activeCard === "JOK" && <p>- - -</p>}
			{activeCard !== "JOK" && 
				<>
					{POINT_CARDS.includes(activeCard) &&
						<>
							<p><strong>Point Card:</strong> Play for {activeCard === "A" ? "1 point" : activeCard + " points"}</p>
						{suit !== 4 &&
								<p><strong>Scuttle:</strong> Play to remove a{getScuttleText(activeCard, suit)}</p>
						}
						</>
					}
					{Object.keys(ONE_OFF_EFFECTS).includes(activeCard) &&
						<p><strong>One-Off Effect:</strong> {ONE_OFF_EFFECTS[activeCard]}</p>
					}
					{Object.keys(PERMANENT_EFFECTS).includes(activeCard) &&
						<p><strong>Permanent Effect:</strong> {PERMANENT_EFFECTS[activeCard]}</p>
					}
				</>
			}
		</div>
	);
}

export default CardActionDetails;