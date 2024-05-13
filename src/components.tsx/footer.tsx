import { useAppSelector } from "../redux/hooks";

function Footer() {
  return (
    <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p className="col-md-4 mb-0 footer-text1">
        © {new Date().getFullYear()} Stuff
      </p>

      <a
        href="/"
        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto"
      >
        <svg className="bi me-2" width="40" height="32"></svg>
      </a>

      <ul className="nav col-md-4 justify-content-end mr-3">
        <li className="nav-item">
          <a href="/home" className="nav-link px-2 footer-text">
            Main Page
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 footer-text">
            Categories
          </a>
        </li>
        {useAppSelector((state) => state.user.isLoged) && (
          <li className="nav-item">
            <a href="/user" className="nav-link px-2 footer-text">
              My Account
            </a>
          </li>
        )}
        {!useAppSelector((state) => state.user.isLoged) && (
          <li className="nav-item">
            <a href="/auth" className="nav-link px-2 footer-text">
              Login
            </a>
          </li>
        )}
        <li className="nav-item">
          <a href="/cart" className="nav-link px-2 footer-text">
            Cart
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
