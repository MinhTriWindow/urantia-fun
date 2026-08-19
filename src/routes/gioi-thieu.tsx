import { createFileRoute } from "@tanstack/react-router";
import { Heart, Compass, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/gioi-thieu")({
  head: () => ({
    meta: [
      { title: "Giới thiệu — Sách Urantia Ánh Sáng" },
      {
        name: "description",
        content: "Mục tiêu và ý nghĩa của dự án Sách Urantia Ánh Sáng: đưa tri thức vũ trụ đến gần người Việt.",
      },
      { property: "og:title", content: "Giới thiệu — Sách Urantia Ánh Sáng" },
      { property: "og:description", content: "Vì sao chúng con thực hiện thư viện số này." },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Heart,
    title: "Phụng sự vô vị lợi",
    text: "Mọi nội dung đều miễn phí, không quảng cáo, không thu phí thành viên.",
  },
  {
    icon: Compass,
    title: "Trung thực với nguyên tác",
    text: "Tóm tắt được viết lại cho dễ hiểu nhưng giữ đúng tinh thần và ý nghĩa gốc.",
  },
  {
    icon: Sparkles,
    title: "Ánh sáng cho đời sống",
    text: "Tri thức chỉ có giá trị khi trở thành cách sống tử tế mỗi ngày.",
  },
];

function AboutPage() {
  return (
    <div>
      <section className="bg-dawn">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <Reveal>
            <h1 className="font-display text-4xl leading-tight">Về chúng con</h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              “Sách Urantia Ánh Sáng” là một dự án phi lợi nhuận, được thực hiện bởi những người đọc yêu
              mến cuốn sách và mong ước chia sẻ nó bằng tiếng Việt một cách dễ hiểu, trong sáng.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 110}>
              <div className="card-light h-full rounded-3xl p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-gold-soft to-lilac">
                  <v.icon className="h-5 w-5 text-primary-foreground" />
                </span>
                <h2 className="mt-5 font-display text-lg">{v.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20">
        <Reveal>
          <h2 className="font-display text-2xl">Ý nghĩa của dự án</h2>
          <p className="mt-4 text-[1.05rem] leading-loose">
            Sách Urantia là một mặc khải đồ sộ về Thượng Đế, vũ trụ và đời sống Chúa Giêsu. Với nhiều
            người, độ dày và ngôn ngữ của cuốn sách là rào cản đầu tiên. Dự án này ra đời để hạ thấp rào
            cản ấy: từng Paper được tóm tắt ngắn gọn, kèm audio và video giải thích, để bất kỳ ai cũng có
            thể bắt đầu từ nơi mình đang đứng.
          </p>
          <p className="mt-5 text-[1.05rem] leading-loose">
            Chúng con tin rằng tri thức vũ trụ không nhằm thỏa mãn trí tò mò, mà để trở thành ánh sáng dẫn
            đường — trong cách ta yêu thương, tha thứ và phụng sự.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
