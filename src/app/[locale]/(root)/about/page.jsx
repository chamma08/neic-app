import {
  AboutUs,
  FloorPlan,
  Header,
  Staff,
  TourSection,
  TranslationsProvider,
  VisionMission,
} from "@/components";
import React from "react";
import { cover_1 } from "@/assets";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["about", "home"];

const About = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const pageName = t("about.page_name");
  const description = t("about.header_description");

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div>
        <Header pageName={pageName} description={description} image={cover_1} />
        <AboutUs />
        <VisionMission />
        <TourSection />
        <Staff />
        <FloorPlan />
      </div>
    </TranslationsProvider>
  );
};

export default About;
