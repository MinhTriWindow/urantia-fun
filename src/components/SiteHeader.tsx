import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Trang chủ" },
  { to: "/thu-vien-paper", label: "Thư viện Paper" },
  { to: "/audio-video", label: "Audio & Video" },
  { to: "/nhom-hoc", label: "Nhóm học" },
  { to: "/gioi-thieu", label: "Giới thiệu" },
  { to: "/lien-he", label: "Liên hệ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <img
            src="/urantia-tv-logo.png"
            alt=""
            width={80}
            height={80}
            className="h-10 w-10 shrink-0 rounded-full border border-gold/40 object-cover halo"
          />
          <span className="truncate font-display text-base font-semibold sm:text-lg">
            Sách Urantia Ánh Sáng
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-accent/70 text-accent-foreground" }}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Mở menu"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 px-5 pb-4 pt-2 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
