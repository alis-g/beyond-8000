export default function Header() {
    return(
          <header className="header">
    <div className="container nav">
      <a href="#home" className="logo">
        <span className="logo-mark">▲</span>
        <span>
          Beyond 8000<span className="gold">.</span>
        </span>
      </a>
      <nav className="navigation">
        <a href="#home">Home</a>
        <a href="#expeditions">Expeditions</a>
        <a href="#my-expeditions">My Expeditions</a>
      </nav>
      <div className="nav-actions">
        <a href="#login" className="btn btn-outline">
          Login
        </a>
        <a href="#register" className="btn btn-primary">
          Join us
        </a>
      </div>
    </div>
  </header>
     );
}