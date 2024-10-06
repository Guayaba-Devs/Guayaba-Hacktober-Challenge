import { Check, Github, GitPullRequest } from "lucide-react";

export const ContributionComponent = () => {
  const steps = [
    {
      icon: <Github className="w-8 h-8" />,
      text: "Encuentra un repositorio",
    },
    {
      icon: <GitPullRequest className="w-8 h-8" />,
      text: "Envía un pull request",
    },
    { icon: <Check className="w-8 h-8" />, text: "Espera al merge!" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
          Como puedo contribuir
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 shadow-md mb-4">
                {step.icon}
              </div>
              <p className="text-lg text-center">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
