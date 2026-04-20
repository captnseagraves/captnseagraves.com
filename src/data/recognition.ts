export interface RecognitionItem {
  category: string;
  items: { text: string; url?: string }[];
}

export const recognition: RecognitionItem[] = [
  {
    category: "Fundraising",
    items: [
      {
        text: "$4.2M raised from Coinbase Ventures, Variant Fund, Fintech Collective, Robot Ventures, Polygon Ventures, The LAO, Flamingo DAO",
      },
    ],
  },
  {
    category: "Standards & Publications",
    items: [
      {
        text: "Co-author, ERC-1337 — Ethereum subscription payments standard",
        url: "https://eips.ethereum.org/EIPS/eip-1337",
      },
      {
        text: "Harberger Style Lending Auctions Whitepaper",
        url: "https://whitepaper.niftyapes.money/",
      },
    ],
  },
  {
    category: "Speaking & Community",
    items: [
      { text: 'Led "Current State of Security" panel at DevCon 4' },
      { text: "Organized ETHBerlin Security Unconference (2018)" },
      { text: "Co-founded ETHSecurity — 200+ professionals, ECF grant recipient" },
      { text: "Authored ETHSecurity Report — 30+ interviews with top security firms" },
    ],
  },
  {
    category: "Awards",
    items: [
      {
        text: 'Winner, BCG Digital Ventures dAppathon (2017) — "You\'ve Got Eth"',
      },
    ],
  },
  {
    category: "Board Service",
    items: [{ text: "Board Member, ICDevs (nonprofit) — 2021 to Present" }],
  },
];
