import { useEffect, useState } from "react";
import axios from "axios";

function Test() {
  const [users, setUsers] = useState();
  const getData = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "?per_page=25&page=1"
      );

      const response2 = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "?per_page=25&page=2"
      );

      setUsers(response.data);
      console.log(response.data);
      console.log(response2.data);
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
