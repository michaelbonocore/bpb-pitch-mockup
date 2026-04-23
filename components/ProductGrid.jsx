// ProductGrid.jsx: three editorial product cards
function ProductGrid() {
  const products = [
    { name: 'Shades', detail: 'Duette, Silhouette, Luminette · PowerView ready', tone: 'a' },
    { name: 'Shutters', detail: 'Heritance hardwood · NewStyle hybrid', tone: 'b' },
    { name: 'Drapery', detail: 'Design Studio custom · motorized track', tone: 'c' },
  ];
  return (
    <section className="bpb-section" id="products">
      <div className="bpb-section-head">
        <div className="bpb-eyebrow">What we install</div>
        <h2>The full Hunter Douglas catalog,<br />specified for your rooms.</h2>
      </div>
      <div className="bpb-product-grid">
        {products.map((p, i) => (
          <a key={i} className="bpb-product-card" href="#">
            <div className={`bpb-ph bpb-ph--${p.tone}`}>
              <span className="bpb-ph-label">Editorial · {p.name}</span>
            </div>
            <div className="bpb-product-meta">
              <h3>{p.name}</h3>
              <p>{p.detail}</p>
              <span className="bpb-link-arrow">Explore the line →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
window.ProductGrid = ProductGrid;
