// Footer.jsx: warm dark footer
function Footer() {
  return (
    <footer className="bpb-footer">
      <div className="bpb-footer-inner">
        <div className="bpb-footer-brand">
          <img src="assets/logo-mark.webp" alt="" className="bpb-footer-mark" />
          <div>
            <div className="bpb-footer-name">Boise Premier Blinds</div>
            <div className="bpb-footer-tag">Hunter Douglas Priority Dealer</div>
          </div>
        </div>
        <div className="bpb-footer-cols">
          <div>
            <h5>Products</h5>
            <a>Shades</a><a>Shutters</a><a>Drapery</a><a>PowerView</a>
          </div>
          <div>
            <h5>Service area</h5>
            <span>Boise</span><span>Meridian</span><span>Eagle</span><span>Nampa</span><span>Kuna · Star · Garden City</span>
          </div>
          <div>
            <h5>Contact</h5>
            <a href="tel:+12088088676">208.808.8676</a>
            <a>justin@boisepremierblinds.com</a>
            <span>By appointment only</span>
          </div>
        </div>
      </div>
      <div className="bpb-footer-base">
        <span>© 2026 Boise Premier Blinds. All rights reserved.</span>
        <span>Hunter Douglas product names are trademarks of Hunter Douglas Inc.</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
