import coverExplorer from "../assets/cover-explorer.jpg";
import coverGarden from "../assets/cover-garden.jpg";
import coverClouds from "../assets/cover-clouds.jpg";
import coverMoon from "../assets/cover-moon.jpg";

/**
 * ─────────────────────────────────────────────────────────────
 *  BOOK CONFIGURATION — EDIT ME
 * ─────────────────────────────────────────────────────────────
 *  These are FICTIONAL DEMONSTRATION concepts only.
 *  Replace titles, copy, covers and purchase links with
 *  Christian's real published books.
 *
 *  Purchase links: leave `url` as an empty string ("") to show
 *  the polished "Purchase link coming soon" state.
 *  Example: { retailer: "Bookshop", url: "https://..." }
 * ─────────────────────────────────────────────────────────────
 */

export type PurchaseLink = {
  retailer: string;
  url: string; // "" = not configured yet
};

export type Book = {
  id: string;
  title: string;
  titleLines: string[]; // how the title breaks on the cover
  tagline: string;
  description: string;
  longDescription: string;
  ages: string;
  genre: string;
  themes: string[];
  cover: string;
  accent: string; // card / cover accent
  ink: string; // title ink color on cover
  titleStyle: "arc" | "stack" | "script" | "glow";
  sample: { heading: string; text: string }[];
  purchaseLinks: PurchaseLink[];
};

export const books: Book[] = [
  {
    id: "little-explorer",
    title: "The Little Explorer",
    titleLines: ["The Little", "Explorer"],
    tagline: "Every path leads somewhere wonderful.",
    description:
      "A colorful adventure about curiosity, discovery, and finding magic in unexpected places.",
    longDescription:
      "With a spyglass in hand and a loyal fox at their side, one small explorer sets out past the garden gate to find out what lies beyond the mushroom woods. Along the winding path they discover that the greatest adventures often begin with a single brave question: “I wonder what's over there?”",
    ages: "Ages 3–7 (placeholder)",
    genre: "Adventure",
    themes: ["Curiosity", "Courage", "Discovery"],
    cover: coverExplorer,
    accent: "#FFD66B",
    ink: "#263653",
    titleStyle: "stack",
    sample: [
      {
        heading: "Page 1",
        text: "Pip had a yellow coat, a very small backpack, and a very BIG question. “What's on the other side of the mushroom woods?”",
      },
      {
        heading: "Page 2",
        text: "Fennel the fox twitched his nose. Somewhere, far away, the hills were humming a song only explorers could hear.",
      },
      {
        heading: "Page 3",
        text: "So Pip lifted the spyglass, took one brave step… and then another… and the path began to curl like a ribbon toward the sky.",
      },
    ],
    purchaseLinks: [
      { retailer: "Amazon", url: "" },
      { retailer: "Barnes & Noble", url: "" },
      { retailer: "Bookshop.org", url: "" },
    ],
  },
  {
    id: "magical-garden",
    title: "The Magical Garden",
    titleLines: ["The Magical", "Garden"],
    tagline: "Friendship grows in the smallest places.",
    description:
      "A whimsical story about friendship, nature, and the wonders hidden in a garden.",
    longDescription:
      "Behind a tiny round door in the oldest tree, a hedgehog named Hazel hosts the most important tea party of the year. But when the garden lanterns begin to fade, Hazel and her friends must discover what truly makes a garden bloom: kindness, patience, and a little bit of magic.",
    ages: "Ages 4–8 (placeholder)",
    genre: "Friendship & Nature",
    themes: ["Friendship", "Nature", "Kindness"],
    cover: coverGarden,
    accent: "#C9B8F5",
    ink: "#FFF9EF",
    titleStyle: "script",
    sample: [
      {
        heading: "Page 1",
        text: "Every spring, when the dandelions began to float, Hazel the hedgehog polished her smallest teacups.",
      },
      {
        heading: "Page 2",
        text: "“Bunny, the lanterns are flickering!” she whispered. “Without them, the flowers will forget how to glow.”",
      },
      {
        heading: "Page 3",
        text: "So the friends tiptoed through the tall tulips, asking every bee and beetle the very same question: “What makes a garden happy?”",
      },
    ],
    purchaseLinks: [
      { retailer: "Amazon", url: "" },
      { retailer: "Barnes & Noble", url: "" },
      { retailer: "Bookshop.org", url: "" },
    ],
  },
  {
    id: "beyond-the-clouds",
    title: "The Adventures Beyond the Clouds",
    titleLines: ["The Adventures", "Beyond the Clouds"],
    tagline: "Dream higher than the sky.",
    description:
      "A dreamy illustrated adventure that encourages children to imagine a world beyond the ordinary.",
    longDescription:
      "One windy evening, a little girl and her cloud-soft bear cub climb aboard a striped balloon and drift up, up, up to a kingdom made entirely of clouds. There, among floating islands and paper birds, they learn that imagination can carry you anywhere, and always brings you safely home.",
    ages: "Ages 3–6 (placeholder)",
    genre: "Fantasy",
    themes: ["Imagination", "Dreams", "Wonder"],
    cover: coverClouds,
    accent: "#9BD8F4",
    ink: "#263653",
    titleStyle: "arc",
    sample: [
      {
        heading: "Page 1",
        text: "The wind knocked on Luna's window three times. Tap. Tap. Tap. “Come and play,” it seemed to say.",
      },
      {
        heading: "Page 2",
        text: "Bramble the bear cub was already sitting in the little wooden boat, holding the balloon string with both paws.",
      },
      {
        heading: "Page 3",
        text: "Up past the rooftops, up past the birds, up where the clouds were as soft as pillows and as tall as castles…",
      },
    ],
    purchaseLinks: [
      { retailer: "Amazon", url: "" },
      { retailer: "Barnes & Noble", url: "" },
      { retailer: "Bookshop.org", url: "" },
    ],
  },
  {
    id: "moonlight-lighthouse",
    title: "The Moonlight Lighthouse",
    titleLines: ["The Moonlight", "Lighthouse"],
    tagline: "A gentle glow for sleepy eyes.",
    description:
      "A cozy bedtime story about a sleepy owl, a friendly moon, and the light that guides us home.",
    longDescription:
      "Every night, Ollie the owl reads stories to the sea from the top of his little lighthouse. But tonight the moon is missing from the sky! A soothing, lyrical bedtime tale about comfort, courage in the dark, and the friends who help us shine.",
    ages: "Ages 2–6 (placeholder)",
    genre: "Bedtime Story",
    themes: ["Comfort", "Bedtime", "Belonging"],
    cover: coverMoon,
    accent: "#263653",
    ink: "#FFD66B",
    titleStyle: "glow",
    sample: [
      {
        heading: "Page 1",
        text: "On a rocky little island, in a rocky little tower, lived an owl named Ollie who wore a knitted hat.",
      },
      {
        heading: "Page 2",
        text: "Each night he lit his lantern, opened his book, and read aloud to the waves, until they hushed and swayed and slept.",
      },
      {
        heading: "Page 3",
        text: "But tonight, the sky was quiet. The stars were whispering. And the moon… the moon was nowhere to be found.",
      },
    ],
    purchaseLinks: [
      { retailer: "Amazon", url: "" },
      { retailer: "Barnes & Noble", url: "" },
      { retailer: "Bookshop.org", url: "" },
    ],
  },
];

/** General site settings — replace with Christian's real details. */
export const site = {
  authorName: "Christian",
  email: "hello@your-domain.com", // placeholder
  socials: [
    { label: "Instagram", url: "" },
    { label: "Facebook", url: "" },
    { label: "YouTube", url: "" },
  ],
};
