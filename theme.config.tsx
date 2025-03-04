import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Logo from "./components/Logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/codebymojnu/pustcse-edge",
  },
  chat: {
    link: "https://discord.com/mojnu13",
  },
  docsRepositoryBase: "https://github.com/codebymojnu/pustcse-edge/blob/main",
  footer: {
    text: "PUSTCSE EDGE Project",
  },
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – PUSTCSE EDGE Project",
      };
    }
    return { titleTemplate: "PUSTCSE EDGE Project" };
  },
  head: () => {
    const { asPath } = useRouter();
    const { route } = useRouter();
    const { title, ...meta } = useConfig().frontMatter;

    return (
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://pustcse-edge.vercel.app" />
        <meta
          property="og:url"
          content={`https://pustcse-edge.vercel.app${asPath}`}
        />
        <meta property="og:site_name" content="PUSTCSE EDGE" />
        <meta name="og:title" content="PUSTCSE EDGE" />
        <meta httpEquiv="Content-Language" content="bn" />
        <meta name="viewport" content="width=device-width" />
        <meta name="keywords" content="PUSTCSE EDGE" />
        <meta
          property="description"
          content={meta.description || "PUSTCSE EDGE Project"}
        />
        <meta
          property="og:description"
          content={meta.description || "PUSTCSE EDGE Project"}
        />
      </>
    );
  },
};

export default config;
