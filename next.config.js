/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    INTEGRATION_BASE_URL: process.env.INTEGRATION_BASE_URL,
    BASE_URL: process.env.BASE_URL
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/integration/:path*",
        destination: `${process.env.INTEGRATION_BASE_URL}/integration/:path*`
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  typescript: { ignoreBuildErrors: true },
  eslint: {
    ignoreDuringBuilds: true
  },
  transpilePackages: [
    "@ant-design",
    "@rc-component",
    "antd",
    "rc-cascader",
    "rc-checkbox",
    "rc-collapse",
    "rc-dialog",
    "rc-drawer",
    "rc-dropdown",
    "rc-field-form",
    "rc-image",
    "rc-input",
    "rc-input-number",
    "rc-mentions",
    "rc-menu",
    "rc-motion",
    "rc-notification",
    "rc-pagination",
    "rc-picker",
    "rc-progress",
    "rc-rate",
    "rc-resize-observer",
    "rc-segmented",
    "rc-select",
    "rc-slider",
    "rc-steps",
    "rc-switch",
    "rc-table",
    "rc-tabs",
    "rc-textarea",
    "rc-tooltip",
    "rc-tree",
    "rc-tree-select",
    "rc-upload",
    "rc-util"
  ]
};

module.exports = nextConfig;
