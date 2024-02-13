import React, { useEffect, useState } from "react";
import clientsService from "services/ClientsService";
import EditForm from "./EditForm";
import Loading from "components/shared-components/Loading";

const EditProfile = ({ match }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userId = match.params.id;

  useEffect(() => {
    clientsService
      .getUser(userId)
      .then((res) => setUser(res))
      .finally(() => setIsLoading(false));
  }, [userId]);

  if (isLoading) return <Loading />;

  return <EditForm user={user} />;
};

export default EditProfile;
