"use client";
import { setIsLanguageModalOpen } from "@/lib/features/header/headerSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation"; // Dil değiştirmek için useRouter'ı ekliyoruz

export default function LanguageModal() {
  const { isLanguageModalOpen } = useAppSelector((state) => state.header);
  const dispatch = useAppDispatch();
  const t = useTranslations("LANGUAGE");
  const router = useRouter(); // useRouter'ı kullanarak dil değişimini yönetmek için

  if (!isLanguageModalOpen) return null;

  const changeLanguage = (locale) => {
    const currentPath = window.location.pathname;
    const newPath = `/${locale}${currentPath.replace(/^\/[a-z]{2}/, '')}`;
    localStorage.setItem("lang", locale); 
    router.replace(newPath);    dispatch(setIsLanguageModalOpen(false)); // Modalı kapatma işlemi
  };

  return (
    <div
      className="w-full lg:w-[34.167vw] h-[100vh] fixed top-0 right-0 z-[999]  gap-[24px] flex flex-col justify-center items-center"
      style={{ background: "rgba(0, 0, 0, 0.8)" }}
    >
      <Image
        src="/images/close.png"
        alt="Close"
        width={32}
        height={32}
        className="absolute right-6 top-6 cursor-pointer"
        onClick={() => {
          dispatch(setIsLanguageModalOpen(false));
        }}
      />

      <h2 className="text-[32px] text-white">{t("selectLanguage")}</h2>
      <div
        className="flex items-center gap-4 cursor-pointer w-[200px] group"
        onClick={() => changeLanguage("az")} // Azerbaycan Türkçesine geçiş
      >
        <Image
          src="/images/aze.png"
          alt="Azerbaijan Flag"
          width={48}
          height={48}
        />

        <span className="text-[18px] text-white group-hover:text-[#f65a11]">
          {t("azerbaijani")}
        </span>
      </div>

      <div
        className="flex items-center gap-4 cursor-pointer w-[200px] group"
        onClick={() => changeLanguage("en")} // İngilizceye geçiş
      >
        <Image
          src="/images/eng.png"
          alt="English Flag"
          width={48}
          height={48}
        />

        <span className="text-[18px] text-white group-hover:text-[#f65a11]">
          {t("english")}
        </span>
      </div>
    </div>
  );
}
