import Head from "next/head";
import { createClient } from "contentful";
import RecipeCards from "../components/RecipeCards";

export default function Home({ recipes }) {
	// console.log(recipes);
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<RecipeCards recipes={recipes} />
			</main>
		</div>
	);
}

export const getStaticProps = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE,
		accessToken: process.env.CONTENTFUL_TOKEN
	});

	const response = await client.getEntries({ content_type: "recipe" });
	return {
		props: { recipes: response.items },
		revalidate: 1
	};
};
