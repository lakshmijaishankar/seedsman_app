import { FC, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import Logo from "../assets/images/seedsman_logo.jpg";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { Modal } from "rsuite";
import "rsuite/Modal/styles/index.css";
import "./Navbar.css";
import CreateUserContainer from "../createuser/CreateCustomer.container";

const items: MenuProps["items"] = [];

const currencySwitcher: string[] = [
  "₹ INR",
  "AU$ AUD",
  "R$ BRL",
  "£ GBP",
  "CA$ CAD",
  "€ EUR",
];

currencySwitcher.forEach((currency) => {
  items.push({
    label: <div className="currency_item">{currency}</div>,
    key: currency,
  });
});

const NavbarComponent: FC = (): JSX.Element => {
  const [currency, setCurrency] = useState<string>("₹ INR");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    console.log("first");
  };
  return (
    <nav className={`header_navbar`}>
      <div className="header_navbar_left">
        <figure className="header_navbar_seedsman_logo">
          <img src={Logo} alt="seedsman logo" />
        </figure>
        <form method="Get" className="header_navbar_formcontainer">
          <label htmlFor="search_products" className="search_box">
            <input
              type="text"
              id="search_products"
              placeholder="What are you looking for?"
              className="search_input_box"
            />
          </label>
          <button type="submit" className="header_navbar_searchbtn">
            <RiSearch2Line className="text-white text-2xl" />
          </button>
        </form>
      </div>
      <ul className="header_navbar_right">
        <li>Track Order</li>
        <li>
          <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: ["₹ INR"],
              onClick: (info) => setCurrency(info.key),
            }}
            trigger={["click"]}
            arrow={true}
          >
            <span className="currency_switcher">
              {currency} <MdKeyboardArrowDown className="text-[1.1rem]" />
            </span>
          </Dropdown>
        </li>
        <li>🇮🇳 India</li>
        <li className="user_account">
          <span onClick={handleOpen} className="flex items-center">
            <FiUser /> Account
          </span>
          <Modal open={open} onClose={handleClose}>
            <Modal.Header>
              <Modal.Title className="uppercase">create an account</Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{ maxHeight: "none", overflow: "visible", padding: "0" }}
              children={<CreateUserContainer />}
            />
            <Modal.Footer></Modal.Footer>
          </Modal>
        </li>
        <li>
          <IoBagOutline className="text-[1.1rem] cursor-pointer" />
        </li>
      </ul>
    </nav>
  );
};
export default NavbarComponent;
