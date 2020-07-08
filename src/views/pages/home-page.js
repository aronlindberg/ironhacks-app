import React from 'react';
import { LandingPage, Section } from '../../components/layout';
import {
  AboutSection,
  ExamplesSection,
  ProcessSection,
  FooterSection,
  HeroSection,
  ShowcaseSection,
  StatsSection,
  SponsorsSection, 
  UpcomingSection,
} from '../home';


class HomePage extends React.Component {
  render() {
    return (
      <LandingPage pageClass="home_page">
        <Section id="hero" sectionClass="full-height bg-primary">
          <HeroSection/>
        </Section>

        <Section id="home_about" sectionClass="py-4 depth-5">
          <AboutSection/>
        </Section>

        <Section id="home_upcoming" sectionClass="bg-primary">
          <UpcomingSection />
        </Section>

        <Section id='home_process' sectionClass='process_section' >
          <ProcessSection/>
        </Section>

        <Section id='home_examples' sectionClass='bg-primary examples_section' >
          <ExamplesSection/>
        </Section>

        <Section id='home_showcase' sectionClass='showcase_section' >
          <ShowcaseSection/>
        </Section>

        <Section id='home_stats' sectionClass='stats_section bg-primary' >
          <StatsSection/>
        </Section>

        <Section id='home_sponsors' sectionClass='stats_section' >
          <SponsorsSection/>
        </Section>

        <Section id='home_footer' sectionClass='stats_section bg-black c-white' >
          <FooterSection/>
        </Section>
      </LandingPage>
    )
  }
}

export default HomePage;