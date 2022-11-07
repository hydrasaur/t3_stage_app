import { useState } from "react";

interface ChampionsListProps {
  champions?: any;
}

const ChampionsList: React.FC<ChampionsListProps> = ({champions}) => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  
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
          if (
            champion[0].toLowerCase().includes(search.toLowerCase()) &&
            champion[1].tags.includes(select)
          ) {
            return true;
          }
        })
        .map((champion) => {
          // console.log(champion[1].tags);
          const champ = champion[1];
          // return <ChampionItem champion={champ} />;
          return (
            <div>
              test
            </div>
          )
        })}
    </div>
  </div>
  );
};



export default ChampionsList;
