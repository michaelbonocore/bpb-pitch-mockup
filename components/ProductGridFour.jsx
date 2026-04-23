// ProductGridFour.jsx
// Local override (NOT a modification of the bundle's ProductGrid.jsx).
// Per the homepage spec, the ProductGrid needs four editorial cards:
// Blinds, Shades, Shutters, Drapery. The bundle's ProductGrid ships with
// three (Shades, Shutters, Drapery), so we compose a sibling component here
// that reuses the exact same CSS classes. If the bundle's ProductGrid is
// later expanded to four, drop this file and wire the original back in.
function ProductGridFour() {
  const products = [
    { name: 'Blinds',   slot: 'product-blinds',   detail: 'Parkland hardwood · EverWood alternative · Modern Precious Metals', tone: 'a' },
    { name: 'Shades',   slot: 'product-shades',   detail: 'Duette, Silhouette, Luminette · PowerView ready',                    tone: 'b' },
    { name: 'Shutters', slot: 'product-shutters', detail: 'Heritance hardwood · NewStyle hybrid',                                tone: 'c' },
    { name: 'Drapery',  slot: 'product-drapery',  detail: 'Design Studio custom · motorized track',                              tone: 'a' },
  ];
  return (
    <section className="bpb-section bpb-section--products" id="products">
      <div className="bpb-section-head">
        <div className="bpb-eyebrow">What we install</div>
        <h2>The full Hunter Douglas catalog,<br />specified for your rooms.</h2>
      </div>
      <div className="bpb-product-grid bpb-product-grid--four">
        {products.map((p, i) => {
          const photo = (window.PHOTOS && window.PHOTOS[p.slot]) || { src: '', alt: '' };
          return (
            <a key={i} className="bpb-product-card" href="#">
              <div className={`bpb-ph bpb-ph--${p.tone}`}>
                {photo.src ? (
                  <img src={photo.src} alt={photo.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                ) : (
                  /* Eyebrow tag wrapped in a scrim plate so small-text AA
                     contrast is preserved over every gradient tint. */
                  <span className="bpb-ph-label bpb-ph-label--aa">Editorial · {p.name}</span>
                )}
              </div>
              <div className="bpb-product-meta">
                <h3>{p.name}</h3>
                <p>{p.detail}</p>
                <span className="bpb-link-arrow">Explore the line →</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
window.ProductGridFour = ProductGridFour;
