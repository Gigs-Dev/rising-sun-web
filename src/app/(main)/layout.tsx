import { Box } from "@/ui/primitives/ui-layout";
import Footer from "@/ui/components/Footer";
import Header from "@/ui/components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className="flex flex-col justify-between w-full bg-[#0E132C] min-h-screen ">
      <Header />
      <Box className="mt-[4rem] lg:mt-[6rem]">
      {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
