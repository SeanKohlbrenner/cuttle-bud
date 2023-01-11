export const ONE_OFF_EFFECTS = {
	"A": "Discard all point cards on the table",
	"2": "Discard any permanent effect card on the table or block any one off effect played during your opponent's turn",
	"3": "Place any card from the discard pile into your hand",
	"4": "Force opponent to discard two cards of their choosing from their hand",
	"5": "Draw two cards from the draw pile",
	"6": "Discard all permanent effect cards on the table",
	"7": "Draw a card and play it immediately. If no possible moves, discard it",
	"9": "Return a permanent effect card to your opponent's hand",
	"J": "Transfer ownership of oponent's point card in play. Placed on top of card"
} as any;

export const PERMANENT_EFFECTS = {
	"8": "Oponent must play with their hand exposed. Placed horizontally on the table.",
	"Q": "Protects all other cards from Jacks and Twos. Does not protect itself",
	"K": "Reduces the points needed to win. 1 King: 14 points, 2 Kings: 10 points, 3 Kings: 7 points, 4 Kings: 5 points"
} as any;

export const POINT_CARDS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10"] as any;