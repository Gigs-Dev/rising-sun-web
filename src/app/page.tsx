import GameCollections from "@/modules/home/GameCollections";
import HeroBox from "@/modules/home/HeroBox";
import PopularGames from "@/modules/home/PopularGames";
import PlayersBase from "@/modules/home/PlayersBase";
import MainLayout from "@/store/home";
import { Box } from "@/ui/primitives/ui-layout";
import HowItWorks from "@/modules/home/HowItWorks";
import JoinNow from "@/modules/home/JoinNow";

export default function Home() {
  return (
    <Box>
      <MainLayout>
        <HeroBox />
        <GameCollections />
        <PopularGames/>
        <JoinNow/>
        {/* <PlayersBase /> */}
      </MainLayout>
    </Box>
  );
}
