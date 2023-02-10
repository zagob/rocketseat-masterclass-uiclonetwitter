import { Sidebar } from "@/components/Sidebar";
import { ReactNode } from "react";

interface DefaultProps {
  children: ReactNode;
}

export function Default({ children }: DefaultProps) {
  return (
    <div className="max-w-[1000px] min-h-screen flex lg:mx-auto">
      <Sidebar />

      <div className="flex-1 border-l border-l-[#EBEEF0]">{children}</div>
    </div>
  );
}
