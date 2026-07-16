import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

import { profile } from "./data";

function Banner() {
  return (
    <div className="relative mb-28">

      {/* Cover */}
      <div className="h-[250px] rounded-[24px] overflow-hidden">
        <img
          src={profile.cover}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card */}
      <div className="absolute left-8 right-8 -bottom-16">

        <div className="bg-white rounded-[24px] border border-[#ECECEC] shadow-lg px-8 py-6 flex items-center">

          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-[130px] h-[130px] rounded-[28px] overflow-hidden border-[6px] border-white shadow-lg -mt-20 bg-white">
              <img
                src={profile.avatar}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left Info */}
          <div className="ml-8 w-[360px]">

            <h1 className="text-[40px] font-bold text-[#2F3442] leading-tight">
              {profile.name}
            </h1>

            <p className="mt-2 text-[20px] text-[#98A2B3]">
              {profile.role}
            </p>

            <div className="flex gap-6 mt-5 text-[22px] text-[#687284]">
              <FiFacebook className="cursor-pointer hover:text-[#2F9E44]" />
              <FiTwitter className="cursor-pointer hover:text-[#2F9E44]" />
              <FiInstagram className="cursor-pointer hover:text-[#2F9E44]" />
            </div>

          </div>

          {/* Divider */}
          <div className="w-px h-[110px] bg-[#ECECEC] mx-8 shrink-0"></div>

          {/* Right Info */}
          <div className="flex-1 grid grid-cols-2 gap-x-14 gap-y-6">

            <div>
              <p className="text-[12px] uppercase tracking-wider text-[#98A2B3]">
                Email
              </p>
              <p className="mt-2 text-[18px] text-[#2F3442] break-all">
                {profile.email}
              </p>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-wider text-[#98A2B3]">
                Birthday
              </p>
              <p className="mt-2 text-[18px] text-[#2F3442]">
                {profile.birthday}
              </p>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-wider text-[#98A2B3]">
                Phone
              </p>
              <p className="mt-2 text-[18px] text-[#2F3442]">
                {profile.phone}
              </p>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-wider text-[#98A2B3]">
                Location
              </p>
              <p className="mt-2 text-[18px] text-[#2F3442]">
                {profile.location}
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Banner;