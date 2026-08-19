import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Clock, MapPin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/nhom-hoc")({
  head: () => ({
    meta: [
      { title: "Nhóm học Urantia — Sách Urantia Ánh Sáng" },
      {
        name: "description",
        content: "Thông tin sinh hoạt nhóm học Sách Urantia, lịch họp hằng tuần và form đăng ký tham gia.",
      },
      { property: "og:title", content: "Nhóm học Urantia — Sách Urantia Ánh Sáng" },
      { property: "og:description", content: "Cùng đọc, cùng chia sẻ và cùng lớn lên trong ánh sáng." },
    ],
  }),
  component: GroupPage,
});

const schedule = [
  { day: "Thứ Ba", time: "20:00 – 21:30", topic: "Đọc chung Phần I & II", place: "Trực tuyến (Zoom)" },
  { day: "Thứ Năm", time: "20:00 – 21:30", topic: "Đời sống Chúa Giêsu — Phần IV", place: "Trực tuyến (Zoom)" },
  { day: "Chủ Nhật", time: "09:00 – 11:00", topic: "Chia sẻ trải nghiệm tâm linh", place: "Gặp mặt trực tiếp" },
];

function GroupPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Đã ghi nhận đăng ký. Chúng con sẽ liên hệ sớm!");
    e.currentTarget.reset();
  };

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <Reveal>
        <h1 className="font-display text-4xl">Nhóm học Urantia</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Nhóm học là nơi mỗi người cùng đọc, cùng đặt câu hỏi và cùng soi sáng cho nhau. Không giảng dạy
          một chiều — chỉ có sự chia sẻ chân thành trong tinh thần huynh đệ.
        </p>
      </Reveal>

      <section className="mt-14">
        <Reveal>
          <h2 className="flex items-center gap-2 font-display text-2xl">
            <CalendarDays className="h-5 w-5 text-primary" /> Lịch sinh hoạt hằng tuần
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {schedule.map((s, i) => (
            <Reveal key={s.day} delay={i * 100}>
              <div className="card-light h-full rounded-3xl p-6">
                <p className="font-display text-lg">{s.day}</p>
                <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 shrink-0" /> {s.time}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0" /> {s.place}
                </p>
                <p className="mt-4 text-sm leading-relaxed">{s.topic}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <Reveal>
          <div className="card-light rounded-3xl p-8 sm:p-10">
            <h2 className="font-display text-2xl">Đăng ký tham gia</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Để lại thông tin, chúng con sẽ gửi lời mời vào nhóm.
            </p>

            <form onSubmit={onSubmit} className="mt-8 grid gap-5">
              <Field label="Họ và tên">
                <input required name="name" className="field" placeholder="Nguyễn Văn A" />
              </Field>
              <Field label="Email">
                <input required type="email" name="email" className="field" placeholder="ban@email.com" />
              </Field>
              <Field label="Lời nhắn">
                <textarea
                  name="message"
                  rows={4}
                  className="field resize-none"
                  placeholder="Điều bạn mong đợi khi tham gia nhóm..."
                />
              </Field>
              <button type="submit" className="btn-hero justify-self-start">
                {sent ? "Gửi thêm lần nữa" : "Gửi đăng ký"} <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}
