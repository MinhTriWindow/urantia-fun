import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, PlayCircle, Users, Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-light.jpg";
import { Particles } from "@/components/Particles";
import { Reveal } from "@/components/Reveal";
import { parts, papers } from "@/data/papers";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sách Urantia Ánh Sáng — Thư viện số tâm linh" },
      {
        name: "description",
        content:
          "Thư viện số phổ biến Sách Urantia bằng tiếng Việt: tóm tắt các Paper, audio - video giải thích và nhóm học tâm linh.",
      },
      { property: "og:title", content: "Sách Urantia Ánh Sáng" },
      {
        property: "og:description",
        content: "Biến tri thức vũ trụ thành ánh sáng dẫn đường cho đời sống tâm linh.",
      },
    ],
  }),
  component: Home,
});

const cards = [
  {
    to: "/thu-vien-paper" as const,
    icon: BookOpen,
    title: "Thư viện Paper",
    text: "Tóm tắt dễ hiểu theo 4 phần chính của Sách Urantia.",
  },
  {
    to: "/audio-video" as const,
    icon: PlayCircle,
    title: "Audio & Video",
    text: "Nghe và xem phần giải thích cho từng Paper.",
  },
  {
    to: "/nhom-hoc" as const,
    icon: Users,
    title: "Nhóm học Urantia",
    text: "Sinh hoạt, chia sẻ và cùng nhau tiến bước.",
  },
];

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <img
          src={heroImage}
          alt="Ánh sáng bình minh vũ trụ tỏa ra từ tâm"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-dawn opacity-80" />
        <Particles />

        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:py-36">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Thư viện số tâm linh
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-4xl leading-tight sm:text-6xl">
              <span className="text-hologram-glow">Sách Urantia Ánh Sáng</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Biến tri thức vũ trụ thành ánh sáng dẫn đường cho đời sống tâm linh.
            </p>
          </Reveal>

          <Reveal delay={340}>
            <p className="mx-auto mt-8 max-w-xl font-display text-lg italic text-foreground/80">
              “Người Cha Hoàn Vũ là Thượng Đế của mọi tạo vật, Cội Nguồn Đầu Tiên và Trung Tâm của vạn vật.”
            </p>
          </Reveal>

          <Reveal delay={460}>
            <div className="mt-10 flex justify-center">
              <Link to="/thu-vien-paper" className="btn-hero">
                Khám phá ánh sáng <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.to} delay={i * 120}>
              <Link to={c.to} className="card-light block h-full rounded-3xl p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-gold-soft to-sky">
                  <c.icon className="h-5.5 w-5.5 text-primary-foreground" />
                </span>
                <h2 className="mt-5 font-display text-xl">{c.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Vào xem <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <Reveal>
          <h2 className="text-center font-display text-3xl">Bốn phần của cuốn sách</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Sách Urantia dẫn người đọc từ bản chất của Thượng Đế đến đời sống thường nhật của Chúa Giêsu.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {parts.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <div className="card-light h-full rounded-3xl p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">{p.short}</p>
                <h3 className="mt-2 font-display text-lg">{p.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <div className="card-light rounded-3xl p-8 text-center sm:p-12">
            <p className="font-display text-2xl">{papers.length} bản tóm tắt đang mở cho bạn</p>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
              Mỗi bản tóm tắt được viết ngắn gọn, dễ hiểu, giữ nguyên tinh thần nguyên tác.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/thu-vien-paper" className="btn-hero">
                Đọc thư viện Paper
              </Link>
              <Link to="/nhom-hoc" className="btn-ghost-light">
                Tham gia nhóm học
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
