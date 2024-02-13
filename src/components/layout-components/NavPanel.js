import React, { useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import ThemeConfigurator from "./ThemeConfigurator";
import { connect } from "react-redux";

const NavPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showDrawer = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item onClick={showDrawer}>
          <SettingOutlined className="nav-icon mr-0" />
        </Menu.Item>
      </Menu>
      <Drawer
        open={isOpen}
        onClose={onClose}
        title={"Theme configurator"}
        placement="right"
      >
        <ThemeConfigurator />
      </Drawer>
    </>
  );
};

const mapStateToProps = ({ theme }) => {
  const { locale } = theme;
  return { locale };
};

export default connect(mapStateToProps)(NavPanel);
