import { NavLink, useLocation } from 'react-router-dom';
import profile from '../../../assets/img/profile/1.png';
import iconPencil from '../../../assets/img/icon/pensil.svg';
import iconHome from '../../../assets/img/icon/home.svg';
import iconPackage from '../../../assets/img/icon/package.svg';
import iconCart from '../../../assets/img/icon/shopping_cart_.svg';
const Sidebar = (props) => {
  const location = useLocation();
  return (
    <div className="d-flex wrapper flex-nowrap">
      <aside className={`sidebar ps-5 flex-column ${props.sidebarActive ? 'sidebar-active' : ''}`}>
        <div className="user-profile d-flex flex-wrap mb-5">
          <img src={profile} className="user-profile-img" alt="user-profile-img" />
          <div className="d-flex flex-column ps-3 pt-1">
            <div className="text-black-16px font-semi-bold">Johanes Mikael</div>
            <div className="text-black-14px text-black-50">
              <img src={iconPencil} alt="" /> Ubah profile
            </div>
          </div>
        </div>
        <div>
          <ul className="sidebar-menu">
            <li>
              <input type="checkbox" className="sidebar-collapse" id="sidebar-collapse1" />
              <label
                htmlFor="sidebar-collapse1"
                className={`d-flex align-items-center ${location.pathname === '/seller/profilestore' ? 'active' : ''}`}
              >
                <div className="sidebar-menu-icon-background bg-light-blue">
                  <img className="sidebar-menu-icon" src={iconHome} alt="" />
                </div>
                Store
                <span className="arrow-menu ms-auto"></span>
              </label>
              <ul className="sidebar-submenu" id="submenu1">
                <li>
                  <NavLink activeClassName="active" to="/seller/profilestore">
                    Store profile
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <input type="checkbox" className="sidebar-collapse" id="sidebar-collapse2" />
              <label
                htmlFor="sidebar-collapse2"
                className={`d-flex align-items-center ${
                  location.pathname === '/seller/myproducts' || location.pathname === '/seller/sellingproducts'
                    ? 'active'
                    : ''
                }`}
              >
                <div className="sidebar-menu-icon-background bg-dark-orange">
                  <img className="sidebar-menu-icon" src={iconPackage} alt="" />
                </div>
                Product
                <span className=" arrow-menu ms-auto"></span>
              </label>
              <ul className="sidebar-submenu" id="submenu2">
                <li>
                  <NavLink activeClassName="active" to="/seller/myproducts">
                    My Products
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/seller/sellingproducts">
                    Selling products
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <input type="checkbox" className="sidebar-collapse" id="sidebar-collapse3" />
              <label
                htmlFor="sidebar-collapse3"
                className={`d-flex align-items-center ${
                  location.pathname === '/seller/myorder' || location.pathname === '/seller/myordercancel'
                    ? 'active'
                    : ''
                }`}
              >
                <div className="sidebar-menu-icon-background bg-pink">
                  <img className="sidebar-menu-icon" src={iconCart} alt="" />
                </div>{' '}
                Order
                <span className=" arrow-menu ms-auto"></span>
              </label>
              <ul className="sidebar-submenu" id="submenu2">
                <li>
                  <NavLink activeClassName="active" to="/seller/myorder">
                    My order
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/seller/myordercancel">
                    Order cancel
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
      <div className={`main-panel ${props.sidebarActive ? 'w-100' : ''}`}>{props.children}</div>
    </div>
  );
};

export default Sidebar;
