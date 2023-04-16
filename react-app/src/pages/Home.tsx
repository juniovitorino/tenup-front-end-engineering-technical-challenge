import { motion } from "framer-motion";

const pageTransitionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const Home = () => {
  return (
    <motion.div
      key="home-page"
      variants={pageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <h1>Welcome to Front-end Engineering Technical Challenge</h1>
    </motion.div>

  )
}

export default Home;
