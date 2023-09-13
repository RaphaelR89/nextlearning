import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
	return (
		<div className={styles.container}>
			<div>Copyright Rocha. All rights reserved.</div>
			<div className={styles.social}>
				<Image
					src="/1.png"
					width={15}
					height={15}
					className={styles.icon}
					alt="ROCHA"
				/>{" "}
				<Image
					src="/2.png"
					width={15}
					height={15}
					className={styles.icon}
					alt="ROCHA"
				/>{" "}
				<Image
					src="/3.png"
					width={15}
					height={15}
					className={styles.icon}
					alt="ROCHA"
				/>{" "}
				<Image
					src="/4.png"
					width={15}
					height={15}
					className={styles.icon}
					alt="ROCHA"
				/>
			</div>
		</div>
	);
}
