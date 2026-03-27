import React from "react";
import { Services } from "../components/services";
import { Features } from "../components/features";
import { Gallery } from "../components/gallery";
import { PartnerLogos } from "../components/PartnerLogos";
import { SuccessCases } from "../components/SuccessCases";
import { LeadMagnet } from "../components/LeadMagnet";
import { Contact } from "../components/contact";
import { Cotizaciones } from "../components/Cotizaciones";
import JsonData from "../data/data.json";

export default function DesarrolloWeb() {
  return (
    <main>
      <Services data={JsonData.Services} />
      <Features data={JsonData.Features} />
      <PartnerLogos />
      <SuccessCases />
      <Gallery data={JsonData.Gallery} />
      <Cotizaciones />
      <LeadMagnet />

      <Contact />
    </main>
  );
}
