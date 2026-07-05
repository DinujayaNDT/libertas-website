export type Faq = { q: string; a: string };

export const pricingFaqs: Faq[] = [
  {
    q: "Is this calculator an official quote?",
    a: "No. It gives an indicative estimate to help you plan. Final pricing depends on official Odoo licence pricing, scope, hosting, data migration complexity, integrations, and support needs.",
  },
  {
    q: "Do you charge for Odoo licences?",
    a: "Odoo licences are paid to Odoo. Libertas charges for implementation, customisation, support, and related services. The calculator separates licence estimates from our service estimates.",
  },
  {
    q: "Which hosting option should I choose?",
    a: "Odoo Online is the simplest managed option. Odoo.sh suits teams that need custom development with staging and Git. On premise gives full control but more responsibility. We can advise based on your needs.",
  },
  {
    q: "How accurate is the estimate?",
    a: "It is a starting point. Once we understand your processes, data, and integrations, we can give an accurate, itemised quote.",
  },
  {
    q: "Can I change currency?",
    a: "Yes. The calculator supports GBP, USD, EUR, and LKR. Exchange rates are indicative and set in configuration, so they should be confirmed before purchase.",
  },
];

export const demoFaqs: Faq[] = [
  {
    q: "What is the difference between the official Odoo demo and a Libertas demo?",
    a: "The official Odoo demo is great for exploring features on your own. A Libertas guided demo maps Odoo to your real business process and answers questions specific to your setup.",
  },
  {
    q: "How long does a guided demo take?",
    a: "Most demos run 30 to 45 minutes. We can tailor the length and focus to what you want to see.",
  },
  {
    q: "Is there any cost or obligation?",
    a: "No. A guided demo is free and there is no obligation. It is simply a chance to see whether Odoo fits your business.",
  },
  {
    q: "Can you show my industry specifically?",
    a: "Yes. Tell us your industry and key processes and we will focus the demo on the areas that matter most to you.",
  },
];
