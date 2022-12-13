import { useState } from "react";
import { string } from "zod";
import ChampionItem from "./ChampionItem";

interface ChampionsListProps {
   champions?: any;
}

const ChampionsList: React.FC<ChampionsListProps> = ({ champions }) => {


   const [search, setSearch] = useState<string>("");
   const [select, setSelect] = useState<string>("");

   const tags = ["Marksman", "Support", "Tank", "Fighter", "Assassin", "Mage"];

   return (
      <div>
         <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2  justify-center mx-auto border border-gray-700">
            <div className="flex flex-col">
               <label>Champ name:</label>
               <input className="bg-[#161b22] border-solid border border-gray-700 m-2"
                  type="text"
                  placeholder="which champ?"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
               />
            </div>
            <div className="flex flex-col w-80">
               Roles
               <select className="border border-solid border-gray-700 bg-[#161b22] m-2"
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
         <div className="grid mx-4  gap-4 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 content-center justify-center">
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
