import Banner from "../components/profile/Banner";
import FriendsCard from "../components/profile/FriendsCard";
import PhotosCard from "../components/profile/PhotosCard";
import CreatePost from "../components/profile/CreatePost";
import FeedPost from "../components/profile/FeedPost";

function Profile() {
  return (
    <div className="page-container bg-[#F7F8FA] min-h-screen p-8 overflow-x-hidden">

      {/* Banner */}
      <Banner />

      {/* Content */}
      <div className="mt-28 grid grid-cols-[320px_1fr] gap-8">

        {/* Left Sidebar */}
        <div className="space-y-6">

          <FriendsCard />

          <PhotosCard />

        </div>

        {/* Right Side */}
        <div className="space-y-8">

          <CreatePost />

          <FeedPost />

        </div>

      </div>

    </div>
  );
}

export default Profile;