// TrustBar.jsx: thin strip of trust signals
function TrustBar() {
  const items = [
    { k: 'Priority Dealer', v: "Hunter Douglas' top dealer tier" },
    { k: '15+ years', v: 'Hunter Douglas specialization' },
    { k: '5.0 ★ · 24 reviews', v: 'Google' },
    { k: 'Treasure Valley', v: 'Boise · Meridian · Eagle · Nampa' },
  ];
  return (
    <section className="bpb-trust">
      <div className="bpb-trust-inner">
        {items.map((i, idx) => (
          <div key={idx} className="bpb-trust-item">
            <div className="bpb-trust-k">{i.k}</div>
            <div className="bpb-trust-v">{i.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.TrustBar = TrustBar;
