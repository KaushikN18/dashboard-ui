import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

function ContactCard({ contact }) {
  return (
    <div className="bg-white rounded-2xl border border-[#ECECEC] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6">

      {/* Top */}

      <div className="flex items-start justify-between">

        <div className="flex gap-4">

          {/* Avatar */}

          <div className="relative">

            <img
              src={contact.avatar}
              alt={contact.name}
              className="w-16 h-16 rounded-full object-cover"
            />

            <span
              className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
                contact.online
                  ? "bg-green-500"
                  : "bg-gray-400"
              }`}
            ></span>

          </div>

          {/* Name */}

          <div>

            <h2 className="text-xl font-semibold text-[#2F3442]">
              {contact.name}
            </h2>

            <p className="text-[#98A2B3] mt-1">
              {contact.role}
            </p>

          </div>

        </div>

        {/* Status */}

        <span
          className={`text-sm font-medium ${
            contact.online
              ? "text-green-600"
              : "text-gray-400"
          }`}
        >
          {contact.online ? "Online" : "Offline"}
        </span>

      </div>

      {/* Info */}

      <div className="mt-6 space-y-4">

        <div className="flex items-center gap-3">

          <FiMail className="text-[#2F9E44]" />

          <span className="text-[#687284]">
            {contact.email}
          </span>

        </div>

        <div className="flex items-center gap-3">

          <FiPhone className="text-[#2F9E44]" />

          <span className="text-[#687284]">
            {contact.phone}
          </span>

        </div>

        <div className="flex items-center gap-3">

          <FiMapPin className="text-[#2F9E44]" />

          <span className="text-[#687284]">
            {contact.location}
          </span>

        </div>

      </div>

      {/* Footer */}

      <div className="flex justify-end gap-3 mt-8 pt-5 border-t border-[#ECECEC]">

        <button className="w-11 h-11 rounded-xl bg-[#F7F8FA] hover:bg-[#EEF8F0] flex items-center justify-center transition">

          <FiEdit2
            size={18}
            className="text-[#2F9E44]"
          />

        </button>

        <button className="w-11 h-11 rounded-xl bg-[#F7F8FA] hover:bg-[#FFEDED] flex items-center justify-center transition">

          <FiTrash2
            size={18}
            className="text-red-500"
          />

        </button>

      </div>

    </div>
  );
}

export default ContactCard;