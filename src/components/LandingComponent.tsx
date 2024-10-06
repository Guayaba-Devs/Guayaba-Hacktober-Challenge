import { motion } from "framer-motion";
import { RainbowButton } from "./ui/rainbow-button";
import HyperText from "./ui/hyper-text";
import FlickeringGrid from "./ui/flickering-grid";

export const LandingComponent: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4 bg-white">
      <FlickeringGrid
        className="z-0 absolute w-full inset-0 size-full bottom-0 mx-auto [mask:radial-gradient(circle_at_center,#fff_300px,transparent_0)]"
        squareSize={5}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      <HyperText
        className="text-4xl md:text-6xl font-bold text-black mb-4 text-center"
        text="Hacktoberfest"
      ></HyperText>
      <HyperText
        className="text-4xl md:text-6xl font-bold text-black mb-4 text-center"
        text="2024"
      ></HyperText>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 text-center">
        Celebra el evento open source más grande del mundo con nosotros!
      </p>
      <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-200 rounded-full shadow-md mb-8 flex items-center justify-center">
        <img
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/112519434?s=200&v=4"
          alt=""
        />
      </div>
      <motion.a
        href="https://github.com/Guayaba-Devs/Guayaba-Hacktober-Challenge"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block"
      >
        <RainbowButton>¡Quiero contribuir!</RainbowButton>
      </motion.a>
    </section>
  );
};
