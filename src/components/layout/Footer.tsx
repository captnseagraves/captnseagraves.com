export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12 text-center text-sm text-[var(--color-text-dim)]">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex justify-center gap-6 mb-4">
          <a href="mailto:k.s.seagraves@gmail.com" className="hover:text-[var(--color-text)] transition-colors">Email</a>
          <a href="https://linkedin.com/in/kevinseagraves" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text)] transition-colors">LinkedIn</a>
          <a href="https://github.com/captnseagraves" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text)] transition-colors">GitHub</a>
          <a href="https://x.com/captnseagraves" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text)] transition-colors">X</a>
        </div>
        <p>Kevin Seagraves &middot; Boulder, CO</p>
      </div>
    </footer>
  );
}
