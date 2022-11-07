import { useState } from "react";
import { string } from "zod";
import ChampionItem from "./ChampionItem";

interface ChampionsListProps {
   champions?: any;
}

const ChampionsList: React.FC<ChampionsListProps> = ({ champions }) => {
   console.log(champions);

   // console.log(champions);

   const [search, setSearch] = useState<string>("");
   const [select, setSelect] = useState<string>("");

   const tags = ["Marksman", "Support", "Tank", "Fighter", "Assassin", "Mage"];

   return (
      <div>
         <div className="flex">
            <div className="flex flex-col w-80 pr-8">
               <label>Enter champ here:</label>
               <input
                  type="text"
                  placeholder="which champ?"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
               />
            </div>
            <div className="flex flex-col w-80 pr-8">
               select box
               <select
                  id="tags"
                  value={select}
                  onChange={(e) => setSelect(e.target.value)}
               >
                  <option value="">choose your tag</option>
                  {tags.map((value) => (
                     <option value={value} key={value}>
                        {value}
                     </option>
                  ))}
               </select>
            </div>
         </div>
         <div className="">
            {Object.entries(champions.data)
               .filter((champion: any) => {
                  // full text search filter
                  const champ = champion[1]
                  // if (champion[0].toLowerCase().includes(search.toLowerCase())) {
                  //    return true;
                  // } else {
                  //    return false;
                  // }

                  // tag filter
                  if (select === "") {
                     return true;
                  } else {
                     if (champ.tags.includes(select) && champion[0].toLowerCase().includes(search.toLowerCase())) {
                        return true;
                     } else {
                        return false;
                     }
                  }


               })
               .map((champion) => {
                  // console.log(champion[1].tags);
                  const champ = champion[1];
                  // eslint-disable-next-line react/jsx-key
                  return <ChampionItem champion={champ} />;

               })}
         </div>
      </div>
   );
};



export default ChampionsList;
