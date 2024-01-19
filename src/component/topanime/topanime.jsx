


import "../contect/content.css";
import { useEffect, useState } from "react";





const Topanime = () => {

  const base_url = "https://api.jikan.moe/v4";

  const [topAnime, setTopanime] = useState([]);

  useEffect(() => {
    fetch(`${base_url}/top/anime`)
      .then((res) => res.json())
      .then((resdata) => {
        setTopanime(resdata.data);
      });
  }, []);


  return (
    <div >
            <div className="TopAnime">
        {topAnime.map(item => (
          <div className="card" key={item.Id}>
            <div className="image-anime">
            <img src={item.images.jpg.image_url} alt="" />
              <a href={item.url}><div className="title-anime">
                <div className="centtr">
                <div className="title">
                  <h2>{item.title}</h2>
                </div>
                <div className="episodes">
                <h2>episodes: {item.episodes}</h2>
                </div>
                <div className="ranklist">
                  <h4>rank: {item.rank}</h4>
                </div>
                </div>
              </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topanime;
