import Image from "next/image";
import Link from "next/link";
import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";

export function Tweet() {
  return (
    <Link
      href="/tweet-answer"
      className="flex gap-3 items-start py-6 px-5 border-b"
    >
      <Image
        src="https://github.com/zagob.png"
        width={48}
        height={48}
        alt="Matheus"
        className="rounded-full"
      />

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <strong className="font-bold">Matheus</strong>
          <span className="text-[#89A2B8]">@zagob</span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sed
          architecto totam facilis eos fuga ex quam, doloremque error cupiditate
          vero dolore voluptatum voluptas laudantium ratione omnis eaque ad
          repudiandae!
        </p>

        <div className="flex items-center gap-4 lg:gap-12">
          <button className="text-sm flex items-center gap-2 text-gray-600">
            <ChatCircle size={24} className="text-[#89A2B8]" />
            121
          </button>
          <button className="text-sm flex items-center gap-2 text-gray-600">
            <ArrowClockwise size={24} className="text-[#89A2B8]" />
            231
          </button>
          <button className="text-sm flex items-center gap-2 text-gray-600">
            <Heart size={24} className="text-[#89A2B8]" />
            2323
          </button>
        </div>
      </div>
    </Link>
  );
}
