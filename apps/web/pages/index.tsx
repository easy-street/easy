import { Box, Container, Section, Separator } from "ui";
import { TitleAndMetaTags } from "@/components/TitleAndMetaTags";
import { MainHero } from "@/components/marketing/MainHero";
import { DeveloperExperienceSection } from "@/components/marketing/DeveloperExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FancyBackground } from "@/components/marketing/FancyBackground";

export default function Home() {
  return (
    <Box>
      <TitleAndMetaTags
        title="easy — @easy-street"
        description="Unified Next.js API route handler designed for services backed by Prisma or PostgREST."
        image="default.png"
      />
      <FancyBackground>
        <Header />
        <MainHero />
      </FancyBackground>
      <DeveloperExperienceSection />
      <Section>
        <Container size="3">
          <Separator size="2" />
        </Container>
      </Section>
      <Container size="3">
        <Footer />
      </Container>
    </Box>
  );
}
