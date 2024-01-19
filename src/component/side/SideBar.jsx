import "./SideBar.css";

const SideBar = () => {
  return (
    <div >
    <div className="side-bare">
      <div className="logo">
        <h1>
          anime.dev
        </h1>
      </div>
      <div className="chos-links">
        <a href="">Home</a>
        <a href="">Trending</a>
        <a href="">Top Watching</a>
        <a href="">Category</a>
        <a href="">Settings</a>
      </div>
    </div>
  </div>
  );
}

export default SideBar;
