import Header from "./components/Layout/Header";
import Meals from "./components/Layout/Meals";
import AboutMeals from "./components/Layout/AboutMeals";
import { CartDataProvider } from "./context/card-data-context";

function App() {
	return (
		<CartDataProvider>
			<Header></Header>
			<main className="flex-col">
				<div className="relative -top-36">
					<AboutMeals></AboutMeals>
				</div>
				<Meals></Meals>
			</main>
		</CartDataProvider>
	);
}

export default App;
