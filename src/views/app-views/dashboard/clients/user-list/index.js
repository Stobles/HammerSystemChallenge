import React, { useEffect, useState } from "react";
import { Card, Table, Tooltip, message, Button } from "antd";
import {
  EyeOutlined,
  DeleteOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import moment from "moment";
import AvatarStatus from "components/shared-components/AvatarStatus";
import clientsService from "services/ClientsService";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const UserList = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    clientsService
      .getUsers()
      .then((res) => {
        setUsers(res);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((item) => item.id !== userId));
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  const tableColumns = [
    {
      title: "User",
      dataIndex: "name",
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus
            src={record.img | null}
            icon={<UserOutlined />}
            name={record.name}
            subTitle={record.email}
          />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: "Website",
      dataIndex: "website",
    },
    {
      title: "Address",
      dataIndex: "address",
      render: (date) => (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <HomeOutlined />
          <div style={{ display: "flex" }}>
            <span>{date.street}</span>,<span>{date.city}</span>
          </div>
        </div>
      ),
      sorter: (a, b) =>
        moment(a.lastOnline).unix() - moment(b.lastOnline).unix(),
    },
    {
      title: "",
      dataIndex: "actions",
      render: (_, elm) => (
        <div className="text-right">
          <Tooltip title="View">
            <Button
              type="primary"
              className="mr-2"
              icon={<EyeOutlined />}
              onClick={() => {
                history.push(
                  `${APP_PREFIX_PATH}/dashboard/clients/user-edit/${elm.id}`
                );
              }}
              size="small"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => {
                deleteUser(elm.id);
              }}
              size="small"
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <Card bodyStyle={{ padding: "0px" }}>
      <Table
        loading={isLoading}
        columns={tableColumns}
        dataSource={users}
        rowKey="id"
      />
    </Card>
  );
};

export default UserList;
