import { Link } from "react-router-dom";
import profile from '../../../assets/img/profile/1.png'
import iconPencil from '../../../assets/img/icon/pensil.svg'
const Sidebar = (props) => {
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
              <label htmlFor="sidebar-collapse1" className="d-flex align-items-center">
                <div className="sidebar-menu-icon-background bg-light-blue">
                  <img className="sidebar-menu-icon" src="../asset/img/icon/home.svg" alt="" />
                </div>
                Store
                <span className="arrow-menu ms-auto"></span>
              </label>
              <ul className="sidebar-submenu" id="submenu1">
                <li>
                  <a href="./profileSeller.html">Store profile</a>
                </li>
              </ul>
            </li>
            <li>
              <input type="checkbox" className="sidebar-collapse" id="sidebar-collapse2" />
              <label htmlFor="sidebar-collapse2" className="d-flex align-items-center text-black-50">
                <div className="sidebar-menu-icon-background bg-dark-orange">
                  <img className="sidebar-menu-icon" src="../asset/img/icon/package.svg" alt="" />
                </div>
                Product
                <span className=" arrow-menu ms-auto"></span>
              </label>
              <ul className="sidebar-submenu" id="submenu2">
                <li>
                  <Link to="/seller/myproducts" className="text-black-50">
                    My Products
                  </Link>
                </li>
                <li>
                  <Link to="/seller/sellingproducts" className="text-black-50">
                    Selling products
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <input type="checkbox" className="sidebar-collapse" id="sidebar-collapse3" />
              <label htmlFor="sidebar-collapse3" className="d-flex align-items-center text-black-50">
                <div className="sidebar-menu-icon-background bg-pink">
                  <img className="sidebar-menu-icon" src="../asset/img/icon/shopping_cart_.svg" alt="" />
                </div>{' '}
                Order
                <span className=" arrow-menu ms-auto"></span>
              </label>
              <ul className="sidebar-submenu" id="submenu2">
                <li>
                  <a href="./myOrderSeller.html" className="text-black-50">
                    My order
                  </a>
                </li>
                <li>
                  <a href="./orderCancel.html" className="text-black-50">
                    Order cancel
                  </a>
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
