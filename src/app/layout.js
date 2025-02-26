import "./globals.css";
import { Work_Sans } from "next/font/google";
import { ThemeProviderContext } from "@/utils/themeContext";

const workSans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // All weights
  subsets: ["latin"], // Adjust for your language needs
  display: "swap", // Improves performance by swapping fonts when ready
});

export const metadata = {
  title: "Dhaval J Prasad",
  description:
    "Dhaval J Prasad is a professional software engineer for 2 years plus. Connect with him for freelance work or full-time opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProviderContext>
      <html lang="en">
        <body className={`${workSans.className}`}>{children}</body>
      </html>
    </ThemeProviderContext>
  );
}
