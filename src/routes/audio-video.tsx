import { createFileRoute } from "@tanstack/react-router";
import { Play, Headphones, Video } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { mediaItems } from "@/data/media";

export const Route = createFileRoute("/audio-video")({
  head: () => ({
    meta: [
      { title: "Audio & Video — Sách Urantia Ánh Sáng" },
      {
        name: "description",
        content: "Thư viện nghe và xem phần giải thích từng Paper của Sách Urantia bằng tiếng Việt.",
      },
      { property: "og:title", content: "Audio & Video — Sách Urantia Ánh Sáng" },
      { property: "og:description", content: "Nghe và xem giải thích từng Paper của Sách Urantia." },
    ],
  }),
  component: MediaPage,
});

const topics = ["Tất cả", "Phần I", "Phần II", "Phần III", "Phần IV"];

function MediaPage() {
  const [topic, setTopic] = useState("Tất cả");
  const list = useMemo(
    () => mediaItems.filter((m) => topic === "Tất cả" || m.topic === topic),
    [topic],
  );

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <h1 className="font-display text-4xl">Audio &amp; Video</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Nghe hoặc xem phần giải thích cho từng Paper, phân loại theo bốn phần của cuốn sách.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-8 flex flex-wrap gap-2">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => setTopic(t)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                topic === t
                  ? "border-gold bg-gradient-to-r from-gold-soft to-sky text-primary-foreground halo"
                  : "border-border bg-card/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((m, i) => (
          <Reveal key={m.id} delay={(i % 3) * 100}>
            <article className="card-light flex h-full flex-col overflow-hidden rounded-3xl">
              <div className="relative grid h-40 place-items-center bg-dawn">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold to-sky halo">
                  <Play className="h-6 w-6 text-primary-foreground" fill="currentColor" />
                </span>
                <span className="absolute bottom-3 right-3 rounded-full bg-card/85 px-2.5 py-1 text-xs text-muted-foreground">
                  {m.duration}
                </span>
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-card/85 px-2.5 py-1 text-xs text-muted-foreground">
                  {m.type === "audio" ? <Headphones className="h-3 w-3" /> : <Video className="h-3 w-3" />}
                  {m.type === "audio" ? "Audio" : "Video"}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {m.topic} · {m.paper}
                </p>
                <h2 className="mt-2 font-display text-lg leading-snug">{m.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {m.description}
                </p>
                {m.type === "audio" && (
                  <audio controls className="mt-4 w-full">
                    <source src="" type="audio/mpeg" />
                  </audio>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
