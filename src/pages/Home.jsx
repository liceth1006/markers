import { useTranslation } from "react-i18next";
import CardSlider from "../components/CardSlider";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import Wave from "../components/Wave ";
import CardsSection from "../components/CardsSection";
function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <Hero />
      <Wave />
         
      <CardsSection/>
   
    </div>
  );
}

export default Home;
