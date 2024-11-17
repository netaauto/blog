import { setIsMobileSubMenusOpen } from "@/lib/features/header/headerSlice";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";
import React from "react";
import AccordionItem from "./AccordionItem";

export default function MobileSubMenus({ categories }) {
  const dispatch = useAppDispatch();
  return (
    <div
      className="absolute top-0 left-0 w-full text-white min-h-screen bg-[rgba(0, 0, 0, 0.8)]"
      style={{ background: "rgba(0, 0, 0, 0.8)" }}
    >
      <div className="w-full p-6 flex justify-end">
        <Image
          src={"/images/close.png"}
          onClick={() => dispatch(setIsMobileSubMenusOpen(false))}
          alt="Close"
          width={32}
          height={32}
        />
      </div>

      <div className="flex flex-col gap-[12px] py-4 px-6">
        {categories.map((category) => (
          <AccordionItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
