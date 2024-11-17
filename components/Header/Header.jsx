import React from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import instance from "@/api";
import LanguageModal from "./LanguageModal";

const fetchData = async () => {
  try {
    const res = await instance.get("/api/getCategories"); // Relative URL kullanıyoruz
    return res.data.data; // Dönüştürülmüş veriyi döndür
  } catch (error) {
    console.log(error);
    return null; // Hata durumunda null döndür
  }
};

export default async function Header() {
  const data = await fetchData();


  if (!data) {
    return null;
  }

  return (
    <>
      <DesktopHeader categories={data} />
      <MobileHeader categories ={data} />
      <LanguageModal /> 
    </>
  );
}
