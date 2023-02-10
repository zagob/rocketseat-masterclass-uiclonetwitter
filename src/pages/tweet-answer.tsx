import { Header } from "@/components/Header";
import { Separator } from "@/components/Separator";
import { Tweet } from "@/components/Tweet";
import Image from "next/image";
import { useState } from "react";

export default function TweetAnswer() {
  const [] = useState("");

  return (
    <div>
      <Header title="Tweet" />

      <Tweet />

      <Separator />

      <form className="py-4">
        <label htmlFor="answer" className="flex items-center gap-3 mx-5">
          <Image
            src="https://github.com/zagob.png"
            width={48}
            height={48}
            alt="Matheus"
            className="rounded-full"
          />

          <textarea
            name=""
            id="answer"
            placeholder="Tweet your answer"
            className="border-none text-black outline-none mt-4 font-bold text-lg placeholder:text-gray-400 lg:w-full"
          />
        </label>
        <div className="flex justify-end px-5">
          <button className="bg-[#1DA1F2] px-6 py-2 rounded-full text-white hover:brightness-125 transition-all font-bold">
            Answer
          </button>
        </div>
      </form>

      <Tweet />
      <Tweet />
    </div>
  );
}
