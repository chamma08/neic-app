import {
  Header,
  OtherServicesSection,
  PurchasingSection,
  ServicesSection,
} from "@/components";
import React from "react";
import { cover_5 } from "@/assets";

const Services = () => {
  const pageName = "NEIC Information Services";
  return (
    <div>
      <Header pageName={pageName} image={cover_5} />
      <ServicesSection />
      <PurchasingSection />
      <OtherServicesSection />
    </div>
  );
};

export default Services;
