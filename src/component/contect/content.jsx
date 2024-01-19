import "./content.css";
import Topanime from "../topanime/topanime";
import { useEffect, useState } from "react";
const Content = () => {
  const [resss, setResss] = useState();

  const [serchee, setserchee] = useState();

  function test() {
    const resinp = document.querySelector(".inpvalo");
    const emmm = resinp.value;

    if (emmm.length >= 4) {
  
      return setserchee(emmm);
    } else {
      console.log("write above 4 word");
    }
  }

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?q=${serchee}&sfw`)
      .then((res) => res.json())
      .then((rdata) => setResss(rdata.data));
  }, [serchee]);


  return (
    <div className="App-con">
      <div className="headShearche">
        <div className="inp-btn">
          <div className="inpsea">
            <input
              type="text"
              placeholder="write name"
              onKeyUp={test}
              className="inpvalo"
            />
            <div className="listser">
              {resss &&
                resss.map((itemsx) => (
                  <div key={itemsx.id}>
                    <ul>
                      <a href={itemsx.url}>
                        <li>{itemsx.title}</li>
                      </a>
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Topanime />
    </div>
  );
};

export default Content;
