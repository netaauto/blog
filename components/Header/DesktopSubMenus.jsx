"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import styled from "styled-components";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { setSelectedMenu } from "@/lib/features/header/headerSlice";
import styles from "./_style.module.css";
export default function DesktopSubMenus({ categories }) {
  const { data, selectedMenu } = useAppSelector((state) => state.header);
  const dispatch = useAppDispatch();
  const t = useTranslations("HEADER");
  const locale = useLocale();
  const az = locale === "az";

  const LeftSizeAz =
    selectedMenu && selectedMenu.id === "weAreNeta"
      ? "2.5vw"
      : selectedMenu && selectedMenu.id === "models"
      ? "10.4vw"
      : "17.6vw";

  const LeftSizeEn =
    selectedMenu && selectedMenu.id === "weAreNeta"
      ? "2.5vw"
      : selectedMenu && selectedMenu.id === "models"
      ? "11.6vw"
      : "18.1vw";

  return (
    <div className={styles.submenus}>
      <Image
        src={"/images/close.png"}
        onClick={() => dispatch(setSelectedMenu(null))}
        className={styles.subMenusCloseIcon}
        alt="Close Icon"
        width={30}
        height={30}
      />

      <div className={styles.mainCategories}>
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
      </div>

      <div className={styles.subCategories} style={{left:az?LeftSizeAz:LeftSizeEn}} >
        {selectedMenu && selectedMenu.pages.map((sub)=>sub.visible && <Link  onClick={() => dispatch(setSelectedMenu(null))} href={sub.nameEng==="Neta Blog"?"/":`https://netaauto.az/${sub.path}`} key={sub.id} className={styles.subCategory} > 
        {az ? sub.nameAz : sub.nameEng}

        
        </Link>)}

            


      </div>
    </div>
  );
}

const Subpages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 120px;
  position: absolute;
  left: ${(props) => props.$left};
  .active {
    color: #f65a11 !important;
    border-radius: 0;
    border: none;
    width: auto;
  }
  a {
    text-decoration: none;
    font-style: normal;
    font-weight: 275;
    font-size: 1.458vw;
    line-height: 2.188vw;
    color: #ffffff;

    &:hover {
      color: #f65a11;
      cursor: pointer;
    }
  }
`;

const Wrapper = styled.div`
  width: 34.167vw;
  background: rgba(0, 0, 0, 0.8);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  display: ${(props) => (props.$show ? "flex" : "none")};
  & > img {
    position: absolute;
    width: 2.083vw;
    top: 2.2vw;
    z-index: 9999;
    right: 2.5vw;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Pages = styled.div`
  width: 100%;
  display: flex;
  gap: 3vw;
  position: absolute;
  top: 2.5vw;
  left: 2.5vw;
`;

const PageItem = styled.div`
  font-size: 1vw;
  color: white;
  &:hover {
    color: #f65a11;
    cursor: pointer;
  }
`;
