import Image from "next/image";

import uinsa from "@/public/img/uinsa.jpeg";
import lpmSol from "@/public/img/lpm-sol.jpeg";

export default function Education() {
  return (
    <section className="grid gap-8 md:gap-12">
      <div className="text-center space-y-2">
        <h1
          className="text-3xl md:text-4xl font-bold tracking-tighter"
          translate="no"
        >
          Education and Organization
        </h1>
        <p className="text-muted-foreground max-w-[800px] mx-auto">
          Tentang latar belakang pendidikan saya dan organisasi yang saya ikuti.
        </p>
      </div>
      <div className="grid gap-8 md:gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="px-5">
            <div className="font-medium text-lg">2022 - Sekarang</div>
            <div>
              <h2 className="font-semibold text-xl">
                Universitas Islam Negeri Sunan Ampel Surabaya
              </h2>
              <h3 className="text-md font-normal mb-3">
                S1 Sistem Informasi | Information System
              </h3>
              <div className="grid gap-4 mb-4 grayscale hover:grayscale-0 transition-all ease duration-300">
                <Image
                  src={uinsa}
                  width={400}
                  height={225}
                  alt="UINSA"
                  className="rounded-lg"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
              <div className="flex items-center gap-2">
                <p className="text-justify">
                  Bercita-cita menjadi software engineer, saat ini saya sedang
                  mengejar gelar sarjana komputer di Universitas Islam Negeri
                  Sunan Ampel Surabaya. Terpesona dengan dunia teknologi, saya
                  ingin belajar dan mengeksplorasi hal-hal baru di bidang
                  komputer dan teknologi.
                </p>
              </div>
            </div>
          </div>
          <div className="px-5">
            <div className="font-medium text-lg">Organisasi</div>
            <div>
              <h2 className="font-semibold text-xl">
                LPM Solidaritas UIN Sunan Ampel Surabaya
              </h2>
              <h3 className="text-md font-normal mb-3">2022 - Sekarang</h3>
              <div className="grid gap-4 mb-4 grayscale hover:grayscale-0 transition-all ease duration-300">
                <Image
                  src={lpmSol}
                  width={400}
                  height={225}
                  alt="LPM Solidaritas"
                  className="rounded-lg"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
              <div className="flex items-center gap-2">
                <p className="text-justify">
                  LPM Solidaritas UIN Sunan Ampel Surabaya adalah Lembaga Pers
                  Mahasiswa yang lahir untuk mengakomodasi, memberi ruang dan
                  wahana yang bertujuan untuk menyalurkan aspirasi dan kreasi
                  mahasiswa dengan relevansi terhadap interdisipliner keilmuan
                  yang ada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
