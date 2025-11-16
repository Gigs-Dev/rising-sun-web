import GameCollections from "@/modules/home/GameCollections";
import HeroBox from "@/modules/home/HeroBox";
import PopularGames from "@/modules/home/PopularGames";
// import PlayersBase from "@/modules/home/PlayersBase";
import { Box } from "@/ui/primitives/ui-layout";
import JoinNow from "@/modules/home/JoinNow";

export default function Home() {
  return (
    <Box>
        <HeroBox />
        <GameCollections />
        <PopularGames/>
        <JoinNow/>
        {/* <PlayersBase /> */}
    </Box>
  );
}
