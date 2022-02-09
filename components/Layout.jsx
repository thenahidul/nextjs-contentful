import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<nav>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
				</ul>
			</nav>

			<div className="page-content">{children}</div>

			<footer>
				<p>Copyright &copy; 2022, All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Layout;
