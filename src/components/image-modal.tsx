import React from "react"
import { FaTimes } from "react-icons/fa"

const ImageModal: React.FC<{ src: string; onClose: () => void }> = ({
  src,
  onClose,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white transition hover:text-(--accent)"
      >
        <FaTimes size={30} />
      </button>
      <img
        src={src}
        alt="Full screen preview"
        className="max-h-[90vh] max-w-[90vw] rounded-md object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

export default ImageModal
