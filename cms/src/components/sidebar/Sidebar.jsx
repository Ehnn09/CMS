import "./sidebar.scss";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import PeopleIcon from "@mui/icons-material/People";
import MapIcon from "@mui/icons-material/Map";
import LanIcon from "@mui/icons-material/Lan";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo"> DK Fiber Networks</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <AppsSharpIcon className="icon"></AppsSharpIcon>
            <span>Dashboard</span>
          </li>
          <li>
            <PeopleIcon className="icon"></PeopleIcon>
            <span>Customer</span>
          </li>
          <li>
            <LanIcon className="icon"></LanIcon>
            <span>Service</span>
          </li>
          <li>
            <PaymentIcon className="icon"></PaymentIcon>
            <span>Bill</span>
          </li>
          <li>
            <AccountBalanceWalletIcon className="icon"></AccountBalanceWalletIcon>
            <span>Finance</span>
          </li>
          <li>
            <MapIcon className="icon"></MapIcon>
            <span>Coverage Area</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <span className="logout">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
