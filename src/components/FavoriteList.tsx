import Image from "next/image";
import Championstyles from "../styles/Champions.module.css";
import ChampionItem from "./ChampionItem";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";

const FavoriteList = ( champions : any ) => {
  // console.log("Favo component", Object.entries(champions.data));
  const championsList = Object.entries(champions.data);

  const array = ["134", "101", "103", "34", "161"];

  const favoriteList = championsList.filter((champion : any) => {
    if (array.includes(champion[1].key)) return true;
  });

  return (
    <div>
      {favoriteList.map((champion : any, index : number) => {
        // console.log(champion[1].tags);
        return (
          <div key={index} className={Championstyles.favCard}>
            <Image
              src={`/assets/${champion[1].image.full.toLowerCase()}`}
              alt="picture of the champion"
              width="380"
              height="180"
              className="rounded-3xl"
            />
            <div style={{ padding: "20px" }}>
              <h1>{champion[0]}</h1>
              <h2>{champion[1].title}</h2>
              <p>{champion[1].blurb}</p>
            </div>
            {champion[1].tags.map((tag : any, index : any) => {
              return (
                <div style={{ padding: "5px" }}>
                  <h4 key={index}>{tag}</h4>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default FavoriteList;
