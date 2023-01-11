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

function getScuttleSuits(activeCard: string, suit: number) {
	switch(suit) {
		case 1:
			return "♥\uFE0E, ♦\uFE0E, or ♣\uFE0E";
		case 2:
			return "♦\uFE0E or ♣\uFE0E";
		default:
			return "♣\uFE0E";
	}
}

function getScuttleText(activeCard: string, suit: number) {
	// Special cases: Aces and Clubs
	if (activeCard === "A") {
			return "ny A of " + getScuttleSuits(activeCard, suit);
	}
	if (suit === 4) {
		// Clubs is the lowest suit and can not scuttle an equal card
		if (activeCard === "2") {
			return "ny A";
		}
		else {
			return "ny " + (Number(activeCard) - 1);
		}
	}

	if (activeCard === "2") {
		return "ny A or " + activeCard + " of " + getScuttleSuits(activeCard, suit);
	}
	else {
		return "ny " + (Number(activeCard) - 1) + " or " + activeCard + " of " + getScuttleSuits(activeCard, suit);
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
							{(activeCard !== "A" || suit !== 4) && 
								<p>
									<strong>Scuttle:</strong> Play to remove a{getScuttleText(activeCard, suit)}
								</p>
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