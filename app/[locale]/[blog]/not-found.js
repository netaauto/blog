"use client"
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default  function NotFound() {
    const  t = useTranslations("NOT_FOUND_PAGE")
  return (
    <div className="w-full h-[100vh] gap-11 flex flex-col justify-center items-center">
      <h2 className="text-[48px] ">{t("title")}</h2>

      <Link href="https://netaauto.az/" className="py-[12px] px-[24px] text-[18px] border border-black cursor-pointer hover:bg-[#ededed]">{t("backToHome")}</Link>
    </div>
  );
}
