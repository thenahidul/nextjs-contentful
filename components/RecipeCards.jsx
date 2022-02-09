import RecipeCard from "./RecipeCard";
const RecipeCards = ({ recipes }) => {
	return (
		<div className="recipes">
			{recipes
				? recipes.map((recipe) => (
						<RecipeCard key={recipe.sys.id} recipe={recipe} />
				  ))
				: "Loading..."}
			<style jsx>{`
				.recipes {
					display: grid;
					grid-template-columns: 1fr 1fr;
					column-gap: 30px;
				}
			`}</style>
		</div>
	);
};

export default RecipeCards;
