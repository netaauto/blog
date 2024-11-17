import instance from "@/api";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const fetchData = async () => {
  try {
    const res = await instance.get("/api/getDocuments?collection=blog"); // Relative URL kullanıyoruz
    return res.data.data; // Dönüştürülmüş veriyi döndür
  } catch (error) {
    console.log(error);
    return null; // Hata durumunda null döndür
  }
};

export default async function Home() {
  const t = await getTranslations("BLOG");
  const data = await fetchData();


  return (
    <div className="p-10 pb-20  sm:p-20 ">
      <h2 className="text-[24px] font-semibold mt-8 text-[#2c2c2c]">
        {t("title")}
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  2xl:grid-cols-3 mt-5">
        {data.map((blog) => {
          return (
            <Link
              href={`/${blog.slug}`}
              key={blog.id}
              className="flex flex-col gap-4 min-h-[400px] pb-10 cursor-pointer items-start justify-start  bg-white hover:shadow-md "
            >
              <Image
                src={blog.thumbnail}
                alt="Netaauto Logo"
                style={{width:"100%", maxHeight:"300px",objectFit:"cover"}}
                width={300}
                height={200}
                className="cursor-pointer"
              />

            <p className="text-[18px] font-medium text-left px-5">{blog.title}</p>
            <time className="text-[#808690] px-5">{blog.date}</time>

            </Link>
          );
        })}
      </div>
    </div>
  );
}
