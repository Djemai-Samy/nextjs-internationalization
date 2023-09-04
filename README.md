# Tutoriel Nextjs: Intenationalization

## Lancer l'application

lancez la commande:

```bash
npm run dev
# or
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) Sur votre navigateur.

Vous pouvez commencé à éditer `pages/index.js`.

La page s'actualise lors des sauvegarde.

---

![Image du tutoriel sur le site](https://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/nextjs/nextjs-internationalization/nextjs-internationalization.png)

Guide complet pour l'Internationalisation d'une Application Next.js avec i18n. Il vous permet de rendre votre application accessible à un public mondial en prenant en charge plusieurs langues.

L'internationalisation, ou i18n en abrégé, est un aspect essentiel du développement d'applications web modernes.

Il vous permet de rendre votre application accessible à un public mondial en prenant en charge plusieurs langues.

Dans ce tutoriel de notre série Next.js, nous allons vous guider à travers le processus complet d'internationalisation d'une application Next.js en utilisant la puissante bibliothèque i18n.

## Plan du tutoriel

1. Introduction à l'Internationalisation (i18n) :

    Nous débuterons en expliquant ce qu'est l'internationalisation et pourquoi elle est cruciale pour les applications web modernes.

    Vous comprendrez les avantages d'utiliser i18n pour gérer les traductions et l'adaptation culturelle.

2. Configuration de l'environnement Next.js :

    Vous apprendrez comment configurer un projet Next.js pour prendre en charge l'internationalisation avec i18n.

    Cela inclut l'installation des dépendances nécessaires et la mise en place d'une structure de fichiers appropriée.

3. Intégration de i18n :

    Vous découvrirez comment intégrer la bibliothèque i18n dans votre application Next.js et comment l'utiliser pour gérer dynamiquement les traductions en fonction de la langue de l'utilisateur.

    Nous expliquerons comment permettre aux utilisateurs de sélectionner leur langue préférée, que ce soit via des paramètres de l'application ou des sélecteurs de langue.

---

## Introduction

L'**internationalisation** peut être mise en œuvre de **différentes manières**, mais l'utilisation d'une **bibliothèque** telle que **i18n** facilite grandement le processus.

Voici quelques **raisons** pour lesquelles **i18n** est un **excellent choix** :

1. **Gestion Centralisée des Traductions**:

    **i18n** offre une **gestion centralisée** des **traductions**.

    Vous pouvez **stocker** toutes les **traductions** dans un seul **endroit**, ce qui **facilite** la **maintenance** et les mises à jour.

    De plus, cela **garantit** que toutes les parties de votre **application utilisent** les mêmes **traductions** cohérentes.

2. **Intégration Facile**

    **i18n** s'**intègre** harmonieusement avec de nombreuses **bibliothèques** et **cadres** de développement, y compris **Next.js**, ce qui en fait un choix **populaire** pour les **projets** web **modernes**.

3. **Prise en Charge de Nombreuses Langues**

    Avec **i18n**, vous pouvez prendre en **charge** un grand nombre de **langues différentes** sans effort supplémentaire.

    Cela signifie que votre **application** peut s'**adresser** à un public **mondial diversifié**.---

---

## Installation et configuration

Passons à la **configuration** de l'environnement **Next.js** pour prendre en charge l'**internationalisation**.

Ce chapitre vous **guidera** à travers les **étapes** nécessaires pour **préparer** votre projet **Next.js** à l'**internationalisation**.

---

### 1. Initialiser de l'application

Si vous n'avez pas déjà un **projet** Next.js en **place**, vous devez [**commencer par l'installer**](https://nextjs.org/docs/getting-started/installation).

Vous pouvez le faire en [**utilisant create-next-app**](https://nextjs.org/docs/getting-started/installation), qui est un **outil** pratique pour **configurer** un nouveau projet **Next.js**.

Voici **comment** vous pouvez l'**installer** :

```bash
npx create-next-app mon-app
```

Cela **créera** un nouveau projet **Next.js** dans le **répertoire** nommé **mon-app**.

Un fois **terminé**, noubliez pas de vous **déplacer** sur le **répertoire**:

```bash
cd ./mon-app
```

---

### 2. Installer la bibliothèque

La prochaine étape consiste à installer la bibliothèque i18n. Vous pouvez le faire à l'aide de npm ou yarn, selon votre préférence.

Exécutez l'une des commandes suivantes :

```bash
npm install i18next next-i18next react-i18next
```

ou

```bash
yarn add i18next next-i18next react-i18next
```

Ces dépendances sont essentielles pour gérer les traductions et les fonctionnalités d'internationalisation dans votre projet Next.js.

---

### 3. Configuration d'i18n

Pour configurer i18n dans votre projet Next.js, créez un fichier de configuration.

Vous pouvez le nommer ``next-i18next.config.js`` et le placer à la racine de votre projet.

Voici un exemple de configuration de base :

```js
// /next-i18next.config.js
module.exports = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
};
```

[Vous pouvez retrouvez ici plus de détailles sur la configuration](https://nextjs.org/docs/pages/building-your-application/routing/internationalization)

Nous allons maintenant utiliser la configuration dans le fichier ```next.config.js```:

```js
// /next.config.js
/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
};
module.exports = nextConfig;
```

Et enfin vous devez englober l'entièreté de votre application avec la fonction ```appWithTranslation``` importé de la libraire.

Dans le fichier ```_app.js```:

```js
// /pages/_app.js
import "../styles/globals.css";

import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
```

---

### 4. Fichiers de traduction

Avant de commencer à traduire le contenu de votre application, il est essentiel d'organiser vos fichiers de traduction.

Comme mentionné précédemment, vous avez créé un répertoire ```locales``` dans le dossier ```public``` de votre projet.

Puis ajoutez un sous-répertoires pour chaque langue que vous souhaitez prendre en charge.

À l'intérieur de ces répertoires, créez des fichiers JSON pour stocker les traductions.

Voici un exemple de structure de fichiers de traduction :

```js
📂public
┣ 📂locales
┃  ┣ 📂en
┃  ┃  ┗ 📜common.json
┃  ┗ 📂fr
┃     ┗ 📜common.json
┗ // contenu du dossier public
```

Dans chaque fichier ```common.json```, vous stockerez les paires clé-valeur correspondant aux traductions de votre contenu.

Par exemple, pour la traduction en anglais :

```json
// /public/locales/en/common.json
{
  "welcome": "Welcome to our website.",
  "other": "Another page",
  "pages":{
    "home":"Home",
    "other":"Other"
  }
  // Ajoutez d'autres traductions ici
}
```

Et pour la traduction en français :

```json
// /public/locales/fr/common.json
{
 "welcome": "Bienvenue sur notre site web.",
 "other": "Une autre page",
  "pages":{
    "home":"Accueil",
    "other":"Autre"
  }
}
```

---

## Utilisation des Traductions

Maintenant que vous avez des fichiers de traduction structurés, vous pouvez utiliser ces traductions dans votre application Next.js.

Next.js detecte automatiquement la langue préféré de l'utilisateur.

Si elle correspond à l'une de nos traduction, l'utilisateur sera redirigé vers la route correspendant. Par exemple pour la langue française:

[http://localhost:3000/fr](http://localhost:3000/fr)

[http://localhost:3000/fr/about](http://localhost:3000/fr/about)

La librairie ```next-i18next``` peut donc accéder a cette information dans l'url et l'utiliser pour récuperer la bonne traduction.

---

### Récuperer la traduction

Dans ce code, nous utilisons getServerSideProps sur vos pages pour obtenir les traductions appropriées en fonction de la langue (locale) actuelle de l'utilisateur.

Les traductions sont passées en tant que props au composant Home, ce qui vous permet d'y accéder dans votre page/composant:

```tsx
// /pages/index.js
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps = async ({ locale }) => {
  return { props: { ...(await serverSideTranslations(locale, ["common"])) } };
};
```

---

### Utiliser la traduction

Dans votre composant, vous pouvez utiliser le hook ```useTranslation``` qui vous donne accés a une fonction permettant de récuper la valeur d'une clé en utilisant la bonne traduction:

```tsx
// /pages/index.js
import { useTranslation } from "next-i18next";

export default function Home() {

  const { t } = useTranslation("common");

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{t("welcome")}</h1>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

// La fonction getServerSideProps ...
```

Vous pouvez tester si la traduction fonction en spécifiant la langue dans l'url:

[http://localhost:3000/**fr**](http://localhost:3000/fr)

[http://localhost:3000/en](http://localhost:3000/en)

---

### Changer de langue

Vous pouvez utiliser next/link ou next/router pour effectuer des transitions de langues.

Vous pouvez par exemple ajouter un composant a votre barre de navigation afin de changer de langue.

Nous allons utiliser le hoos ``useRouter`` pour connaitre l'url et garder l'utilisateur sur la meme page.

Voici un exemple avec le composant ``Link`` de Next.js

```tsx
// /components/ChangeLanguage.js
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function ChangeLanguage() {

  const { pathname, asPath, query } = useRouter();

  const languages = [
    {
      locale:"fr",
      label:"Français"
    },
    {
      locale:"en",
      label:"English"
    },
  ]

  return (
    <div>
      {
        languages.map(({locale, label})=>(
          <Link key={locale} href={pathname} locale={locale}>{label}</Link>
        ))
      }              
    </div>
  );
}

```

Et voici un exemple en utisant le méthode ```push``` du ``router``:

```tsx
// /components/ChangeLanguage.js
import { useRouter } from 'next/router';
export default function ChangeLanguage() {

  const router = useRouter();
  const { pathname, asPath, query } = router;

  const languages = [
    {
      locale:"fr",
      label:"Français"
    },
    {
      locale:"en",
      label:"English"
    },
  ]

  return (
    <div>
      {
        languages.map(({locale, label})=>(
          <button key={locale} onClick={()=>router.push({ pathname, query }, asPath, { locale: locale })}>
            {label}
          </button>
        ))
      }              
    </div>
  );
}
```

---

## Conclusion

Pour aller plus loin dans l'internationalisation de votre application Next.js, nous vous encourageons à explorer davantage la documentation de Next.js et de la bibliothèque i18n. Voici quelques ressources utiles pour vous aider :

1. **Documentation Next.js** :

    La documentation officielle de Next.js propose des guides détaillés sur l'internationalisation et de nombreuses autres fonctionnalités de Next.js.

    Consultez-la pour obtenir des informations à jour : [**Documentation Next.js**](https://nextjs.org/docs)

2. **Documentation de next-i18next** :

    La documentation officiel de la libraire : [**next-i18next**](https://github.com/i18next/next-i18next)

3. **Utilisation de i18n Nexus** :

    Pour simplifier la gestion des fichiers de traduction JSON et faciliter la collaboration sur la traduction de contenu, envisagez d'utiliser des outils comme i18n Nexus.

Il offre une interface utilisateur conviviale pour gérer vos traductions : [**i18n Nexus**](https://github.com/panter/i18n-nexus)
