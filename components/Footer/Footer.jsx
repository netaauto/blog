import { Link } from "@/i18n/routing";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";

export default function Footer({data}) {

    const cookieStore = cookies();
    const locale = cookieStore.get("NEXT_LOCALE").value;

  return (
    <div className="w-ful  py-[36px] flex flex-col bg-black px-[5.104vw]">
      <div className="w-full flex  flex-col lg:flex-row  justify-between items-start lg:items-center h-[90px] lg:h-[60px]">
        <div className="flex gap-6 items-center flex-wrap">



            {data && data.map((page)=>{
                return <Link
                key={page.id}
                href={"https://netaauto.az/"+page.path}
                alt={locale==="az"?page.nameAz:page.nameEng}
                className="text-white text-[16px] hover:text-[#f65a11]"
              >
                {locale==="az"?page.nameAz:page.nameEng}
              </Link>
            })}
          
         


          <Link
            href={"https://netaauto.az/neta-v"}
            alt="Neta V"
            className="text-white text-[16px]  hover:text-[#f65a11]"
          >
            Neta V
          </Link>

          <Link
            href={"https://netaauto.az/neta-u"}
            alt="Neta U"
            className="text-white text-[16px]  hover:text-[#f65a11]"
          >
             Neta U
          </Link>

          <Link
            href={"https://netaauto.az/neta-s"}
            alt="Neta S"
            className="text-white text-[16px]  hover:text-[#f65a11]"
          >
             Neta S
          </Link>
          <Link
            href={"https://netaauto.az/neta-gt"}
            alt="Neta S"
            className="text-white text-[16px]  hover:text-[#f65a11]"
          >
             Neta GT
          </Link>
        </div>

        <div className="flex items-center gap-2 mt-4 lg:mt-0">
          <Link
            href="https://www.youtube.com/@NetaAutoAzerbaijan"
            alt="Youtube"
            target="_blank"
          >
            <Image
              src="/images/youtube.png"
              alt="Youtube"
              width={21}
              height={21}
            />
          </Link>

          <Link
            href="hhttps://www.tiktok.com/@netautoazerbaijan"
            alt="Youtube"
            target="_blank"
          >
            <Image
              src="/images/tiktok.png"
              alt="Tiktok"
              width={21}
              height={21}
            />
          </Link>

          <Link
            href="https://www.facebook.com/profile.php?id=61558734524716"
            alt="Facebook"
            target="_blank"
          >
            <Image
              src="/images/facebook.png"
              alt="Tiktok"
              width={21}
              height={21}
            />
          </Link>

          <Link
            href="https://www.instagram.com/netauto.azerbaijan"
            alt="Instagram"
            target="_blank"
          >
            <Image
              src="/images/instagram.png"
              alt="Tiktok"
              width={21}
              height={21}
            />
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex w-full h-[1px] bg-white"></div>
      <div className="hidden lg:flex  mt-6">
        <Link href={"https://netaauto.az"}>
          <Image
            src="/images/footer_logo.png"
            alt="Netaauto Logo"
            width={34}
            height={26}
            style={{ width: "2.5vw" }}
          />
        </Link>
      </div>
    </div>
  );
}
