import fetch from "auth/FetchInterceptor";

const clientsService = {};

clientsService.getUsers = async () => {
  return await fetch({
    url: "/users",
    method: "get",
  });
};

clientsService.getUser = (id, params) => {
  return fetch({
    url: `/users/${id}`,
    method: "get",
    params,
  });
};

clientsService.deleteUser = (data) => {
  return fetch({
    url: "/users/1",
    method: "delete",
  });
};

export default clientsService;
