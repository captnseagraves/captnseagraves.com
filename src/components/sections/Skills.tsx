import Section from "../layout/Section";
import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <h2 className="mb-6 text-2xl font-semibold">
        <span className="gradient-text">Skills</span>
      </h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((cat) => (
          <div key={cat.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-text-dim)] mb-4">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  title={skill.detail}
                  className="chip cursor-default hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
