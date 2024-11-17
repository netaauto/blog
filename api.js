import axios from "axios";

const instance = axios.create({
  baseURL: "https://neta-blog.vercel.app", // Mevcut domaini al
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    // Diğer varsayılan başlıklar burada tanımlanabilir
  },
});

// İsteğe bağlı olarak bir interceptor ekleyebilirsiniz
instance.interceptors.request.use(
  (config) => {
    // Check if there are already query parameters in the URL
    // const separator = config.url?.includes("?") ? "&" : "?";

    // Get the locale from cookies
    // const locale = Cookies.get("locale");

    // Append the locale query parameter
    // if (locale) {
    //   config.url = `${config.url}${separator}locale=${locale}`;
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
