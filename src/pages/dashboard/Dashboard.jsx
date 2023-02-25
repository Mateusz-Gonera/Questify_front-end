<<<<<<< Updated upstream
import CardList from "../../components/CardsList/CardsList";

const Dashboard = () => {
    const cards = [
    { id: 1, title: "Buy the gift for Mary", date: "2023-02-23",time:"08-10", isChallenge: true, difficulty:"Normal", category:"Stuff" },
    { id: 2, title: "Webinar", date: "2023-02-23",time:"20-30", isChallenge: false, difficulty:"Hard", category:"Health" },
    { id: 3, title: "Read an article", date: "2023-02-22",time:"15-25", isChallenge: false, difficulty:"Easy", category:"Family" },
    { id: 4, title: "Watch a movie", date: "2023-02-23",time:"12-15", isChallenge: false, difficulty:"Normal", category:"Learning" },
    { id: 5, title: "Watch a movie",date: "2023-02-22",time:"11-30", isChallenge: false, difficulty:"Hard", category:"Leisure" },
    { id: 6, title: "Morning run", date: "2023-02-22",time:"09-45", isChallenge: false, difficulty:"Easy", category:"Work" },
  ];
  
	return (
		<div>
			<CardList  cards={cards} />
		</div>
	);
=======
import { useGetAllCardsQuery } from '../../redux/api/questifyApi';
import CardList from '../../components/CardsList/CardsList';
import { AppBar } from '../../components/appBar/AppBar';
const Dashboard = () => {
  //   const cards = [
  //   { id: 1, title: "Buy the gift for Mary", date: "2023-02-23",time:"08-10", isChallenge: true, difficulty:"Normal", category:"Stuff" },
  //   { id: 2, title: "Webinar", date: "2023-02-23",time:"20-30", isChallenge: false, difficulty:"Hard", category:"Health" },
  //   { id: 3, title: "Read an article", date: "2023-02-22",time:"15-25", isChallenge: false, difficulty:"Easy", category:"Family" },
  //   { id: 4, title: "Watch a movie", date: "2023-02-23",time:"12-15", isChallenge: false, difficulty:"Normal", category:"Learning" },
  //   { id: 5, title: "Watch a movie",date: "2023-02-22",time:"11-30", isChallenge: false, difficulty:"Hard", category:"Leisure" },
  //   { id: 6, title: "Morning run", date: "2023-02-22",time:"09-45", isChallenge: false, difficulty:"Easy", category:"Work" },
  // ];
  const { data, error, isLoading, isSuccess } = useGetAllCardsQuery();
  if (!data) return;
  const cards = data.cards;

  return (
    <div>
      <AppBar />
      <CardList cards={cards} />
    </div>
  );
>>>>>>> Stashed changes
};

export default Dashboard;
