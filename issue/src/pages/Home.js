import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const onNavigateTest = () => {
    navigate("/test");
  };

  return (
    <>
      <h1>Main</h1>
      <button onClick={onNavigateTest}>깃허브 이슈 받아오기</button>
    </>
  );
}

export default Home;
