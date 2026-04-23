// ProjectFeature.jsx. 55/45 image + copy, alternating
function ProjectFeature({ reverse, eyebrow, title, body, specs, tone = 'a' }) {
  const slot = tone === 'powerview' ? 'feature-powerview' : tone === 'portfolio' ? 'feature-portfolio' : null;
  const photo = (slot && window.PHOTOS && window.PHOTOS[slot]) || { src: '', alt: '' };
  return (
    <section className={`bpb-feature ${reverse ? 'is-reverse' : ''}`}>
      <div className={`bpb-ph bpb-ph--${tone} bpb-feature-media`}>
        {photo.src ? (
          <img src={photo.src} alt={photo.alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : (
          <span className="bpb-ph-label">Editorial · installed work</span>
        )}
      </div>
      <div className="bpb-feature-copy">
        <div className="bpb-eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
        <p>{body}</p>
        <dl className="bpb-specs">
          {specs.map((s, i) => (
            <React.Fragment key={i}>
              <dt>{s.k}</dt><dd>{s.v}</dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </section>
  );
}
window.ProjectFeature = ProjectFeature;
