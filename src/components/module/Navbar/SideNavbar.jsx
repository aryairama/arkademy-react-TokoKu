import { Link } from 'react-router-dom';
import bell from '../../../assets/img/icon/lonceng.svg';
import mail from '../../../assets/img/icon/mail.svg';
import imgProfile from '../../../assets/img/profile/1.png';
const SideNavbar = (props) => {
  return (
    <div className="row flex-grow-1 flex-wrap">
      <div className="offset-md-2 col-10 d-flex justify-content-md-end justify-content-start align-items-center">
        <Link to="/" className="btn-icon mx-3">
          <img src={bell} alt="icon-bell" />
        </Link>
        <Link to="/" href="./myBag.html" className="btn-icon mx-3">
          <img src={mail} alt="icon-mail" />
        </Link>
        <div className="mx-3" onClick={() => props.setSidebarActive((oldValue) => !oldValue)}>
          <img className="rounded-circle profile sidebar-toggler d-block" src={imgProfile} alt="icon-profile" />
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
