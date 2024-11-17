"use client";
import React from "react";
import styles from "../Header/_style.module.css";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setIsLanguageModalOpen, setSelectedMenu } from "@/lib/features/header/headerSlice";
import DesktopSubMenus from "./DesktopSubMenus";

export default function DesktopHeader({ categories }) {
  const t = useTranslations("HEADER");
  const locale = useLocale();
  const { selectedMenu,isLanguageModalOpen } = useAppSelector((state) => state.header);
  const dispatch = useAppDispatch();
  return (
    <>
    {!isLanguageModalOpen && <>
    
      {!selectedMenu ? (
        <div className={styles.header}>
          <div className={styles.left}>
            {categories.toReversed().map(
              (category) =>
                category.visible && (
                  <div
                    key={category.id}
                    className={styles.menuItem}
                    onClick={() => dispatch(setSelectedMenu(category))}
                  >
                    {category[locale]}
                  </div>
                )
            )}

            <Link href={"https://netaauto.az/test-drive.html"} className={styles.menuItem}>
              {t("testDrive")}
            </Link>
          </div>
          <div className={styles.center}>
            <Link href={"https://netaauto.az"} >
            <Image
              src={"/images/logo.png"}
              alt="Netaauto Logo"
              style={{ width: "2.344vw" }}
              width={34}
              height={26}
            />
            </Link>
          </div>
          <div className={styles.right}>
            <Link href={"https://netaauto.az/calculator.html"} className={styles.menuItem}>
              {t("creditCalculator")}
            </Link>

            <div className={styles.languageBtn} onClick={()=>dispatch(setIsLanguageModalOpen(true))}>
              <Image
                src={"/images/wordicon.png"}
                alt="Word Icon"
                style={{ width: "26px" }}
                width={100}
                height={100}
              />
              <div className={styles.menuItem}>{t("selectLanguage")}</div>
            </div>
          </div>
        </div>
      ) :     <DesktopSubMenus categories={categories} />}
    
    
    </>}
   

    </>
  );
}
