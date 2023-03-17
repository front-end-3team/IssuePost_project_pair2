import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const onNavigateList = () => {
    navigate("/list");
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={onNavigateList}>받기</button>
    </>
  );
}

export default Home;
