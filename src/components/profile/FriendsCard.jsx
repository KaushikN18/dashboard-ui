import { friends } from "./data";

function FriendsCard() {
  return (
    <div className="bg-white rounded-[22px] shadow-sm border border-[#ECECEC] p-8">

      <h2 className="text-[24px] font-semibold text-[#2F3442] mb-8">
        Friends
      </h2>

      <div className="space-y-6">

        {friends.map((friend) => (
          <div
            key={friend.id}
            className="flex items-center gap-4 hover:bg-[#F8F9FB] rounded-xl p-2 transition cursor-pointer"
          >
            <img
              src={friend.avatar}
              alt={friend.name}
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h3 className="text-[18px] font-medium text-[#2F3442] leading-6">
                {friend.name}
              </h3>

              <p className="text-[15px] text-[#98A2B3] mt-1">
                {friend.role}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default FriendsCard;