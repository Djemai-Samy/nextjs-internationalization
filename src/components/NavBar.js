import Link from "next/link";
import React from "react";
import { useTranslation } from 'next-i18next'

export default function NavBar() {
  const { t } = useTranslation("common");
	const links = [
		{
			href: "/",
      key:"/",
      children: t('pages.home'),
		},
		{
			href: "/other",
      key:"/other",
      children: t('pages.other'),
		},
	];

	return (
		<nav>
			{links.map((link) => (
				<Link key={link.key} {...link} />
			))}
		</nav>
	);
}
