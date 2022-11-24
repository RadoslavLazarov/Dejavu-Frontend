import Head from "next/head";

export default function Header() {
  return (
    <Head>
      {/* TODO: Remove on release */}
      <meta name="robots" content="noindex,nofollow" />
      <title>DejaVu - Wedding & Party Agency</title>
      <meta name="description" content="DejaVu - Wedding & Party Agency" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="alternate" href="https://dejavuruse.com/bg" hrefLang="bg" />
      <link rel="alternate" href="https://dejavuruse.com/en" hrefLang="en" />
    </Head>
  );
}
