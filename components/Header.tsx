import Link from "next/link";
import { navItems } from "@/lib/site";
import MobileMenu from "./MobileMenu";
import RequestButton from "./RequestButton";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" aria-label="AnswerRank Audit home">
          Answer<span>Rank</span> Audit
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <ThemeToggle />
          <RequestButton className="nav-cta">Request snapshot</RequestButton>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
