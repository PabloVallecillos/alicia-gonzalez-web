import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const withMDX = createMDX({
  // options here if needed
});

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  /* config options here */
};

export default withNextIntl(withMDX(nextConfig));
