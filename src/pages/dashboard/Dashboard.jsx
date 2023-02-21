import CardList from "../../components/CardsList/CardsList";

const Dashboard = () => {
    const cards = [
    { id: 1, title: "Buy the gift for Mary", date: "2023-03-01",time:"20-30", isChallenge: true, difficulty:"Normal", group:"Stuff" },
    { id: 2, title: "Webinar", date: "2023-02-28",time:"23-15", isChallenge: false, difficulty:"Hard", group:"Health" },
    { id: 3, title: "Read an article", date: "2023-03-05",time:"15-30", isChallenge: false, difficulty:"Easy", group:"Family" },
    { id: 4, title: "Watch a movie", date: "2023-03-03",time:"12-15", isChallenge: false, difficulty:"Normal", group:"Learning" },
    { id: 5, title: "Watch a movie",date: "2023-03-20",time:"11-30", isChallenge: false, difficulty:"Hard", group:"Leisure" },
    { id: 6, title: "Morning run", date: "2023-02-20",time:"09-30", isChallenge: false, difficulty:"Easy", group:"Work" },
  ];
	return (
		<div>
			<CardList  cards={cards} />
		</div>
	);
};

export default Dashboard;
