import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Headphones } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { getPaper, parts } from "@/data/papers";

export const Route = createFileRoute("/thu-vien-paper/$slug")({
  loader: ({ params }) => {
    const paper = getPaper(params.slug);
    if (!paper) throw notFound();
    return { paper };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Không tìm thấy Paper" }, { name: "robots", content: "noindex" }],
      };
    }
    const { paper } = loaderData;
    const title = `Paper ${paper.number}: ${paper.title} — Sách Urantia Ánh Sáng`;
    return {
      meta: [
        { title },
        { name: "description", content: paper.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: paper.summary },
      ],
    };
  },
  component: PaperDetail,
  notFoundComponent: PaperNotFound,
});

function PaperDetail() {
  const { paper } = Route.useLoaderData();
  const part = parts.find((p) => p.id === paper.part);

  return (
    <article className="relative overflow-hidden">
      <div className="bg-dawn">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <Link
            to="/thu-vien-paper"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Thư viện Paper
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-primary">
            Paper {paper.number} · {part?.short}
          </p>
          <h1 className="mt-2 font-display text-4xl leading-tight">{paper.title}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{paper.summary}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-14">
        {paper.hasAudio && (
          <Reveal>
            <div className="card-light mb-10 rounded-3xl p-6">
              <p className="flex items-center gap-2 text-sm font-medium">
                <Headphones className="h-4 w-4 text-primary" /> Bản audio đi kèm
              </p>
              <audio controls className="mt-4 w-full">
                <source src="" type="audio/mpeg" />
                Trình duyệt của bạn không hỗ trợ trình phát audio.
              </audio>
              <p className="mt-3 text-xs text-muted-foreground">
                Nguồn audio sẽ được cập nhật khi bản thu hoàn tất.
              </p>
            </div>
          </Reveal>
        )}

        {paper.content.map((para, i) => (
          <Reveal key={i} delay={i * 80}>
            <p className="mb-6 text-[1.05rem] leading-loose">{para}</p>
          </Reveal>
        ))}

        <Reveal>
          <blockquote className="card-light mt-8 rounded-3xl p-8 text-center font-display text-xl italic">
            {paper.quote}
          </blockquote>
        </Reveal>
      </div>
    </article>
  );
}

function PaperNotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-28 text-center">
      <h1 className="font-display text-3xl">Không tìm thấy Paper này</h1>
      <p className="mt-3 text-sm text-muted-foreground">Có thể liên kết đã thay đổi.</p>
      <Link to="/thu-vien-paper" className="btn-hero mt-8">
        Về thư viện Paper
      </Link>
    </div>
  );
}
