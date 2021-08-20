import logo from "../logo1.png";

export const Nav = () => (
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <div className="col-2">
        <img src={logo} alt="" width="140" height="100" />
      </div>
      <div className="col-10">
        <h2>Pharma</h2>
      </div>
    </div>
  </nav>
);
