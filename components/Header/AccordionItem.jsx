import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

export default function AccordionItem({ category }) {
  const [active, setActive] = useState(false);
  const locale = useLocale();
  return (
    <div className="mt-6">
      <div
        className="flex items-center gap-6"
        onClick={() => setActive(!active)}
      >
        {active ? (
          <Image
            src="/images/activeArrow.png"
            alt="Arrow"
            width={16}
            height={16}
          />
        ) : (
          <Image src="/images/arrow.png" alt="Arrow" width={16} height={16} />
        )}

        <span>{category[locale]}</span>
      </div>

      {active && (
        <div className="flex flex-col mt-[12px] ml-10 text-[24px] gap-3">
          {category.pages.map((page) => {
            return (
              <Link href={page.nameEng==="Neta Blog"?"/":`https://netaauto.az/${page.path}`} className="text-6 font-light" key={page.id}>
                {locale==="az"?page.nameAz:page.nameEng}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
