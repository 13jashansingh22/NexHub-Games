type Game = {
	title: string;
	image: string;
	genre: string;
	rating: number;
	players: number;
	url: string;
};

export const games: Game[] = [
	{
		title: "game1",
		image: "https://plus.unsplash.com/premium_vector-1729263877891-2911a99783d3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		genre: "Action",
		rating: 4.6,
		players: 4,
		url: "/game/game1",
	},
	{
		title: "game2",
		image: "https://plus.unsplash.com/premium_vector-1729263877891-2911a99783d3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		genre: "Adventure",
		rating: 4.8,
		players: 2,
		url: "/game/game2",
	},
	{
		title: "game3",
		image: "https://plus.unsplash.com/premium_vector-1729263877891-2911a99783d3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		genre: "Racing",
		rating: 4.4,
		players: 8,
		url: "/game/game3",
	},
];