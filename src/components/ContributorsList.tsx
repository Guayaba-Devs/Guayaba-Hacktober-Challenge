import { motion } from "framer-motion";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { useEffect, useState } from "react";
import { Contributor } from "../interfaces/Contributor.interface";
import { Github } from "lucide-react";
import ShineBorder from "./ui/shine-border";

export const ContributorsList = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/appwrite/hacktoberfest/pulls?state=closed&?per_page=100"
        );
        const data = await response.json();

        console.log(data);

        const approvedPRs = data.filter(
          (pr: { merged_at: string | null }) => pr.merged_at !== null
        );

        const contributorsData: Contributor[] = Array.from(
          new Map<number, Contributor>(
            approvedPRs.map(
              (pr: { user: Contributor }) =>
                [pr.user.id, pr.user] as [number, Contributor]
            )
          ).values()
        );

        console.log(contributorsData);

        setContributors(contributorsData);
      } catch (error) {
        console.error("Error al obtener los PRs", error);
      }
    };

    fetchContributors();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
          Personas que han contribuido
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contributors.map((contributor, index) => (
            <motion.div key={index} whileHover={{ y: -5 }}>
              <ShineBorder
                className="w-full bg-white rounded-lg shadow-md p-6 flex flex-col items-center relative"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  {contributor.login}
                </h3>
                <p className="text-gray-600 text-center font-bold">
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>{contributor.login}</span>
                  </AnimatedShinyText>
                </p>
                <a
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bg-black top-3 right-3 p-2 rounded-full"
                >
                  <Github className="w-5 h-5 text-white hover:text-slate-300" />
                </a>
              </ShineBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
