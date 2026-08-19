export type PartId = "phan-1" | "phan-2" | "phan-3" | "phan-4";

export const parts: { id: PartId; label: string; short: string; description: string }[] = [
  {
    id: "phan-1",
    label: "Phần I — Vũ trụ Trung tâm và các Siêu vũ trụ",
    short: "Vũ trụ trung tâm",
    description:
      "Bản chất của Thượng Đế, Đảo Thiên Đàng, Ba Ngôi vĩnh cửu và cấu trúc của thực tại vũ trụ.",
  },
  {
    id: "phan-2",
    label: "Phần II — Vũ trụ Địa phương",
    short: "Vũ trụ địa phương",
    description:
      "Nebadon, Đấng Sáng Tạo Michael, các thiên thần phục vụ và hành trình thăng tiến của linh hồn.",
  },
  {
    id: "phan-3",
    label: "Phần III — Lịch sử Urantia",
    short: "Lịch sử Urantia",
    description:
      "Nguồn gốc hành tinh, sự tiến hóa của loài người, tôn giáo, và Điều chỉnh Tư tưởng bên trong mỗi người.",
  },
  {
    id: "phan-4",
    label: "Phần IV — Đời sống và Giáo huấn của Chúa Giêsu",
    short: "Đời sống Chúa Giêsu",
    description: "Tiểu sử năm này qua năm khác của Chúa Giêsu thành Nazareth và tinh thần giáo huấn của Ngài.",
  },
];

export type Paper = {
  slug: string;
  number: number;
  part: PartId;
  title: string;
  summary: string;
  content: string[];
  quote: string;
  hasAudio?: boolean;
};

export const papers: Paper[] = [
  {
    slug: "paper-1-nguoi-cha-hoan-vu",
    number: 1,
    part: "phan-1",
    title: "Người Cha Hoàn Vũ",
    summary:
      "Thượng Đế là Người Cha của mọi hữu thể có nhân cách — vô hạn nhưng gần gũi, có thể được mỗi tâm hồn tìm thấy.",
    quote: "“Người Cha Hoàn Vũ là Thượng Đế của mọi tạo vật, Cội Nguồn Đầu Tiên và Trung Tâm của vạn vật.”",
    content: [
      "Paper mở đầu giới thiệu danh xưng và bản chất của Thượng Đế: Người Cha Hoàn Vũ. Ngài vừa siêu việt tuyệt đối, vừa nội tại trong từng con người qua mảnh linh thiêng cư ngụ bên trong tâm trí.",
      "Sự hiện diện của Thượng Đế không đòi hỏi nghi lễ phức tạp; nó đáp lời một tâm hồn chân thành khao khát điều thiện. Tri thức về Ngài đến từ khoa học, triết học và mặc khải, nhưng sự hiểu biết Ngài đến từ trải nghiệm sống.",
      "Ý tưởng trung tâm: nhân cách của Thượng Đế có thể được yêu mến. Vũ trụ không lạnh lẽo — nó là ngôi nhà của một Người Cha.",
    ],
    hasAudio: true,
  },
  {
    slug: "paper-2-ban-chat-cua-thuong-de",
    number: 2,
    part: "phan-1",
    title: "Bản Chất của Thượng Đế",
    summary:
      "Vô hạn, vĩnh cửu, toàn năng — nhưng trên hết là tình yêu. Lòng nhân từ thiêng liêng là chìa khóa hiểu Thượng Đế.",
    quote: "“Thượng Đế là tình yêu; vì thế thái độ duy nhất của Ngài với vũ trụ là lòng nhân từ thiêng liêng.”",
    content: [
      "Các thuộc tính của Thượng Đế được trình bày: vô hạn, phổ quát, bất biến, toàn tri và toàn thiện. Nhưng bản chất cốt lõi được diễn tả bằng một chữ: tình yêu.",
      "Công lý thiêng liêng không mâu thuẫn với lòng thương xót; công lý là chức năng tập thể, còn lòng thương xót là thái độ cá nhân của Người Cha dành cho từng con cái.",
      "Con người tiến gần Thượng Đế không bằng sự sợ hãi mà bằng sự tin cậy như con thơ.",
    ],
  },
  {
    slug: "paper-11-dao-thien-dang-vinh-cuu",
    number: 11,
    part: "phan-1",
    title: "Đảo Thiên Đàng Vĩnh Cửu",
    summary: "Trung tâm tuyệt đối của mọi thực tại vật chất — nơi cư ngụ vĩnh cửu của Ba Ngôi Thiên Đàng.",
    quote: "“Thiên Đàng là trung tâm địa lý của vô hạn.”",
    content: [
      "Thiên Đàng không phải hành tinh mà là một thực thể tĩnh tại, nguồn gốc của lực hấp dẫn vật chất trong toàn vũ trụ.",
      "Cấu trúc gồm Thiên Đàng thượng, ngoại vi và hạ, mỗi vùng phục vụ một chức năng vũ trụ riêng biệt.",
      "Đây là đích đến cuối cùng của hành trình thăng tiến: mọi linh hồn tiến hóa đều hướng về Thiên Đàng để diện kiến Người Cha.",
    ],
  },
  {
    slug: "paper-32-su-hinh-thanh-vu-tru-dia-phuong",
    number: 32,
    part: "phan-2",
    title: "Sự Hình Thành Các Vũ Trụ Địa Phương",
    summary: "Cách một vũ trụ địa phương được tạo lập, tổ chức và nuôi dưỡng bởi một Con Sáng Tạo.",
    quote: "“Trong toàn thể vũ trụ, mọi đơn vị đều được tiến hóa theo kế hoạch.”",
    content: [
      "Vũ trụ địa phương Nebadon — nơi Urantia thuộc về — được tổ chức bởi Michael, một Con Sáng Tạo, cùng Thánh Linh Mẹ.",
      "Sự sống được cấy vào các thế giới theo kế hoạch, rồi tiến hóa qua hàng triệu năm dưới sự chăm sóc của các trật tự thiên thần.",
      "Nguyên tắc: tiến hóa là phương pháp, nhưng tình yêu là động lực.",
    ],
    hasAudio: true,
  },
  {
    slug: "paper-107-nguon-goc-dieu-chinh-tu-tuong",
    number: 107,
    part: "phan-2",
    title: "Nguồn Gốc của Điều Chỉnh Tư Tưởng",
    summary: "Mảnh linh thiêng của Thượng Đế cư ngụ trong tâm trí con người — người dẫn đường thầm lặng bên trong.",
    quote: "“Điều Chỉnh Tư Tưởng là tình yêu của Người Cha được cá thể hóa trong tâm hồn bạn.”",
    content: [
      "Điều Chỉnh Tư Tưởng đến từ Divinington, mang bản chất thuần khiết của Người Cha, và tự nguyện cư ngụ trong tâm trí con người phàm trần.",
      "Nó không cưỡng ép ý chí; nó gợi ý, nâng đỡ và bảo tồn những giá trị vĩnh cửu của đời sống bạn.",
      "Thực hành cầu nguyện và tĩnh tâm giúp mối hợp tác giữa con người và Điều Chỉnh trở nên rõ ràng hơn.",
    ],
  },
  {
    slug: "paper-57-nguon-goc-urantia",
    number: 57,
    part: "phan-3",
    title: "Nguồn Gốc của Urantia",
    summary: "Câu chuyện thiên văn về sự hình thành hệ mặt trời và hành tinh của chúng ta.",
    quote: "“Hành tinh của bạn có một lịch sử dài hơn ký ức của loài người rất nhiều.”",
    content: [
      "Paper mô tả sự hình thành tinh vân Andronover, sự ra đời của hệ mặt trời và quá trình nguội đi của Urantia.",
      "Các mốc thời gian được trình bày chi tiết, nối kết thiên văn học với kế hoạch vũ trụ.",
      "Ý nghĩa tâm linh: hành tinh nhỏ bé này vẫn nằm trong sự chăm sóc có chủ đích.",
    ],
  },
  {
    slug: "paper-100-ton-giao-trong-kinh-nghiem-nguoi",
    number: 100,
    part: "phan-3",
    title: "Tôn Giáo trong Kinh Nghiệm Con Người",
    summary: "Tôn giáo đích thực là kinh nghiệm sống động, biến đổi tính cách chứ không chỉ là niềm tin.",
    quote: "“Hãy để đức tin của bạn là kinh nghiệm sống, không phải một tín điều thừa hưởng.”",
    content: [
      "Trưởng thành tâm linh là quá trình dần dần: từ sợ hãi đến tin cậy, từ nghi lễ đến tình yêu phụng sự.",
      "Dấu hiệu của một đời sống tâm linh trưởng thành là sự bình an, lòng khoan dung và khả năng yêu thương vô điều kiện.",
      "Chuyển hóa nhân cách là bằng chứng thuyết phục nhất của tôn giáo chân thật.",
    ],
    hasAudio: true,
  },
  {
    slug: "paper-120-su-nhap-the-cua-michael",
    number: 120,
    part: "phan-4",
    title: "Sự Nhập Thể của Michael trên Urantia",
    summary: "Lý do và điều kiện của việc Đấng Sáng Tạo bước vào đời sống con người dưới tên Giêsu.",
    quote: "“Ta sẽ sống trọn vẹn đời sống của một con người phàm trần.”",
    content: [
      "Trước khi nhập thể, Michael nhận những chỉ dẫn về sứ mạng: sống một đời sống con người trọn vẹn, mặc khải Người Cha.",
      "Ngài từ bỏ quyền năng siêu nhiên để trải nghiệm giới hạn của loài người một cách chân thật.",
      "Đây là khung nền để hiểu toàn bộ Phần IV.",
    ],
  },
  {
    slug: "paper-140-su-phong-chuc-muoi-hai",
    number: 140,
    part: "phan-4",
    title: "Sự Phong Chức Nhóm Mười Hai",
    summary: "Bài giảng nền tảng về Nước Trời và những chân phúc dành cho người môn đệ.",
    quote: "“Các con là ánh sáng của thế gian — hãy để ánh sáng ấy chiếu soi.”",
    content: [
      "Giêsu phong chức cho mười hai môn đệ và trao cho họ hiến chương của Nước Trời.",
      "Các chân phúc được diễn giải như thái độ nội tâm chứ không phải quy tắc cư xử bề ngoài.",
      "Trọng tâm: làm con Thượng Đế và anh em với mọi người.",
    ],
    hasAudio: true,
  },
  {
    slug: "paper-196-duc-tin-cua-giesu",
    number: 196,
    part: "phan-4",
    title: "Đức Tin của Chúa Giêsu",
    summary: "Bản chất đức tin của Ngài: tin cậy tuyệt đối vào Người Cha và sống trọn từng khoảnh khắc.",
    quote: "“Đức tin của Giêsu thuần khiết như đức tin của một trẻ thơ, nhưng vững chắc tuyệt đối.”",
    content: [
      "Paper kết thúc cuốn sách bằng chân dung đức tin sống động của Giêsu — không giáo điều, chỉ là sự tin cậy hoàn toàn.",
      "Lời mời gọi: sống đức tin ấy mỗi ngày, trong công việc và các mối quan hệ đời thường.",
      "Đây là điểm hội tụ của toàn bộ mặc khải Urantia.",
    ],
  },
];

export const getPaper = (slug: string) => papers.find((p) => p.slug === slug);
