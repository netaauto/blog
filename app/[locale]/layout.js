import { Prompt } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import Header from "@/components/Header/Header";
import Head from "next/head";
import StoreProvider from "../StoreProvider";
import Footer from "@/components/Footer/Footer";
import instance from "@/api";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Blog",
  description: "Blog",

};


const fetchData = async () => {
  try {
    const res  = await instance.get("/api/getDocuments?collection=footerPages");
    return res.data.data; // Dönüştürülmüş veriyi döndür
  } catch (error) {
    console.log(error);
    return null; // Hata durumunda null döndür
  }
};



export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  const footerData = await fetchData();


  return (
    <html lang={locale}>
      <StoreProvider>
        <NextIntlClientProvider messages={messages}>
          <Head>
          <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <body
            suppressHydrationWarning={true}
            className={`${prompt.className} bg-[#e5e5e5]`}
          >
            <Header />
            {children}
            <Footer data={footerData} />
          </body>
        </NextIntlClientProvider>
      </StoreProvider>
    </html>
  );
}
