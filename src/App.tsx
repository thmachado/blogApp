import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page from "./pages/Page";
import "./styles/global.css";

export interface ContentProps {
	content: InternProps[],
	page: string,
	setPage: React.Dispatch<React.SetStateAction<string>>
}

export type ImageType = {
	url: string
}

export interface InternProps {
	content: {
		rendered: string
	}
	slug: string,
	title: {
		rendered: string
	},
	yoast_head_json: {
		og_image: ImageType[],
		og_title: string
	}
}

export const ContentContext = createContext({} as ContentProps);

function App() {

	const [content, setContent] = useState([]);
	const [page, setPage] = useState(String);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518");
			const data = await res.json();
			setContent(data);
		}

		fetchData();
	}, [])

	const ContentValue = {
		content: content,
		page: page,
		setPage: setPage
	}

	return (
		<ContentContext.Provider value={ContentValue}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/page" element={<Page />} />
				</Routes>
			</BrowserRouter>
		</ContentContext.Provider>
	)
}

export default App
