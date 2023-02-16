import { useState } from "react";
import "./App.css";

import CardsList from "./CardsList/CardsList";

function App() {
	const [count, setCount] = useState(0);

	return (
  
		<div className="App">
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
         < CardsList />
		</div>
	);
}

export default App;
