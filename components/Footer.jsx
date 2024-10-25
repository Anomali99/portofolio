"use client";

export default function Footer() {
  return (
    <div className="flex justify-center items-center flex-col mt-5 overflow-hidden">
      <footer className="flex justify-center items-center flex-col my-5 self-start]">
        <p className="text-gray-800 text-sm">
          &copy;{new Date().getFullYear()} -{" "}
          <span className="text-gray-700 text-lg">Anomali99</span>
        </p>
      </footer>
    </div>
  );
}
