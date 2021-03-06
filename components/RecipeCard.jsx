// import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ recipe }) => {
	const { title, slug, photo } = recipe.fields;

	return (
		<Link href={`/recipe/${slug}`} passHref>
			<div className="card">
				<div className="featured">
					<img
						src={`https://${photo.fields.file.url}`}
						alt={title}
						width={300}
						height={250}
					/>
					{/* <Image
						src={`http://${photo.fields.file.url}`}
						width={photo.fields.file.details.image.width}
						height={photo.fields.file.details.image.height}
						// width={300}
						// height={250}
						alt={title}
					/> */}
				</div>
				<div className="content">
					<div className="info">
						<h4>{title}</h4>
					</div>
					<div className="btn">Cook this</div>
				</div>
				<style jsx>{`
					.card {
						cursor: pointer;
						margin-bottom: 30px;
					}
					.btn {
						background: #009688;
						display: inline-block;
						color: #fff;
						padding: 10px 30px;
						border-radius: 5px;
					}

					.btn:hover {
						background: #077d72;
					}
				`}</style>
			</div>
		</Link>
	);
};

export default RecipeCard;
