import instance from "@/api";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import Head from "next/head"; // Dinamik Head bileşeni ekliyoruz

const fetchData = async (id) => {
  try {
    const res = await instance.get(`/api/getDocument?collection=blog&id=${id}`); // Relative URL kullanıyoruz
    return res.data;
  } catch (error) {
    notFound();
    return null;
  }
};

export async function generateMetadata({ params }) {
  const data = await fetchData(params.blog);
  return {
    title: data.data.metaTitle,
    description: data.data.description,
  };
}




export default async function Home({ params }) {
  const t = await getTranslations("BLOG");
  const data = await fetchData(params.blog);

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="p-10 pb-20 sm:p-20 w-full md:w-[90%] lg:w-[70%]">
          <h2 className="text-[24px] font-semibold mt-8 text-[#2c2c2c]">
            {data?.data?.title}
          </h2>

          <time className="text-[#808690] mt-5">{data?.data?.date}</time>
          <div
            dangerouslySetInnerHTML={{ __html: data?.data?.content }}
            className="mt-5"
          />
        </div>
      </div>
    </>
  );
}
