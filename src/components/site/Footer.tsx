import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import logoImg from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-16 bg-navy text-navy-foreground">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex shrink-0 items-center py-1">
            <img src={logoImg} alt="AceYourTest" className="h-14 w-auto object-contain" />
          </Link>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            India's trusted GMAT, GRE & SAT coaching platform — personalized mentoring,
            proven systems, and admission support for global universities.
          </p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="grid h-9 w-9 place-items-center rounded-md bg-white/5 hover:bg-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Programs</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/gmat" className="hover:text-white">GMAT Preparation</Link></li>
            <li><Link to="/gre" className="hover:text-white">GRE Preparation</Link></li>
            <li><Link to="/sat" className="hover:text-white">SAT Preparation</Link></li>
            <li><Link to="/study-abroad" className="hover:text-white">Study Abroad</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/success-stories" className="hover:text-white">Success Stories</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> Alaknanda, New Delhi, India</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <span>
                <a href="tel:+918800338783" className="block hover:text-white">+91 88003 38783</a>
                <a href="tel:+919310037791" className="block hover:text-white">+91 93100 37791</a>
              </span>
            </li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <a href="mailto:tarunkaushik@aceyourtest.in" className="hover:text-white break-all">tarunkaushik@aceyourtest.in</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} AceYourTest. All rights reserved.</p>
          <p>Made with care for ambitious students.</p>
        </div>
      </div>
    </footer>
  );
}
