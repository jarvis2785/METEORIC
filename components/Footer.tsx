import BomberIcon from "./BomberIcon";

export default function Footer() {
  return (
    <footer className="border-t border-edge py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <BomberIcon className="h-8 w-8 rounded-lg" />
          <span className="font-heading text-base font-bold tracking-tight text-ivory">
            METEORIC
          </span>
        </a>
        <p className="text-xs text-fog">&copy; 2026 Meteoric Boost</p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/moksh.vasant/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-fog transition-colors hover:text-gold"
          >
            @moksh.vasant
          </a>
          <a
            href="https://www.instagram.com/meteoric.boost/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-fog transition-colors hover:text-gold"
          >
            @meteoric.boost
          </a>
        </div>
      </div>
    </footer>
  );
}
