// Header.jsx: top nav
// Rules: one primary CTA, phone as text link, backdrop-blur only when scrolled
function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  React.useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);
  return (
    <>
    <header className={`bpb-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="bpb-brand" href="#">
        <img src="assets/logo-horizontal.png" alt="Boise Premier Blinds" />
      </a>
      <nav className="bpb-nav">
        <a href="#products">Products</a>
        <a href="#work">Our work</a>
        <a href="#process">Process</a>
        <a href="#about">About</a>
      </nav>
      <div className="bpb-header-right">
        <a className="bpb-phone" href="tel:+12088088676">208.808.8676</a>
        <a className="bpb-btn bpb-btn--primary bpb-btn--sm" href="#consult">Schedule Your Free In-Home Consultation</a>
      </div>
      <button
        type="button"
        className="bpb-hamburger"
        aria-label="Open menu"
        aria-expanded={menuOpen}
        aria-controls="bpb-mobile-nav"
        onClick={() => setMenuOpen(true)}
      >
        <span></span><span></span><span></span>
      </button>
    </header>
    <div
      id="bpb-mobile-nav"
      className={`bpb-mobile-nav ${menuOpen ? 'is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false); }}
    >
      <div className="bpb-mobile-nav-panel">
        <button
          type="button"
          className="bpb-mobile-close"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >×</button>
        <nav className="bpb-mobile-links" onClick={() => setMenuOpen(false)}>
          <a href="#products">Products</a>
          <a href="#work">Our work</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
        </nav>
        <div className="bpb-mobile-foot">
          <a className="bpb-mobile-phone" href="tel:+12088088676">208.808.8676</a>
          <a className="bpb-btn bpb-btn--primary bpb-mobile-cta" href="#consult" onClick={() => setMenuOpen(false)}>
            Schedule Your Free In-Home Consultation
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
window.Header = Header;
