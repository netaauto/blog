"use client";
import React from "react";
import styles from "./_style.module.css";
import Image from "next/image";
import MobileSubMenus from "./MobileSubMenus";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  setIsLanguageModalOpen,
  setIsMobileSubMenusOpen,
} from "@/lib/features/header/headerSlice";

export default function MobileHeader({ categories }) {
  const { isMobileSubMenusOpen, isLanguageModalOpen } = useAppSelector(
    (state) => state.header
  );
  const dispatch = useAppDispatch();

  return (
    <>
      {!isLanguageModalOpen && (
        <div className={styles.mobileHeader}>
          {isMobileSubMenusOpen && categories && (
            <MobileSubMenus categories={categories} />
          )}
          <div>
            <Image
              src={"/images/burger.png"}
              alt="Netaauto Logo"
              style={{ width: "4.267vw" }}
              width={32}
              height={24}
              onClick={() => dispatch(setIsMobileSubMenusOpen(true))}
            />
          </div>
          <div>
            <Image
              src={"/images/mobilelogo.png"}
              alt="Netaauto Logo"
              style={{ width: "7.467vw" }}
              width={32}
              height={27}
            />
          </div>
          <div onClick={() => dispatch(setIsLanguageModalOpen(true))}>
            <Image
              src={"/images/mobilelang.png"}
              alt="Language"
              style={{ width: "13.28vw" }}
              width={57}
              height={29}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
