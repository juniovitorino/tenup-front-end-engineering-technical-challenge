import { motion } from "framer-motion";
import { useQuery } from 'react-query';
import { fetchPageByName } from '../services/PageService';
import type { HomePage } from '../services/PageService'
import styled from "styled-components";


import Header from "../components/Header";
import Content from "../components/Content";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer";

const pageTransitionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const PageContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  margin: 0 auto;
`;

const Home = () => {
  const postName = 'home-page';
  const { data: page, isLoading, isError } = useQuery<HomePage, Error>(['page', postName], () => fetchPageByName(postName));

  if (isLoading) return <p>Loading Home Page</p>;
  if (isError || !page) return <p>Error Home Page Data</p>;

  return (
    <PageContainer
      key="home-page"
      variants={pageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <Header section="hero" />
      <Content section="content" />
      <Prefooter section="hero" />
      <Footer />
    </PageContainer>
  )
}

export default Home;
