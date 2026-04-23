// Hero.jsx: full-bleed editorial hero
function Hero() {
  return (
    <section className="bpb-hero">
      <div className="bpb-hero-media" aria-hidden="true">
        <div className="bpb-ph bpb-ph--hero">
          <span className="bpb-ph-label">Editorial room · full-bleed placeholder</span>
        </div>
        <div className="bpb-hero-scrim" />
      </div>
      <div className="bpb-hero-inner">
        <div className="bpb-eyebrow bpb-eyebrow--light">Hunter Douglas Priority Dealer · Treasure Valley</div>
        <h1 className="bpb-display">
          The Hunter Douglas showroom,<br />
          in your living room.
        </h1>
        <p className="bpb-hero-lead">
          PowerView automation, factory-trained installation, and measurement to 1/16 inch. Delivered in a single in-home consultation.
        </p>
        <div className="bpb-hero-cta">
          <a href="#consult" className="bpb-btn bpb-btn--primary">Schedule Your Free In-Home Consultation</a>
          <a href="#work" className="bpb-link-arrow">See our work →</a>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
