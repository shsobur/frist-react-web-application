import Hero from "../components/Hero";
import weve from "../assets/wave.svg";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-116px)] flex flex-col items-center justify-center relative  ">
      <Hero></Hero>
      <img className="absolute bottom-0 w-full" src={weve} />
    </div>
  );
};

export default Home;
