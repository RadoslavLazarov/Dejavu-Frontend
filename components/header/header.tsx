import NavMenu from "./navMenu";
import { useRouter } from "next/router";

enum Languages {
  bg,
  en,
}

export default function Header() {
  const router = useRouter();

  const handleLangClick = (lang: Languages) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: Languages[lang] });
  };

  return (
    <div>
      header
      <NavMenu />
      <div>
        <button onClick={() => handleLangClick(Languages.bg)}>BG</button>
        <button onClick={() => handleLangClick(Languages.en)}>EN</button>
      </div>
    </div>
  );
}
