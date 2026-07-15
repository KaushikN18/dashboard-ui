import { photos } from "./data";

function PhotosCard() {
  return (
    <div className="bg-white rounded-[22px] shadow-sm border border-[#ECECEC] p-8">

      <h2 className="text-[24px] font-semibold text-[#2F3442] mb-8">
        Photos
      </h2>

      <div className="grid grid-cols-3 gap-5">

        {photos.map((photo, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl cursor-pointer group"
          >
            <img
              src={photo}
              alt=""
              className="w-full h-[92px] object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
        ))}

      </div>

    </div>
  );
}

export default PhotosCard;