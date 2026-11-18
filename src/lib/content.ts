// ============================================================================
// CONTENT CONFIG - all personal facts live here. Edit this one file and the
// page updates everywhere. Placeholder-ish bits are marked with [EDIT].
//
// DECISION: Full English per user request. Handles/usernames are deliberately
// hidden from the rendered rows; the door list reads like a table of contents.
// ============================================================================

export const site = {
  // [EDIT] Final domain once deployed. Used for absolute OG URLs.
  url: "https://galihrhgnwn.github.io/magalih-site/",

  // [EDIT] Basics.
  name: "Magalih Irham Gunawan",
  nickname: "Galih",
  city: "Indonesia", // [EDIT]
  role: "building digital products, writing, and recording sound here and there", // [EDIT]
  edition: "November 2026 Edition",
  cardNo: "card no. 001",
};

export const intro = {
  status: "Based somewhere in Indonesia, currently building many things at once.", // [EDIT]
  curiosity: [
    "I believe small things, tended carefully, grow into something sane.",
    "Sometimes it is food. Sometimes it is a website.",
  ],
};

export const about = {
  heading: "About the cardholder",
  paragraphs: [
    "Hi, I am Magalih. Galih to friends. I write code and sentences, often in the same file. I am not afraid of in progress, because everything I have ever loved started out half-finished.", // [EDIT]
    "I think the internet is still a good place to meet decent people, and this card is my way of saying hello. If you have read this far, consider us officially introduced.",
  ],
  marginNote: "introduced slowly, no rushing",
};

export const now = {
  heading: "Now",
  sub: "a snapshot of the present, last updated past midnight",
  items: [
    {
      time: "22:00",
      text: "writing a short piece about queues and patience. It might become an essay, it might become a thread.", // [EDIT]
    },
    {
      time: "17:30",
      text: "listening to Hindia's Evaluasi, again. The track card is just below.", // [EDIT]
    },
    {
      time: "09:00",
      text: "working on a project I cannot say much about yet, but I think it will be funny.", // [EDIT]
    },
  ],
};

export const song = {
  heading: "Song of the month",
  label: "on repeat",
  // [EDIT] Swap spotifyId with your own track.
  title: "Evaluasi",
  artist: "Hindia",
  year: "2019",
  spotifyId: "5iezEsWCl1JIyvosnI7vx8",
  openUrl: "https://open.spotify.com/track/5iezEsWCl1JIyvosnI7vx8", // [EDIT]
};

export type FindMeItem = {
  label: string;
  href?: string; // omit for links that are text-only (Discord)
  note: string;
};

export const findMe: {
  heading: string;
  sub: string;
  items: FindMeItem[];
} = {
  heading: "Find me",
  sub: "pick the door that feels most comfortable",
  items: [
    {
      label: "Instagram",
      href: "https://instagram.com/galihrhgnwn", // [EDIT]
      note: "photos of food, sometimes my face.",
    },
    {
      label: "GitHub",
      href: "https://github.com/galihrhgnwn",
      note: "code I keep carefully.",
    },
    {
      label: "Discord",
      note: "I prefer talking here.",
    },
    {
      label: "Email",
      href: "mailto:mirhamgunawan@gmail.com", // [EDIT]
      note: "the most formal, but I read all of it.",
    },
  ],
};

export const footer = {
  note: "Made with patience, Ibarra Real Nova and Fragment Mono, and no template.",
  copyright: "© 2026 " + site.name,
};
