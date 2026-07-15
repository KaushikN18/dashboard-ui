import { useState } from "react";
import {
  FiHeart,
  FiMessageCircle,
  FiShare2,
  FiMoreHorizontal,
  FiSend,
  FiSmile,
  FiCornerUpLeft,
} from "react-icons/fi";

import { posts } from "./data";

function FeedPost() {
  const [comment, setComment] = useState("");

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-[22px] border border-[#ECECEC] shadow-sm overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-7">
            <div className="flex items-center gap-4">
              <img
                src={post.avatar}
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <h3 className="text-[18px] font-semibold text-[#2F3442]">
                  {post.author}
                </h3>

                <p className="text-[#98A2B3] text-[14px] mt-1">
                  {post.date}
                </p>
              </div>
            </div>

            <button className="text-[#98A2B3] hover:text-[#2F3442]">
              <FiMoreHorizontal size={22} />
            </button>
          </div>

          {/* Post Text */}
          <div className="px-7">
            <p className="text-[#687284] text-[16px] leading-8">
              {post.text}
            </p>
          </div>

          {/* Post Image */}
          <div className="mt-6">
            <img
              src={post.image}
              alt=""
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* Likes */}
          <div className="flex justify-between items-center px-7 py-5 border-b border-[#ECECEC]">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#2F9E44] text-white flex items-center justify-center">
                  <FiHeart size={14} />
                </div>

                <span className="text-[#687284]">{post.likes}</span>
              </div>

              <span className="text-[#687284]">
                {post.commentsCount} Comments
              </span>
            </div>

            <div className="text-[#98A2B3]">3 Shares</div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-3 border-b border-[#ECECEC]">
            <button className="h-14 flex items-center justify-center gap-2 hover:bg-[#F8F8F8] transition">
              <FiHeart />
              Like
            </button>

            <button className="h-14 flex items-center justify-center gap-2 hover:bg-[#F8F8F8] transition">
              <FiMessageCircle />
              Comment
            </button>

            <button className="h-14 flex items-center justify-center gap-2 hover:bg-[#F8F8F8] transition">
              <FiShare2 />
              Share
            </button>
          </div>

          {/* Comment Box */}
          <div className="p-7">
            <div className="flex gap-4">
              <img
                src="https://i.pravatar.cc/100?img=11"
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="flex-1 relative">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full h-12 rounded-xl bg-[#F7F8FA] border border-[#ECECEC] pl-5 pr-20 outline-none"
                />

                <button className="absolute right-14 top-1/2 -translate-y-1/2 text-[#98A2B3]">
                  <FiSmile size={18} />
                </button>

                <button className="absolute right-5 top-1/2 -translate-y-1/2 text-[#2F9E44]">
                  <FiSend size={18} />
                </button>
              </div>
            </div>

            {/* Comments (data-driven) */}
            {post.comments.map((c) => (
              <div key={c.id}>
                {/* Top-level comment */}
                <div className="flex gap-4 mt-8">
                  <img
                    src={c.avatar}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div className="flex-1">
                    <div className="bg-[#F7F8FA] rounded-2xl p-5">
                      <div className="flex justify-between">
                        <h4 className="font-semibold text-[#2F3442]">
                          {c.author}
                        </h4>

                        <span className="text-sm text-[#98A2B3]">
                          {c.time}
                        </span>
                      </div>

                      <p className="mt-3 text-[#687284] leading-7 whitespace-pre-line">
                        {c.text}
                      </p>
                    </div>

                    <div className="flex items-center gap-6 mt-3 text-sm text-[#687284]">
                      <button className="flex items-center gap-1 hover:text-[#2F9E44]">
                        <FiHeart size={14} />
                        {c.likes > 0 && c.likes}
                      </button>

                      <button className="flex items-center gap-1 hover:text-[#2F9E44]">
                        <FiCornerUpLeft size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Replies */}
                {c.replies?.length > 0 && (
                  <div className="ml-16">
                    {c.replies.map((r) => (
                      <div key={r.id} className="flex gap-4 mt-6">
                        <img
                          src={r.avatar}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover"
                        />

                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="font-semibold text-[#2F3442]">
                              {r.author}
                            </h4>

                            <span className="text-sm text-[#98A2B3]">
                              {r.time}
                            </span>
                          </div>

                          <p className="mt-2 text-[#687284] leading-7 whitespace-pre-line">
                            {r.text}
                          </p>

                          <div className="flex items-center gap-6 mt-3 text-sm text-[#687284]">
                            <button className="flex items-center gap-1 hover:text-[#2F9E44]">
                              <FiHeart size={14} />
                              {r.likes > 0 && r.likes}
                            </button>

                            <button className="flex items-center gap-1 hover:text-[#2F9E44]">
                              <FiCornerUpLeft size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedPost;