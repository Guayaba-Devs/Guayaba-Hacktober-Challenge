import { LandingComponent } from "./components/LandingComponent";
import { ContributionComponent } from "./components/ContributionComponent";
import { ContributorsList } from "./components/ContributorsList";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-100">
        <AnimatePresence mode="sync">
          <LandingComponent />
          <ContributionComponent />
          <ContributorsList />
          <Footer/>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
