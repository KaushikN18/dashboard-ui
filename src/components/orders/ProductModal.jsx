import { useState, useEffect } from "react";
import {
  FiX,
  FiHeart,
  FiMinus,
  FiPlus,
} from "react-icons/fi";

function ProductModal({ product, onClose }) {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () =>
      window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!product) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px] flex items-center justify-center p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[1100px] h-[700px] rounded-[24px] bg-white shadow-2xl p-8 overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#F6F7F9] hover:bg-[#ECECEC] flex items-center justify-center transition"
        >
          <FiX size={22} />
        </button>

        <div className="flex gap-10">

          {/* LEFT SIDE */}
          <div className="w-[48%]">

            {/* Main Image */}
            <div className="h-[430px] rounded-2xl bg-[#FAFAFA] border border-[#F1F1F1] flex items-center justify-center">

              <svg
                width="110"
                height="110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B8B8B8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                />

                <circle
                  cx="8.5"
                  cy="8.5"
                  r="1.5"
                />

                <polyline points="21 15 16 10 5 21" />
              </svg>

            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-5">

              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="w-[95px] h-[95px] rounded-xl bg-[#FAFAFA] border border-[#F1F1F1] flex items-center justify-center hover:border-[#D7D7D7] cursor-pointer transition"
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#B8B8B8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                    />

                    <circle
                      cx="8.5"
                      cy="8.5"
                      r="1.5"
                    />

                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1">

            <h2 className="text-[34px] font-semibold text-[#2F3442] leading-tight">
              {product.name}
            </h2>

            <p className="mt-2 text-[#98A2B3] text-[15px]">
              SKU: 0547081
            </p>

            <p className="mt-6 text-[16px] leading-8 text-[#687284] max-w-[500px]">
              A new dual-camera system captures more of what you see and love.
              The fastest chip ever in a smartphone and all-day battery life
              let you do more and charge less. And the highest-quality video
              in a smartphone, so your memories look better than ever.
            </p>
                        {/* Quantity */}
            <div className="mt-8">

              <p className="text-[#98A2B3] text-[15px] mb-4">
                Quantity
              </p>

              <div className="flex items-center justify-between">

                <div className="flex items-center border border-[#E5E7EB] rounded-xl overflow-hidden">

                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-[#F8F8F8]"
                  >
                    <FiMinus size={16} />
                  </button>

                  <div className="w-12 h-12 flex items-center justify-center font-semibold text-[16px]">
                    {qty}
                  </div>

                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-[#F8F8F8]"
                  >
                    <FiPlus size={16} />
                  </button>

                </div>

                <h3 className="text-[36px] font-bold text-[#2F3442]">
                  {product.price}
                </h3>

              </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">

              <button className="flex-1 h-12 rounded-xl bg-[#2F9E44] hover:bg-[#24863A] transition text-white text-[16px] font-semibold">
                Add To Cart
              </button>

              <button className="w-12 h-12 rounded-xl bg-[#54D4C5] text-white flex items-center justify-center hover:opacity-90 transition">
                <FiHeart size={20} />
              </button>

            </div>

            {/* Specifications */}
            <div className="mt-10">

              <h3 className="text-[22px] font-semibold text-[#2F3442] mb-6">
                Specifications
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between border-b border-[#F1F1F1] pb-3">
                  <span className="text-[#98A2B3]">Display</span>
                  <span className="font-medium text-[#2F3442]">
                    6.1-inch Liquid Retina HD
                  </span>
                </div>

                <div className="flex justify-between border-b border-[#F1F1F1] pb-3">
                  <span className="text-[#98A2B3]">Chip</span>
                  <span className="font-medium text-[#2F3442]">
                    Apple A13 Bionic
                  </span>
                </div>

                <div className="flex justify-between border-b border-[#F1F1F1] pb-3">
                  <span className="text-[#98A2B3]">Camera</span>
                  <span className="font-medium text-[#2F3442]">
                    Dual 12MP Ultra Wide
                  </span>
                </div>

                <div className="flex justify-between border-b border-[#F1F1F1] pb-3">
                  <span className="text-[#98A2B3]">Operating System</span>
                  <span className="font-medium text-[#2F3442]">
                    iOS 13
                  </span>
                </div>

                <div className="flex justify-between border-b border-[#F1F1F1] pb-3">
                  <span className="text-[#98A2B3]">Storage</span>
                  <span className="font-medium text-[#2F3442]">
                    64 GB
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#98A2B3]">Color</span>
                  <span className="font-medium text-[#2F3442]">
                    Space Gray
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductModal;