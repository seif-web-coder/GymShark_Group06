import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Myheader from "@/components/myheader/Myheader";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "GymShark",
	description: "GymShark-Salle de Sport",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div>
					<Myheader title="Hello" />
				</div>
				<div className="content">{children}</div>
				<div className="footer">
					© Collège La Cité | Développé par le Groupe 06
				</div>
			</body>
		</html>
	);
}
