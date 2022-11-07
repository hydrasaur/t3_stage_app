import Link from "next/link";
import ChampionsStyles from "../styles/Champions.module.css";

interface ChampionItemProps{
  champion: any;
}

const ChampionsItem: React.FC<ChampionItemProps> = ( {champion} ) => {
  // console.log(champion);
  return (
    <Link href="/champion/[id]" as={`/champion/${champion.id}`}>
      <div className={ChampionsStyles.card}>
        <h3>{champion.name}</h3>
        <p>{champion.title}</p>
        <p className={ChampionsStyles.para}>{champion.blurb}</p>
      </div>
    </Link>
  );
};

export default ChampionsItem;
