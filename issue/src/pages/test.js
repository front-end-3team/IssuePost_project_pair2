import { useEffect, useState } from "react";
import axios from "axios";

function Test() {
  const [users, setUsers] = useState();
  const getData = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_BACKEND_URL);

      setUsers(response.data);
      console.log(response.data);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>{users && users.map((user) => <div>{user.id}</div>)}</div>;
}

export default Test;
