/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    // 🔹 Забезпечує наявність resolve
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": `${process.cwd()}/src`,
    };

    // 🔹 Додаємо підтримку SVG через @svgr/plugin-vite
    config.plugins = [
      ...(config.plugins || []),
      (await import("@svgr/plugin-vite")).default(),
    ];

    return config;
  },
};

export default config;
