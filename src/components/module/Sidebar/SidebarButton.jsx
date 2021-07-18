const SidebarButton = (props) => {
  return (
    <button
      onClick={() => props.setSidebarActive((oldValue) => !oldValue)}
      className="navbar-toggler border btn-sm btn sidebar-toggler"
      type="button"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

export default SidebarButton;
