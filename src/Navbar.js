const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <a className="navbar-brand abs mx-auto" href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" width="" height="40" alt="" ></img>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="/"></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/"></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/"></a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar;