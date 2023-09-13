"use client";

import React from "react";
import styles from "./darkmodetoggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

export default function DarkModeToggle() {
	const { toggle, mode } = React.useContext(ThemeContext);

	return (
		<div className={styles.container} onClick={toggle}>
			<div className={styles.icon}>🌙 </div>
			<div className={styles.icon}>🔆</div>
			<div
				className={styles.ball}
				style={mode === "light" ? { left: "2px" } : { right: "2px" }}
			/>
		</div>
	);
}
