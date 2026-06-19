import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";

function QuoraIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.738 18.701c-1.86 1.489-4.196 2.408-6.738 2.408-1.027 0-2.01-.17-2.919-.48l1.778-2.835c.518.175 1.07.27 1.642.27.99 0 1.9-.293 2.675-.793L5.21 7.3h3.42l2.41 5.36 2.41-5.36h3.42l-4.768 8.49 2.546 4.211z" />
    </svg>
  );
}

const socials: { icon: LucideIcon | ComponentType<{ className?: string }>; href: string; label: string }[] = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/ace-your-test-delhi", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/aceyourtestofficial", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/aceyourtest_official/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/Tarun_Tutor", label: "Twitter" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UC7ri7HaH02gDmRw6kM_1Clg", label: "YouTube" },
  { icon: QuoraIcon, href: "https://www.quora.com/profile/Tarun-Kaushik-14", label: "Quora" },
];

export function TopBar() {
  return (
    <div className="hidden md:block bg-[#0d1b2a] border-b border-white/5">
      <div className="container-page flex h-9 items-center justify-between">
        <div className="flex items-center gap-1">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[15px] text-white/50 transition-all duration-200 hover:bg-white/10 hover:text-white"
            >
              <Icon className="h-[15px] w-[15px]" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 text-[13px]">
          <a
            href="tel:+919310037791"
            className="flex items-center gap-2 text-white/60 transition-colors hover:text-white"
          >
            <Phone className="h-[15px] w-[15px] text-[#4a9eff]" />
            <span>9310037791</span>
          </a>
          <span className="text-white/20" aria-hidden>
            |
          </span>
          <a
            href="mailto:tarunkaushik@aceyourtest.in"
            className="flex items-center gap-2 text-white/60 transition-colors hover:text-white"
          >
            <Mail className="h-[15px] w-[15px] text-[#4a9eff]" />
            <span>tarunkaushik@aceyourtest.in</span>
          </a>
        </div>
      </div>
    </div>
  );
}
