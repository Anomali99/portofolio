import Weton from "@/public/projects/weton-web/weton1.png";
import WetonApp from "@/public/projects/weton-app/weton-app.jpg";
import FilmCenter from "@/public/projects/film-center/film-center1.png";
import PPA from "@/public/projects/e-ppa/e-ppa.png";
import PischatWeb from "@/public/projects/pischat-web/pischat-web.png";
import PischatApp from "@/public/projects/pischat-app/pischat-app.jpg";
import PischatServer from "@/public/projects/pischat-server/pischat-server.png";

export const projects = [
  {
    title: "Weton Web",
    desc: "Weton Web adalah aplikasi berbasis Vue.js dan Tailwind CSS untuk menghitung sio atau weton seseorang sesuai tradisi Jawa.",
    year: "2024",
    tech: "Vue JS, Vite, Javascript, Tailwind CSS",
    bg: Weton,
    slug: "weton-web",
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
    title: "Film Center",
    desc: "Film Center adalah aplikasi berbasis Vue.js dan Tailwind CSS yang dirancang untuk menonton film ala streaming, dengan pencarian mudah dan penambahan film hanya melalui pembaruan index.json.",
    year: "2024",
    tech: "Vue JS, Vite, Javascript, Tailwind CSS",
    bg: FilmCenter,
    slug: "film-center",
  },
  {
    title: "e-Payment Pondok Assyafiiyah",
    desc: "e-Payment Pondok Assyafiiyah adalah sebuah aplikasi web yang bertujuan untuk mempermudah proses pencatat pembayaran spp dan kos makan santri.",
    year: "2024",
    tech: "React JS, Vite, Typescript, Tailwind CSS, Axios, Flask, Python, SQLAlchemy, MariaDB",
    bg: PPA,
    slug: "e-ppa",
  },
  {
    title: "Pischat Web",
    desc: "Pischat Web adalah sebuah aplikasi berbasis web untuk melakukan chat realtime sederhana dengan koneksi websocket.",
    year: "2024",
    tech: "React JS, Vite, Javascript, Tailwind CSS, Axios, Socket.IO",
    bg: PischatWeb,
    slug: "pischat-web",
  },
  {
    title: "Pischat App",
    desc: "Pischat App adalah versi mobile dari Pischat Web. Dapat melakukan komunkasi dengan versi webnya, karena terhubung ke server yang sama.",
    year: "2024",
    tech: "React Native, Typescript, Axios, Socket.IO",
    bg: PischatApp,
    slug: "pischat-app",
  },
  {
    title: "Pischat Server",
    desc: "Pischat Server adalah sebuah server berbasis Javascript yang saya kembangkan menggunakan Express JS untuk menyediakan koneksi realtime antar perangkat.",
    year: "2024",
    tech: "Express JS, Javascript, Sequelize, MariaDB, Socket.IO",
    bg: PischatServer,
    slug: "pischat-server",
  },
];
