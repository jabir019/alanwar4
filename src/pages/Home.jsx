import MainLayout from "../layouts/MainLayout";
import SectionHero from "../layouts/SectionHero";
import SectionSambutan from "../layouts/SectionSambutan";
import SectionProgram from "../layouts/SectionProgram";
import SectionQuote from "../layouts/SectionQuote";

export default function Home() {
  return (
    <>
      <MainLayout>
        <SectionHero />
        <SectionSambutan />
        <SectionProgram />
        <SectionQuote />
      </MainLayout>
    </>
  );
}
