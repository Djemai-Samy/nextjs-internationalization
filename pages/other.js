// /pages/index.js
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getServerSideProps = async ({ locale }) => {
	return { props: { ...(await serverSideTranslations(locale, ["common"])) } };
};

export default function Home() {
	const { t } = useTranslation("common");

	return (
		<>
			<h1>{t("other")}</h1>
		</>
	);
}
