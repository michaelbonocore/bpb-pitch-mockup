// AboutStrip.jsx: Justin Cliff, owner
function AboutStrip() {
  return (
    <section className="bpb-about" id="about">
      <div className="bpb-about-media">
        <img src="assets/justin-cliff.webp" alt="Justin Cliff, owner of Boise Premier Blinds" />
      </div>
      <div className="bpb-about-copy">
        <div className="bpb-eyebrow">The owner</div>
        <h2>Justin Cliff: fifteen years in Hunter Douglas.</h2>
        <p>
          Before Boise Premier Blinds, Justin specialized in Hunter Douglas at Ethan Allen for over fifteen years. The kind of product knowledge that comes from measuring thousands of openings and installing every line in the catalog.
        </p>
        <p className="bpb-about-quote" data-placeholder="true">
          [PLACEHOLDER QUOTE: draft quote slot. To be written with Justin and approved by him before publication. Never present this as a live statement.]
        </p>
        <div className="bpb-about-sign">Justin Cliff · Owner, Boise Premier Blinds</div>
      </div>
    </section>
  );
}
window.AboutStrip = AboutStrip;
