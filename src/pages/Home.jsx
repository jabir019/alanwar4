import MainLayout from "../layouts/MainLayout";
import SectionHero from "../layouts/SectionHero";
import SectionSambutan from "../layouts/SectionSambutan";
import SectionProgram from "../layouts/SectionProgram";

export default function Home() {
  return (
    <>
      <MainLayout>
        <SectionHero />
        <SectionSambutan />
        <SectionProgram />
      </MainLayout>
    </>
  );
}
