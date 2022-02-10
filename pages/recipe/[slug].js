import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Skeleton from "../../components/Skeleton";

const RecipeSingle = ({ recipe }) => {
	if (!recipe) return <Skeleton />;

	const { title, content, photo, ingredients } = recipe.fields;

	return (
		<div>
			<div className="banner featured">
				<Image
					src={`https://${photo.fields.file.url}`}
					width={photo.fields.file.details.image.width}
					height={photo.fields.file.details.image.height}
					alt={title}
				/>
				<h1>{title}</h1>
			</div>

			<div className="info">
				<h3>Ingredients:</h3>
				{ingredients.map((ing) => (
					<p key={ing}>{ing}</p>
				))}
			</div>

			<div className="method">
				<div>{documentToReactComponents(content)}</div>
			</div>
			<style jsx>{`
				h1 {
					font-size: 30px;
				}
			`}</style>
		</div>
	);
};

/**/
const client = createClient({
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
	accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN
});

export const getStaticProps = async ({ params }) => {
	const { items } = await client.getEntries({
		content_type: "recipe",
		"fields.slug": params.slug
	});

	if (!items.length) {
		return {
			redirect: {
				destination: "/",
				permanent: false
			}
		};
	}
	return {
		props: { recipe: items[0] },
		revalidate: 1
	};
};

export const getStaticPaths = async () => {
	const { items } = await client.getEntries({ content_type: "recipe" });

	const paths = items.map((item) => {
		return {
			params: { slug: item.fields.slug }
		};
	});
	return { paths, fallback: true };
};

export default RecipeSingle;
