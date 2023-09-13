"use client";

import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";

export default function Dashboard() {
	// const [data, setData] = React.useState([]);
	// const [err, setErr] = React.useState(false);
	// const [isLoading, setIsLoading] = React.useState(false);

	// React.useEffect(() => {
	// 	const getData = async () => {
	// 		setIsLoading(true);
	// 		const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
	// 			cache: "no-cache",
	// 		});

	// 		if (!res.ok) {
	// 			setErr(true);
	// 		}

	// 		const data = await res.json();
	// 		setData(data);
	// 		setIsLoading(false);
	// 	};
	// 	getData();
	// }, []);

	const fetcher = (...args) => fetch(...args).then((res) => res.json());

	const { data, error, isLoading } = useSWR(
		"https://jsonplaceholder.typicode.com/posts",
		fetcher
	);
	console.log(data);

	return <div>About</div>;
}
