import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "phosphor-react";

import twitterLogo from "../assets/TwitterLogo.svg";

export function Sidebar() {
  return (
    <aside className="flex flex-col items-center gap-8 px-3 border-l py-5 lg:w-[300px] lg:border-none lg:items-start">
      <Image className="" src={twitterLogo} alt="Logo" />

      <nav className="flex flex-col gap-8">
        <Link href="/" className="lg:flex lg:items-center lg:gap-2">
          <House className="w-8 h-8" weight="fill" />
          <span className="hidden lg:block lg:text-xl lg:font-bold">Home</span>
        </Link>
        <a href="#" className="lg:flex lg:items-center lg:gap-2">
          <Hash className="w-8 h-8" />
          <span className="hidden lg:block lg:text-xl lg:font-bold">
            Explore
          </span>
        </a>
        <a href="#" className="lg:flex lg:items-center lg:gap-2">
          <Bell className="w-8 h-8" />
          <span className="hidden lg:block lg:text-xl lg:font-bold">
            Notifications
          </span>
        </a>
        <a href="#" className="lg:flex lg:items-center lg:gap-2">
          <Envelope className="w-8 h-8" />
          <span className="hidden lg:block lg:text-xl lg:font-bold">
            Messages
          </span>
        </a>
        <a href="#" className="lg:flex lg:items-center lg:gap-2">
          <BookmarkSimple className="w-8 h-8" />
          <span className="hidden lg:block lg:text-xl lg:font-bold">
            Bookmarks
          </span>
        </a>
        <a href="#" className="lg:flex lg:items-center lg:gap-2">
          <FileText className="w-8 h-8" />
          <span className="hidden lg:block lg:text-xl lg:font-bold">Lists</span>
        </a>
        <a href="#" className="lg:flex lg:items-center lg:gap-2">
          <User className="w-8 h-8" />
          <span className="hidden lg:block lg:text-xl lg:font-bold">
            Profile
          </span>
        </a>
        <a href="#" className="lg:flex lg:items-center lg:gap-2">
          <DotsThreeCircle className="w-8 h-8" />
          <span className="hidden lg:block lg:text-xl lg:font-bold">More</span>
        </a>
      </nav>

      <button className="bg-[#1DA1F2] rounded-full p-2 lg:w-full" type="button">
        <Pencil size={16} className="text-white lg:hidden" />
        <span className="hidden lg:block lg:text-white lg:font-bold">
          Tweet
        </span>
      </button>
    </aside>
  );
}
