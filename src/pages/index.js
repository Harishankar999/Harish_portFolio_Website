import Acomplishments from "../components/Acomplishments/Acomplishments";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import HarishPic from "../components/HarishAvatar/HarishPic";
import Head from 'next/head'
const Home = () => {
  return (
    <>
      <Head>
        <title>Harishankar Patra</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <HarishPic />
        </Section>
        <Timeline />
        <Projects />
        <Technologies />
        <Acomplishments />
      </Layout>
    </>
  );
};

export default Home;
