import { motion } from "framer-motion";
import { useQuery } from 'react-query';
import Header from "../components/Header";
import { fetchPageByName } from '../services/PageService';
import type { Page } from '../services/PageService'

const pageTransitionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const Home = () => {
  const postName = 'home-page';
  const { data: page, isLoading, isError } = useQuery<Page, Error>(['page', postName], () => fetchPageByName(postName));

  if (isLoading) return <p>Loading Home Page</p>;
  if (isError || !page) return <p>Error Home Page Data</p>;

  const { site_logo:siteLogo } = page.fields;

  return (
    <motion.div
      key="home-page"
      variants={pageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <Header siteLogo={siteLogo} />
    </motion.div>

  )
}

export default Home;
