import logo from "../assets/logo.jpeg";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo Left */}
      <div className="logo-container">
        <img src={logo} alt="Kurush Logo" className="nav-logo" />
      </div>

      {/* Links Right */}
      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#product">Product</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
