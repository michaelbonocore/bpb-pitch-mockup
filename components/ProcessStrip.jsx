// ProcessStrip.jsx. 4-step how-it-works
function ProcessStrip() {
  const steps = [
    { n: '01', t: 'In-home consultation', d: 'Justin visits with full samples. No showroom trip required.' },
    { n: '02', t: 'Measurement to 1/16"', d: 'Openings measured with Hunter Douglas-certified precision.' },
    { n: '03', t: 'Factory order', d: 'Direct from Hunter Douglas. Lead time 3–5 weeks, typically.' },
    { n: '04', t: 'Factory-trained install', d: 'Clean, calibrated, and walked through room-by-room.' },
  ];
  return (
    <section className="bpb-section bpb-section--quiet" id="process">
      <div className="bpb-section-head">
        <div className="bpb-eyebrow">How we work</div>
        <h2>Four steps. One clean install.</h2>
      </div>
      <ol className="bpb-process">
        {steps.map((s) => (
          <li key={s.n} className="bpb-process-step">
            <div className="bpb-process-n">{s.n}</div>
            <h4>{s.t}</h4>
            <p>{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
window.ProcessStrip = ProcessStrip;
