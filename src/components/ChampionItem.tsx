import Link from "next/link";
import ChampionsStyles from "../styles/Champions.module.css";

interface ChampionItemProps {
  champion: any;
}

const ChampionsItem: React.FC<ChampionItemProps> = ({ champion }) => {
  // console.log(champion);
  return (
    <Link href="/champion/[id]" as={`/champion/${champion.id}`}>
      <div className="p-6 text-center border-2 border-gray-700 rounded-3xl ">
        <h3>{champion.name}</h3>
        <p>{champion.title}</p>
        <p className="whitespace-nowrap overflow-hidden h-12 text-ellipsis ">{champion.blurb}</p>
      </div>
    </Link>
  );
};

export default ChampionsItem;
