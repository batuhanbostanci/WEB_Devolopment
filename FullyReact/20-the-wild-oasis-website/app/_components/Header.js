import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="border-b px-8 py-5 border-primary-900">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
