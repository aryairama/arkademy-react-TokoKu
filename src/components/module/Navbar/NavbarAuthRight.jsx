import { Link, useHistory } from 'react-router-dom';
import bell from '../../../assets/img/icon/lonceng.svg';
import mail from '../../../assets/img/icon/mail.svg';
import cart from '../../../assets/img/icon/keranjang.svg';
import imgProfile from '../../../assets/img/profile/1.png';
import { useSelector } from 'react-redux';
import { Button } from '../../base';
import { useDispatch } from 'react-redux';
import { logout } from '../../../configs/redux/actions/userAction';

const NavbarAuthRight = (props) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="row flex-grow-1 flex-wrap">
      <div className="offset-md-2 col-10 d-flex justify-content-md-end justify-content-start align-items-center">
        <Link to="/mybag" className="btn-icon mx-3">
          <img src={cart} alt="icon-bell" />
        </Link>
        <Link to="/" className="btn-icon mx-3">
          <img src={bell} alt="icon-mail" />
        </Link>
        <Link to="/" className="btn-icon mx-3">
          <img src={mail} alt="icon-mail" />
        </Link>
        <div className="btn-icon mx-3 dropdown">
          <img
            width="32px"
            height="32px"
            data-bs-toggle="dropdown"
            className="rounded-circle profile d-block"
            src={user.avatar ? `${process.env.REACT_APP_API_URL}/${user.avatar}` : imgProfile}
            alt="icon-profile"
          />
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              {user.roles === 'seller' && (
                <Link to="/seller/profilestore" className="dropdown-item">
                  Dashboard
                </Link>
              )}
              {user.roles === 'custommer' && (
                <Link to="/custommer/profile" className="dropdown-item">
                  Dashboard
                </Link>
              )}
            </li>
            <li>
              <Button onClick={() => dispatch(logout(history))} className="dropdown-item" type="button">
                Logout
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarAuthRight;
