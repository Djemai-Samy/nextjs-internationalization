// /components/ChangeLanguage.js
import { useRouter } from "next/router";
export default function ChangeLanguage() {
	const router = useRouter();
	const { pathname, asPath, query } = router;

	const languages = [
		{
			locale: "fr",
			label: "Français",
		},
		{
			locale: "en",
			label: "English",
		},
	];

	return (
		<div>
			{languages.map(({ locale, label }) => (
				<button
					key={locale}
					onClick={() => router.push({ pathname, query }, asPath, { locale: locale })}
				>
					{label}
				</button>
			))}
		</div>
	);
}
