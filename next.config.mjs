/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['xljudodlnwgxjpvvipor.supabase.co', 'lvfinjcwkocqwbatqlru.supabase.co', 'marketplace.allo.xyz', 'static.news.bitcoin.com', 'uploads.republic.com', 'miro.medium.com', 'www.irablocks.io'],
  },
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      bufferutil: 'commonjs bufferutil',
      canvas: 'commonjs canvas',
    });
    return config;
  }
};

export default nextConfig;
