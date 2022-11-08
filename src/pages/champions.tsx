import Header from "../components/Header";
import ChampionsList from "../components/ChampionList";
import FavoriteList from "../components/FavoriteList";

interface ChampionsProps {
  champions: any
}

export const Champions: React.FC<ChampionsProps> = ({champions}) => {
  // console.log(champions.data);
  return (
    <div>
      <Header
        title="champion list"
        description="this is a list of the playable champions in LoL"
      />
      <ChampionsList champions={champions}/>
      {/* <FavoriteList champions={champions}/> */}
    </div>
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
