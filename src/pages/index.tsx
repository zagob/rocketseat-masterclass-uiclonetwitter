import { Header } from "@/components/Header";
import { Separator } from "@/components/Separator";
import { Tweet } from "@/components/Tweet";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
    <div>
      <Header title="Home" />

      <form className="py-4">
        <label htmlFor="tweet" className="flex items-center gap-3 mx-5">
          <Image
            src="https://github.com/zagob.png"
            width={48}
            height={48}
            alt="Matheus"
            className="rounded-full"
          />

          <textarea
            name=""
            id="tweet"
            placeholder="What's happening?"
            className="border-none outline-none mt-4 font-bold text-lg placeholder:text-gray-400 lg:w-full"
          />
        </label>
        <div className="flex justify-end px-5">
          <button className="bg-[#1DA1F2] px-6 py-2 rounded-full text-white hover:brightness-125 transition-all">
            Tweet
          </button>
        </div>
      </form>

      <Separator />

      <Tweet />
      <Tweet />
    </div>
  );
}
