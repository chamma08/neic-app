import {
  Carousel,
  AboutSection,
  MessageSection,
  AwardSection,
  TourSection,
  ResourcesSection,
  ArrivalsSection,
  LinksSection,
  TranslationsProvider,
  CollectionSection,
} from "@/components";
import initTranslations from "../../i18n";

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div>
        <Carousel />
        <AboutSection />
        <MessageSection />
        <AwardSection />
        <CollectionSection />
        <TourSection />
        <ResourcesSection />
        <ArrivalsSection />
        <LinksSection />
      </div>
    </TranslationsProvider>
  );
}
