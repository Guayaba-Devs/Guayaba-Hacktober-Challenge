
export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16 text-center flex">
      
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-black mb-2">Siguenos</h2>
          <a
              href="https://www.instagram.com/guayaba_devs_official?igsh=MWhwb2g2Z3d2Y2t1dg=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline p-2 text-gray-500 hover:text-black"
            >
              Instagram
            </a>
            <a
            href="https://github.com/Guayaba-Devs" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline p-2 text-gray-500 hover:text-black"
            >
              Github
            </a>

            <a
            href="https://discord.gg/XB9gnegz" 
            target="_blank" 
            rel="noopener noreferrer" 
           className="hover:underline p-2 text-gray-500 hover:text-black"
            >
         <span>Unirse a Discord</span>
            </a>
      </div>

    </footer>
  );
};