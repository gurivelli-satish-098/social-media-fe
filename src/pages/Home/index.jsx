import Feed from "../../components/Feed";
import LeftsideBar from "../../components/LeftsideBar";
import RightsideBar from "../../components/RightsideBar";
import Topbar from "../../components/Topbar";
import style from "./index.module.css";

function Home() {
  return (
    <>
      <Topbar />
      <div className={style.container}>
        <LeftsideBar />
        <Feed />
        <RightsideBar />
      </div>
    </>
  );
}

export default Home;
