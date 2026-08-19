import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border/60 bg-dawn">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center">
        <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">
          “Trong ánh sáng của sự thật, mỗi tâm hồn đều tìm thấy con đường trở về nhà.”
        </p>
        <p className="mt-3 text-sm text-muted-foreground">— Tinh thần Sách Urantia</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#" aria-label="Facebook" className="btn-ghost-light !px-4 !py-3">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" aria-label="YouTube" className="btn-ghost-light !px-4 !py-3">
            <Youtube className="h-4 w-4" />
          </a>
          <Link to="/lien-he" aria-label="Email" className="btn-ghost-light !px-4 !py-3">
            <Mail className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sách Urantia Ánh Sáng — thư viện số phi lợi nhuận.
        </p>
      </div>
    </footer>
  );
}
