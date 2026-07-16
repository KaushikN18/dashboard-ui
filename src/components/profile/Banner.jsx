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
      <div className="h-[260px] rounded-[24px] overflow-hidden">
        <img
          src={profile.cover}
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Card */}
      <div className="absolute left-8 right-8 -bottom-16">

        <div className="bg-white rounded-[26px] shadow-lg border border-[#ECECEC] px-8 py-6 flex items-center">

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

          {/* Name */}
          <div className="ml-8 flex-1 min-w-[320px]">

            <h1 className="text-[46px] font-bold leading-none text-[#2F3442] whitespace-nowrap">
              {profile.name}
            </h1>

            <p className="mt-3 text-[20px] text-[#98A2B3]">
              {profile.role}
            </p>

            <div className="flex items-center gap-6 mt-6 text-[22px] text-[#687284]">

              <FiFacebook className="cursor-pointer hover:text-[#2F9E44]" />

              <FiTwitter className="cursor-pointer hover:text-[#2F9E44]" />

              <FiInstagram className="cursor-pointer hover:text-[#2F9E44]" />

            </div>

          </div>

          {/* Divider */}
          <div className="w-px h-[110px] bg-[#ECECEC] mx-8"></div>

          {/* Contact */}
          <div className="grid grid-cols-2 gap-x-20 gap-y-7">

            <div>
              <p className="text-[12px] uppercase tracking-wider text-[#98A2B3]">
                Email
              </p>

              <p className="mt-2 text-[18px] text-[#2F3442] whitespace-nowrap">
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