import Link from "next/link";
import ChampionsStyles from "../styles/Champions.module.css";

interface ChampionItemProps{
  champion: any;
}

const ChampionsItem: React.FC<ChampionItemProps> = ( {champion} ) => {
  // console.log(champion);
  return (
    <Link href="/champion/[id]" as={`/champion/${champion.id}`}>
      <div className="p-6 text-center caret-inherit decoration-wavy border-2 border-solid border-red-500 rounded-3xl max-w-xs hover:border-cyan-500">
        <h3>{champion.name}</h3>
        <p>{champion.title}</p>
        <p className="whitespace-nowrap overflow-hidden text-ellipsis h-12">{champion.blurb}</p>
      </div>
    </Link>
  );
};

export default ChampionsItem;
