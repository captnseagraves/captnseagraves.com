import Section from "../layout/Section";
import { recognition } from "../../data/recognition";

export default function Recognition() {
  return (
    <Section id="recognition">
      <h2 className="mb-6 text-2xl font-semibold">
        <span className="gradient-text">Recognition & Proof</span>
      </h2>
      <div className="space-y-6">
        {recognition.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-text-dim)] mb-3">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item, i) => (
                <li key={i} className="text-[var(--color-text-muted)] leading-relaxed">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--color-accent)] transition-colors"
                    >
                      {item.text} &rarr;
                    </a>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
