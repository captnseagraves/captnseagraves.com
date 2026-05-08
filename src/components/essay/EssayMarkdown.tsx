import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PullQuote from "./PullQuote";

interface Props {
  body: string;
}

export default function EssayMarkdown({ body }: Props) {
  return (
    <div className="mt-12 max-w-2xl text-[1.0625rem] leading-[1.75] text-[var(--color-text)]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: () => null,
          h2: ({ children }) => (
            <h2 className="mt-14 mb-5 text-2xl font-semibold text-[var(--color-text)]">
              {children}
            </h2>
          ),
          p: ({ children }) => (
            <p className="my-5 text-[var(--color-text-muted)]">{children}</p>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] underline underline-offset-4 decoration-[var(--color-accent)]/30 transition-colors"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="my-6 ml-5 list-disc space-y-2 text-[var(--color-text-muted)] marker:text-[var(--color-accent)]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-6 ml-5 list-decimal space-y-2 text-[var(--color-text-muted)]">
              {children}
            </ol>
          ),
          blockquote: ({ children }) => <PullQuote>{children}</PullQuote>,
          img: ({ src, alt }) => (
            <figure className="my-10">
              <img
                src={src}
                alt={alt ?? ""}
                className="rounded-xl border border-[var(--color-border)]"
                loading="lazy"
              />
              {alt ? (
                <figcaption className="mt-3 text-xs uppercase tracking-wider text-[var(--color-text-dim)]">
                  {alt}
                </figcaption>
              ) : null}
            </figure>
          ),
          code: ({ children }) => (
            <code className="rounded bg-[var(--color-bg-card)] px-1.5 py-0.5 text-[0.95em] text-[var(--color-accent)]">
              {children}
            </code>
          ),
          hr: () => (
            <hr className="my-12 border-t border-[var(--color-border)]" />
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-[var(--color-text)]">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-[var(--color-text)]">{children}</em>
          ),
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
}
