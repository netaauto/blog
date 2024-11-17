import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'firebasestorage.googleapis.com',
          'www.netaauto.co',
          'netaauto.co', // Add this if needed
        ],
      },

};
 
export default withNextIntl(nextConfig);