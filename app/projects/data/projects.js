import Weton from "@/public/projects/weton-web/weton1.png";
import WetonApp from "@/public/projects/weton-app/weton-app.jpg";
import FilmCenter from "@/public/projects/film-center/film-center1.png";

export const projects = [
  {
    title: "Weton Web",
    desc: "Weton Web adalah aplikasi berbasis Vue.js dan Tailwind CSS untuk menghitung sio atau weton seseorang sesuai tradisi Jawa.",
    year: "2024",
    tech: "Vue JS, Javascript, Tailwind CSS",
    bg: Weton,
    slug: "weton-web",
    // category: 1,
  },
  {
    title: "Weton App",
    desc: "Weton App adalah aplikasi berbasis Android untuk menghitung sio atau weton seseorang sesuai tradisi Jawa.",
    year: "2024",
    tech: "Java, Android Studio",
    bg: WetonApp,
    slug: "weton-app",
  },
  {
    title: "Fil Center",
    desc: "Film Center adalah aplikasi berbasis Vue.js dan Tailwind CSS yang dirancang untuk menonton film ala streaming, dengan pencarian mudah dan penambahan film hanya melalui pembaruan index.json.",
    year: "2024",
    tech: "Vue JS, Javascript, Tailwind CSS",
    bg: FilmCenter,
    slug: "film-center",
  },
];
