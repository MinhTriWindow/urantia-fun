import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Headphones, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { papers, parts, type PartId } from "@/data/papers";

export const Route = createFileRoute("/thu-vien-paper/")({
  head: () => ({
    meta: [
      { title: "Thư viện Paper — Sách Urantia Ánh Sáng" },
      {
        name: "description",
        content: "Tóm tắt các Paper của Sách Urantia theo 4 phần chính, có tìm kiếm và bộ lọc.",
      },
      { property: "og:title", content: "Thư viện Paper — Sách Urantia Ánh Sáng" },
      { property: "og:description", content: "Duyệt và tìm kiếm tóm tắt các Paper của Sách Urantia." },
    ],
  }),
  component: PapersPage,
});

function PapersPage() {
  const [filter, setFilter] = useState<PartId | "all">("all");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const key = q.trim().toLowerCase();
    return papers.filter(
      (p) =>
        (filter === "all" || p.part === filter) &&
        (key === "" ||
          p.title.toLowerCase().includes(key) ||
          p.summary.toLowerCase().includes(key) ||
          String(p.number).includes(key)),
    );
  }, [filter, q]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <h1 className="font-display text-4xl">Thư viện Paper</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Chọn một phần hoặc tìm kiếm để bắt đầu hành trình đọc.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-8 flex flex-col gap-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Tìm theo tên hoặc số Paper..."
              className="w-full rounded-full border border-border bg-card/70 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <FilterChip active={filter === "all"} onClick={() => setFilter("all")} label="Tất cả" />
            {parts.map((p) => (
              <FilterChip
                key={p.id}
                active={filter === p.id}
                onClick={() => setFilter(p.id)}
                label={p.short}
              />
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 100}>
            <article className="card-light flex h-full flex-col rounded-3xl p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Paper {p.number}
                </p>
                {p.hasAudio && <Headphones className="h-4 w-4 shrink-0 text-muted-foreground" />}
              </div>
              <h2 className="mt-2 font-display text-lg leading-snug">{p.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              <Link
                to="/thu-vien-paper/$slug"
                params={{ slug: p.slug }}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                Đọc thêm <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>

      {list.length === 0 && (
        <p className="mt-16 text-center text-sm text-muted-foreground">
          Chưa có Paper nào phù hợp với tìm kiếm này.
        </p>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition ${
        active
          ? "border-gold bg-gradient-to-r from-gold-soft to-sky text-primary-foreground halo"
          : "border-border bg-card/60 text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}
