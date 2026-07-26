import { defineConfig } from "astro/config";

const onGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: onGitHubPages ? "https://snowleopard-elysia.github.io" : undefined,
  base: onGitHubPages ? "/SnowLeopardCode" : "/",
  output: "static",
  build: {
    assets: "assets"
  }
});
