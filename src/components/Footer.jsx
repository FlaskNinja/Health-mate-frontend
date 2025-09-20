import "../footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Branding */}
        <div className="footer-left">
          <h3 className="footer-logo">HealthMate</h3>
          <p>Your trusted digital health companion.</p>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-middle">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div className="footer-right">
          <h4>Contact</h4>
          <p>Email: support@healthmate.com</p>
          <p>Phone: +234 806 307 1650</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HealthMate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
