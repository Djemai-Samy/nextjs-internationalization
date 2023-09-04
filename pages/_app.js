// /pages/_app.js
import ChangeLanguage from "../src/components/ChangeLanguage";
import NavBar from "../src/components/NavBar";
import "../styles/globals.css";

import { appWithTranslation, useTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
	return (
		<>
    <header>
      <NavBar/>
			<ChangeLanguage />
    </header>
			<main>
				<Component {...pageProps} />
			</main>
      
		</>
	);
}

export default appWithTranslation(MyApp);
