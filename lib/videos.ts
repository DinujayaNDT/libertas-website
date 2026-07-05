export type Video = {
  title: string;
  category: string;
  duration: string;
  description: string;
  // TODO: add a real `url` when you have hosted videos to link out to.
  url?: string;
};

export type VideoSection = {
  key: string;
  label: string;
  videos: Video[];
};

/** Placeholder video library. Thumbnails are generated gradients (no embeds). */
export const videoSections: VideoSection[] = [
  {
    key: "overview",
    label: "Odoo Overview Videos",
    videos: [
      {
        title: "What is Odoo ERP?",
        category: "Overview",
        duration: "5:20",
        description:
          "A plain English introduction to Odoo as an integrated business platform.",
      },
      {
        title: "Odoo CRM Demo Overview",
        category: "Overview",
        duration: "6:45",
        description:
          "How pipeline, leads, and follow up come together in Odoo CRM.",
      },
    ],
  },
  {
    key: "demos",
    label: "Demo Walkthroughs",
    videos: [
      {
        title: "Odoo Inventory Demo Overview",
        category: "Demo",
        duration: "7:10",
        description:
          "A walkthrough of stock, transfers, and warehouse control in Odoo.",
      },
      {
        title: "Odoo Accounting Demo Overview",
        category: "Demo",
        duration: "8:02",
        description:
          "See invoicing, reconciliation, and reporting in Odoo Accounting.",
      },
    ],
  },
  {
    key: "explainers",
    label: "Libertas Service Explainers",
    videos: [
      {
        title: "Odoo.sh and Customisation Explained",
        category: "Explainer",
        duration: "6:30",
        description:
          "How Odoo.sh environments and custom development fit together.",
      },
    ],
  },
  {
    key: "tips",
    label: "Implementation Tips",
    videos: [
      {
        title: "How Libertas Runs an Odoo Implementation",
        category: "Tips",
        duration: "9:15",
        description:
          "Our staged approach from discovery to go live and support.",
      },
    ],
  },
];

/** Flattened list for previews. */
export const allVideos: Video[] = videoSections.flatMap((s) => s.videos);
