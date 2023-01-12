import { useState } from "react";
import Card from "./Card";
import CardActionDetails from "./CardActionDetails";

import "./App.css"

function App() {
	const [activeCard, setActiveCard] = useState("JOK");
	const [suit, setSuit] = useState(1); // spade: 1 diamond: 2 heart: 3 club: 4

  return (
    <div id="app">
			<h1>Cuttle Bud</h1>
			<CardActionDetails activeCard={activeCard} suit={suit} />
      <div id="card-grid">
				<div className="column-3">
					<Card
						cardType={"J"}
						activeCard={activeCard}
						setActiveCard={setActiveCard}
						suit={suit}
					/>
					<Card
						cardType={"Q"}
						activeCard={activeCard}
						setActiveCard={setActiveCard}
						suit={suit}
					/>
					<Card
						cardType={"K"}
						activeCard={activeCard}
						setActiveCard={setActiveCard}
						suit={suit}
					/>
				</div>
				<div className="column-2">
					<Card
						cardType={"A"}
						activeCard={activeCard}
						setActiveCard={setActiveCard}
						suit={suit}
					/>
					<Card
						cardType={"2"}
						activeCard={activeCard}
						setActiveCard={setActiveCard}
						suit={suit}
					/>
				</div>
				<div className="column-3">
					<Card
						cardType={"3"}
						activeCard={activeCard}
						setActiveCard={setActiveCard}
						suit={suit}
					/>
					<Card
						cardType={"4"}
						activeCard={activeCard}
						setActiveCard={setActiveCard}
						suit={suit}
					/>
					<Card
						cardType={"5"}
						activeCard={activeCard}
						setActiveCard={setActiveCard}
						suit={suit}
					/>
				</div>
				<div className="column-2">
					<Card
						cardType={"6"}
						activeCard={activeCard}
						setActiveCard={setActiveCard}
						suit={suit}
					/>
					<Card
						cardType={"7"}
						activeCard={activeCard}
						setActiveCard={setActiveCard}
						suit={suit}
					/>
				</div>
				<div className="column-3">
					<Card
						cardType={"8"}
						activeCard={activeCard}
						setActiveCard={setActiveCard}
						suit={suit}
					/>
					<Card
						cardType={"9"}
						activeCard={activeCard}
						setActiveCard={setActiveCard}
						suit={suit}
					/>
					<Card
						cardType={"10"}
						activeCard={activeCard}
						setActiveCard={setActiveCard}
						suit={suit}
					/>
				</div>

				<div className="suit-selector">
					<button 
						type="button"
						onClick={() => setSuit(1)}
					>
						{suit === 1 ? "\u2660\uFE0E" : "\u2664\uFE0E"}
					</button>
					<button 
						type="button"
						onClick={() => setSuit(2)}
					>
						{suit === 2 ? "\u2665\uFE0E" : "\u2661\uFE0E"}
					</button>
					<button 
						type="button"
						onClick={() => setSuit(3)}
					>
						{suit === 3 ? "\u2666\uFE0E" : "\u2662\uFE0E"}
					</button>
					<button 
						type="button"
						onClick={() => setSuit(4)}
					>
						{suit === 4 ? "\u2663\uFE0E" : "\u2667\uFE0E"}
					</button>
				</div>
			</div>
    </div>
  )
}

export default App
