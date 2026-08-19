export type MediaItem = {
  id: string;
  type: "audio" | "video";
  title: string;
  topic: string;
  paper: string;
  duration: string;
  description: string;
};

export const mediaItems: MediaItem[] = [
  {
    id: "m1",
    type: "video",
    title: "Người Cha Hoàn Vũ — Giới thiệu Paper 1",
    topic: "Phần I",
    paper: "Paper 1",
    duration: "24:10",
    description: "Bài giảng mở đầu về bản chất và sự gần gũi của Thượng Đế.",
  },
  {
    id: "m2",
    type: "audio",
    title: "Bản chất của Thượng Đế là tình yêu",
    topic: "Phần I",
    paper: "Paper 2",
    duration: "18:42",
    description: "Nghe và suy niệm về lòng nhân từ thiêng liêng.",
  },
  {
    id: "m3",
    type: "video",
    title: "Đảo Thiên Đàng và cấu trúc vũ trụ",
    topic: "Phần I",
    paper: "Paper 11",
    duration: "31:05",
    description: "Hình dung trực quan về trung tâm của mọi thực tại.",
  },
  {
    id: "m4",
    type: "audio",
    title: "Điều Chỉnh Tư Tưởng — người bạn bên trong",
    topic: "Phần II",
    paper: "Paper 107",
    duration: "27:33",
    description: "Thực hành lắng nghe tiếng nói thầm lặng của mảnh linh thiêng.",
  },
  {
    id: "m5",
    type: "video",
    title: "Nebadon: vũ trụ địa phương của chúng ta",
    topic: "Phần II",
    paper: "Paper 32",
    duration: "22:57",
    description: "Bản đồ tổng quan về vũ trụ nơi Urantia thuộc về.",
  },
  {
    id: "m6",
    type: "audio",
    title: "Tôn giáo là kinh nghiệm sống",
    topic: "Phần III",
    paper: "Paper 100",
    duration: "20:15",
    description: "Từ tín điều đến sự chuyển hóa nhân cách.",
  },
  {
    id: "m7",
    type: "video",
    title: "Sự phong chức nhóm Mười Hai",
    topic: "Phần IV",
    paper: "Paper 140",
    duration: "35:48",
    description: "Hiến chương Nước Trời và các chân phúc.",
  },
  {
    id: "m8",
    type: "audio",
    title: "Đức tin của Chúa Giêsu",
    topic: "Phần IV",
    paper: "Paper 196",
    duration: "16:20",
    description: "Suy niệm kết thúc hành trình đọc sách.",
  },
];
