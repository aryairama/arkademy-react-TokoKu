const NotFound = (props) => {
  return (
    <tr>
      <td colSpan={props.colSpan}>
        <div className="d-flex flex-column align-items-center py-5">
          <img src={props.icon} width="158px" height="123px" alt="arrow-up-down" />
          <p className="text-black-16px text-black-50 pt-5">You don't have a product yet</p>
        </div>
      </td>
    </tr>
  );
};

NotFound.defaultProps = {
  colSpan: 4,
};

export default NotFound;
