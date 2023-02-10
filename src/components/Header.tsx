import { Sparkle } from "phosphor-react";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-6 px-5 border-b border-b-[#EBEEF0]">
      <span className="text-[20px] font-bold">{title}</span>

      <Sparkle size={32} className="text-[#1DA1F2]" />
    </header>
  );
}
