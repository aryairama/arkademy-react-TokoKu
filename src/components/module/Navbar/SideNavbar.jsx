import { Link, useHistory } from 'react-router-dom';
// import bell from '../../../assets/img/icon/lonceng.svg';
// import mail from '../../../assets/img/icon/mail.svg';
import cart from '../../../assets/img/icon/keranjang.svg';
import imgProfile from '../../../assets/img/profile/1.png';
import iconNavbar from '../../../assets/img/icon/list.svg';
import { Button } from '../../base';
import { useDispatch } from 'react-redux';
import { logout } from '../../../configs/redux/actions/userAction';
import { useSelector } from 'react-redux';

const SideNavbar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.user);
  return (
    <div className="row flex-grow-1 flex-wrap">
      <div className="offset-md-2 col-10 d-flex justify-content-md-end justify-content-start align-items-center">
        <Link to="/mybag" className="btn-icon mx-3">
          <img src={cart} alt="icon-bell" />
        </Link>
        {/* <Link to="/mybag" className="btn-icon mx-3">
          <img src={bell} alt="icon-bell" />
        </Link>
        <Link to="/mybag" className="btn-icon mx-3">
          <img src={mail} alt="icon-mail" />
        </Link> */}
        <div className="btn-icon mx-3 dropdown">
          <img
            data-bs-toggle="dropdown"
            width="32px"
            height="32px"
            className="rounded-circle profile d-block"
            src={user.avatar ? `${process.env.REACT_APP_API_URL}/${user.avatar}` : imgProfile}
            alt="icon-profile"
          />
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <Button onClick={() => dispatch(logout(history))} className="dropdown-item" type="button">
                Logout
              </Button>
            </li>
          </ul>
        </div>
        <Button
          type="button"
          className="btn-icon border d-none d-md-block"
          onClick={() => props.setSidebarActive((oldValue) => !oldValue)}
        >
          <img width="20px" height="20px" src={iconNavbar} alt="icon-mail" />
        </Button>
      </div>
    </div>
  );
};

export default SideNavbar;
