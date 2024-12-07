import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Logo from "./components/Logo"


const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/codebymojnu/the-chapters-of-mojnu",
  },
  chat: {
    link: "https://discord.com/mojnu13",
  },
  docsRepositoryBase:
    "https://github.com/codebymojnu/the-chapters-of-mojnu/blob/main",
  footer: {
    text: "The Chapters of Mojnu",
  },
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – The Chaptes of Mojnu",
      };
    }
    return { titleTemplate: "The Chaptes of Mojnu" };
  },
  head: () => {
    const { asPath } = useRouter();
    const { route } = useRouter();
    const { title, ...meta } = useConfig().frontMatter;

    return (
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://the-chapters-of-mojnu.vercel.app" />
        <meta
          property="og:url"
          content={`https://the-chapters-of-mojnu.vercel.app${asPath}`}
        />
        <meta property="og:site_name" content="The Chapters of Mojnu" />
        <meta name="og:title" content="The Chapters of Mojnu" />
        <meta httpEquiv="Content-Language" content="bn" />
        <meta name="viewport" content="width=device-width" />
        <meta name="keywords" content="The Chapters of Mojnu" />
        <meta
          property="description"
          content={
            meta.description ||
            "The Chapters of Mojnu:  আমার জীবনের স্বপ্ন, লক্ষ্য, সফলতা, ব্যর্থতা, এবং ভুলগুলো কাটিয়ে উঠার গল্প নিয়ে এই ডকুমেন্টেশন।"
          }
        />
        <meta
          property="og:description"
          content={
            meta.description ||
            "The Chapters of Mojnu:  আমার জীবনের স্বপ্ন, লক্ষ্য, সফলতা, ব্যর্থতা, এবং ভুলগুলো কাটিয়ে উঠার গল্প নিয়ে এই ডকুমেন্টেশন।"
          }
        />
      </>
    );
  },
};

export default config;
