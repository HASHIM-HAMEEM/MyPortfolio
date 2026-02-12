import Intro from "@/components/Intro";
import About from "@/components/About";
import Screen from "@/layout/Screen";
import LocalTime from "@/utils/LocalTime";
import Skills from "@/components/Skills";
import ElasticLine from "@/fancy/components/physics/elastic-line";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import SitemapRss from "@/components/SitemapRss";
import { AnimatedSection } from "@/components/AnimatedSection";
import GitHubActivitySection from "@/components/GitHubActivitySection";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import CommunityImpact from "@/components/CommunityImpact";

export default function Home() {
  return(
    <div>
      <LocalTime />
      <Screen>
        <div className="flex flex-col gap-8 pt-6">
          <Header />
          
          <AnimatedSection delay={0.1}>
            <section>
              <Intro />
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <section className="px-4">
              <CommunityImpact />
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <section className="px-4">
              <GitHubActivitySection />
            </section>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <section className="px-4">
              <About />
            </section>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <section className="px-4">
              <Skills />
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <section className="px-4">
              <FeaturedProjects />
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <section className="px-4">
              <FeaturedBlogs />
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <section className="px-4">
              <Contact />
            </section>
          </AnimatedSection>
          
          <div className="w-full overflow-hidden">
            <ElasticLine />
          </div>
          
          <SitemapRss />
        </div>
      </Screen>
    </div>
  );
}
