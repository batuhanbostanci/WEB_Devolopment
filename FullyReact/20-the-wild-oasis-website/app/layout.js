import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s - The Wild Oasis",
    default: "Welcome - The Wil Oasis",
  },
  description:
    "Luxuries cabin hotes, located in the heart of the Itailian Dolomities, surrounded by the most beautiful mountains in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main> {children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
