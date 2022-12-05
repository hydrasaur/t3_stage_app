import Header from "../components/Header";
import ChampionsList from "../components/ChampionList";
import FavoriteList from "../components/FavoriteList";
import { motion } from "framer-motion";
import AnimatedLayout from "../components/AnimatedLayout";

interface ChampionsProps {
  champions: any
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export const Champions: React.FC<ChampionsProps> = ({ champions }) => {
  // console.log(champions.data);
  return (
    <AnimatedLayout>
      <Header
        title="champion list"
        description="this is a list of the playable champions in LoL"
      />
      <ChampionsList champions={champions} />
    </AnimatedLayout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/9.18.1/data/en_US/champion.json`
  );

  const champions = await res.json();

  return {
    props: {
      champions: champions,
    },
  };
};

export default Champions;
