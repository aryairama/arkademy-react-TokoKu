import { Link } from 'react-router-dom';
import bell from '../../../assets/img/icon/lonceng.svg';
import mail from '../../../assets/img/icon/mail.svg';
import cart from '../../../assets/img/icon/keranjang.svg';
import imgProfile from '../../../assets/img/profile/1.png';
const NavbarAuthRight = (props) => {
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
        <div className="mx-3 mx-3">
          <img className="rounded-circle" src={imgProfile} alt="icon-profile" />
        </div>
      </div>
    </div>
  );
};

export default NavbarAuthRight;
