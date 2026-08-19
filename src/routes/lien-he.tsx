import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Send } from "lucide-react";
import type { FormEvent } from "react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/lien-he")({
  head: () => ({
    meta: [
      { title: "Liên hệ — Sách Urantia Ánh Sáng" },
      {
        name: "description",
        content: "Gửi câu hỏi, góp ý hoặc lời mời cộng tác đến nhóm thực hiện Sách Urantia Ánh Sáng.",
      },
      { property: "og:title", content: "Liên hệ — Sách Urantia Ánh Sáng" },
      { property: "og:description", content: "Chúng con luôn sẵn lòng lắng nghe bạn." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Cảm ơn bạn, lời nhắn đã được ghi nhận.");
    e.currentTarget.reset();
  };

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <Reveal>
        <h1 className="font-display text-4xl">Liên hệ</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Mọi câu hỏi, góp ý hay mong muốn cộng tác đều được chào đón.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <Reveal>
          <div className="card-light h-full rounded-3xl p-6">
            <Mail className="h-5 w-5 text-primary" />
            <p className="mt-3 font-medium">Email</p>
            <p className="mt-1 text-sm text-muted-foreground">anhsang@urantia.vn</p>
          </div>
        </Reveal>
        <Reveal delay={110}>
          <div className="card-light h-full rounded-3xl p-6">
            <MessageCircle className="h-5 w-5 text-primary" />
            <p className="mt-3 font-medium">Cộng đồng</p>
            <p className="mt-1 text-sm text-muted-foreground">Nhóm Zalo / Facebook nội bộ nhóm học</p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={160}>
        <form onSubmit={onSubmit} className="card-light mt-10 grid gap-5 rounded-3xl p-8">
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Họ và tên</span>
            <input required name="name" className="field" placeholder="Tên của bạn" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Email</span>
            <input required type="email" name="email" className="field" placeholder="ban@email.com" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Nội dung</span>
            <textarea required name="message" rows={5} className="field resize-none" placeholder="Bạn muốn chia sẻ điều gì?" />
          </label>
          <button type="submit" className="btn-hero justify-self-start">
            Gửi lời nhắn <Send className="h-4 w-4" />
          </button>
        </form>
      </Reveal>
    </div>
  );
}
