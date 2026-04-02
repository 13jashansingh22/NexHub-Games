type Game = {
	title: string;
	image: string;
	genre: string;
	rating: number;
	players: string;
	url: string;
};

export const games: Game[] = [
	{
		title: "game1",
		image: "https://plus.unsplash.com/premium_vector-1729263877891-2911a99783d3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		genre: "Action",
		rating: 4.6,
		players: "1-4",
		url: "https://html.itch.zone/html/17019871/index.html?v=1775068472",
	},
	{
		title: "game2",
		image: "https://plus.unsplash.com/premium_vector-1729263877891-2911a99783d3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		genre: "Adventure",
		rating: 4.8,
		players: "1-2",
		url: "/game/game2",
	},
	{
		title: "game3",
		image: "https://plus.unsplash.com/premium_vector-1729263877891-2911a99783d3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		genre: "Racing",
		rating: 4.4,
		players: "2-8",
		url: "/game/game3",
	},
];