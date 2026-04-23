// ReviewsRail.jsx: editorial quotes row
// All three quote slots are explicit placeholders. Swap with real 5-star Google reviews before any client-facing use.
function ReviewsRail() {
  const reviews = [
    { q: '[PLACEHOLDER REVIEW 1: to be swapped with a real 5-star Google review before client-facing use.]', a: '[Customer name]', loc: '[City], ID · Google' },
    { q: '[PLACEHOLDER REVIEW 2: to be swapped with a real 5-star Google review before client-facing use.]', a: '[Customer name]', loc: '[City], ID · Google' },
    { q: '[PLACEHOLDER REVIEW 3: to be swapped with a real 5-star Google review before client-facing use.]', a: '[Customer name]', loc: '[City], ID · Google' },
  ];
  return (
    <section className="bpb-reviews">
      <div className="bpb-section-head bpb-section-head--center">
        <div className="bpb-eyebrow">Reviews · 5.0 average · 24 total · Google</div>
        <h2>Referred by neighbors,<br />reviewed by homeowners.</h2>
      </div>
      <div className="bpb-reviews-row">
        {reviews.map((r, i) => (
          <figure key={i} className="bpb-review" data-placeholder="true">
            <div className="bpb-review-stars">★★★★★</div>
            <blockquote>{r.q}</blockquote>
            <figcaption>
              <strong>{r.a}</strong>
              <span>{r.loc}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
window.ReviewsRail = ReviewsRail;
