export interface SkillCategory {
  title: string;
  skills: { name: string; detail?: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Engineering",
    skills: [
      { name: "Solidity", detail: "7+ years, audited protocols to mainnet" },
      { name: "TypeScript / JavaScript", detail: "8+ years, full-stack" },
      { name: "Python", detail: "Django, backend, AI integrations" },
      { name: "React / React Native", detail: "Web + cross-platform mobile" },
      { name: "Node.js", detail: "Backend services, APIs" },
      { name: "PostgreSQL" },
      { name: "Foundry", detail: "Smart contract testing" },
      { name: "AWS / Vercel" },
    ],
  },
  {
    title: "AI / Agent Systems",
    skills: [
      { name: "Production AI Agents", detail: "Bankless Twitter agent on Eliza" },
      { name: "Claude / Anthropic", detail: "Claude Code, Claude API, MCP" },
      { name: "OpenAI", detail: "API integration, GPT models" },
      { name: "Prompt Engineering" },
      { name: "Agent Architecture", detail: "Tone, personality, context management" },
      { name: "HITL Evaluation", detail: "Human-in-the-loop frameworks" },
    ],
  },
  {
    title: "Product & Operations",
    skills: [
      { name: "Zero-to-One", detail: "5 companies built from scratch" },
      { name: "Fundraising", detail: "$4.2M raised, investor relations" },
      { name: "P&L Management", detail: "Burn rate, payroll, reporting" },
      { name: "Team Building", detail: "Scaled teams from 1 to 12" },
      { name: "Go-to-Market", detail: "Consumer and B2B" },
      { name: "User Research", detail: "Interviews, surveys, usability" },
    ],
  },
  {
    title: "Communication & Leadership",
    skills: [
      { name: "Executive Communication", detail: "30+ C-suite teams at BCG" },
      { name: "Community Building", detail: "200+ member ETHSecurity community" },
      { name: "Public Speaking", detail: "DevCon 4 panel, ETHBerlin" },
      { name: "Protocol Design", detail: "ERC-1337, HSLA whitepaper" },
    ],
  },
];
