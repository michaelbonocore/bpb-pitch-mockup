// CTABanner.jsx: full-bleed bronze, the one primary CTA
function CTABanner() {
  return (
    <section className="bpb-cta-banner" id="consult">
      <div className="bpb-cta-banner-inner">
        <h2>We bring the showroom to your living room.</h2>
        <p>
          In-home consultations across the Treasure Valley. Measured to 1/16 inch, installed by a Hunter Douglas factory-trained specialist.
        </p>
        <a className="bpb-btn bpb-btn--primary-inverse" href="#">
          Schedule Your Free In-Home Consultation
        </a>
        <div className="bpb-cta-subtle">
          Or call <a href="tel:+12088088676">208.808.8676</a>
        </div>
      </div>
    </section>
  );
}
window.CTABanner = CTABanner;
