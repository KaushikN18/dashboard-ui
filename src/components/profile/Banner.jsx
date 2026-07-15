import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";

import { profile } from "./data";

function Banner() {
  return (
    <div className="relative">

      {/* Cover */}
      <div className="h-[270px] rounded-[22px] overflow-hidden">
        <img
          src={profile.cover}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Card */}
      <div className="absolute left-7 right-7 -bottom-20">

        <div className="bg-white rounded-[22px] shadow-md h-[170px] flex items-center px-10">

          {/* Avatar */}
          <div className="w-[160px] h-[160px] rounded-[38px] overflow-hidden border-[6px] border-white shadow-lg -mt-16 bg-white">

            <img
              src={profile.avatar}
              alt=""
              className="w-full h-full object-cover"
            />

          </div>

          {/* Name */}
          <div className="ml-10 flex-1">

            <h1 className="text-[42px] font-semibold text-[#2F3442] leading-none">
              {profile.name}
            </h1>

            <p className="mt-3 text-[22px] text-[#98A2B3]">
              {profile.role}
            </p>

            <div className="flex gap-5 mt-6 text-[24px] text-[#687284]">

              <FiFacebook />

              <FiTwitter />

              <FiInstagram />

            </div>

          </div>

          {/* Divider */}
          <div className="w-px h-[120px] bg-[#ECECEC] mx-10"></div>

          {/* Contact */}
          <div className="grid grid-cols-2 gap-x-24 gap-y-8">

            <div>
              <p className="text-[13px] uppercase tracking-wider text-[#98A2B3]">
                Email
              </p>

              <p className="mt-2 text-[18px] text-[#2F3442]">
                {profile.email}
              </p>
            </div>

            <div>
              <p className="text-[13px] uppercase tracking-wider text-[#98A2B3]">
                Birthday
              </p>

              <p className="mt-2 text-[18px] text-[#2F3442]">
                {profile.birthday}
              </p>
            </div>

            <div>
              <p className="text-[13px] uppercase tracking-wider text-[#98A2B3]">
                Phone
              </p>

              <p className="mt-2 text-[18px] text-[#2F3442]">
                {profile.phone}
              </p>
            </div>

            <div>
              <p className="text-[13px] uppercase tracking-wider text-[#98A2B3]">
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