import {
  DM_Serif_Text,
  Inter,
  Monofett,
  Open_Sans,
  Saira,
  Tangerine,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
export const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});
export const tangerine = Tangerine({
  subsets: ["latin"],
  variable: "--font-tangerine",
  weight: ["400"],
});
export const DMSerifText = DM_Serif_Text({
  subsets: ["latin"],
  variable: "--font-DMSerifText",
  weight: ["400"],
});

export const monofet = Monofett({
  subsets: ["latin"],
  variable: "--font-mono-fet",
  weight: "400",
});
