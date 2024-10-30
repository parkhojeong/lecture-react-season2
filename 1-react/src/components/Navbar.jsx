import * as MyRouter from "../lib/MyRouter";

const Navbar = ({path}) => (
  <nav className="Navbar">
    <MyRouter.Link className={path === '/' ? "active" : ""} to="/">
      메뉴목록
    </MyRouter.Link>
    <MyRouter.Link className={path === '/order' ? 'active': ''} to="/order">주문내역</MyRouter.Link>
  </nav>
);

export default MyRouter.withRouter(Navbar);
