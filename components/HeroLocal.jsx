// HeroLocal.jsx
// Local hero override (NOT a bundle modification).
// Fixes from the v1 second-opinion review:
//   1. H1 line break: "Hunter" + "Douglas" kept together via &nbsp;.
//      The H1 now breaks after "showroom," on line 1 → line 2.
//   2. Lead copy: "Delivered" → "Specified". The 3-to-5-week factory
//      order below means nothing is "delivered" in the consultation;
//      what is actually delivered in that visit is product spec, order,
//      and measurement.
//   4. Eyebrow + secondary link contrast: eyebrow at full bone opacity
//      with slightly reduced tracking; the secondary-link border lifted
//      to 0.6 via a local className.
// If the bundle's Hero is ever updated to match, drop this file.
function HeroLocal() {
  const photo = (window.PHOTOS && window.PHOTOS.hero) || { src: '', alt: '' };
  return (
    <section className="bpb-hero" id="hero">
      <div className="bpb-hero-media" aria-hidden={photo.src ? undefined : "true"}>
        {photo.src ? (
          <div className="bpb-ph bpb-ph--hero">
            <img src={photo.src} alt={photo.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        ) : (
          <div className="bpb-ph bpb-ph--hero">
            <span className="bpb-ph-label">Editorial room · full-bleed placeholder</span>
          </div>
        )}
        <div className="bpb-hero-scrim" />
      </div>
      <div className="bpb-hero-inner">
        <div className="bpb-eyebrow bpb-eyebrow--light bpb-eyebrow--light-aa">
          Hunter Douglas Priority Dealer · Treasure Valley
        </div>
        <h1 className="bpb-display bpb-display--balance">
          The Hunter&nbsp;Douglas showroom, in your living room.
        </h1>
        <p className="bpb-hero-lead">
          PowerView automation, factory-trained installation, and measurement to 1/16 inch. Specified in a single in-home consultation.
        </p>
        <div className="bpb-hero-cta">
          <a href="#consult" className="bpb-btn bpb-btn--primary">Schedule Your Free In-Home Consultation</a>
          <a href="#work" className="bpb-link-arrow bpb-link-arrow--aa">See our work →</a>
        </div>
      </div>
    </section>
  );
}
window.HeroLocal = HeroLocal;
