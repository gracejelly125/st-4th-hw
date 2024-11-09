import { Link } from "react-router-dom";

const Home = () => {


  return (
    <>
      <div>
        <h1>Home</h1>
        <Link to="/detail/1">
          <span>Detail 페이지로 이동하기</span>
        </Link>
      </div>
    </>
  );
};

export default Home;
