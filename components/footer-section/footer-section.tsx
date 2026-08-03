export function FooterSection() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo" aria-label="SS Power Pros home">
            SS Power Pros
          </a>
          <p>Electrical, AC, plumbing and house maintenance from one responsive contractor.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h2>Navigate</h2>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#contact">Book a call</a>
            </li>
          </ul>
        </nav>

        <div className="footer__contact">
          <h2>Contact</h2>
          <a href="tel:+1234567890">+1 (234) 567-890</a>
          <a href="mailto:hello@sspowerpros.com">hello@sspowerpros.com</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© 2026 SS Power Pros. All rights reserved.</p>
        <p>
          Website by{' '}
          <a href="https://www.vish.studio" target="_blank" rel="noreferrer">
            VISH studio
          </a>
        </p>
      </div>
    </footer>
  );
}
