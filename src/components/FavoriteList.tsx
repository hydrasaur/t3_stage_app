import Image from "next/image";
import Championstyles from "../styles/Champions.module.css";
import ChampionItem from "./ChampionItem";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import { type } from "os";

type Props = {
  champions: any;
}


const FavoriteList: React.FC<Props> = (champions: any) => {
  // console.log("Favo component", Object.entries(champions.data));
  // console.log("data: ", champions);


  const championsList = Object.entries(champions.champions);

  // console.log("championsList", championsList);


  const array = ["134", "101", "103", "34", "161"];

  const favoriteList = championsList.filter((champion: any) => {
    if (array.includes(champion[1].key)) return true;
  });

  // console.log("favoriteList", favoriteList);


  return (
    <div className="flex-col space-y-6">
      {favoriteList.map((champion: any, index: number) => {
        // console.log(champion[1].image);
        return (
          <div key={index} className="flex border rounded-md bg-[#161b22] border-gray-700 font-serif p-4 space-x-6">
            <div className="relative">
              <Image
                className="rounded-3xl "
                src={`/League/${champion[1].image.full.toLowerCase()}`}
                alt="picture of the champion"
                height={1500}
                width={1500}
              />
            </div>
            <div>
              <h1 className="text-5xl font-extrabold">{champion[0]}</h1>
              <h2 className="text-3xl font-bold">{champion[1].title}</h2>
              <p className="text-xl font-semibold">{champion[1].blurb}</p>
            </div>
            <div className="flex">
              {champion[1].tags.map((tag: any, index: any) => {
                return (
                  <div style={{ padding: "5px" }}>
                    <h4 className="font-serif" key={index}>{tag}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FavoriteList;


