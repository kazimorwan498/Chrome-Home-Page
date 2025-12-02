import MyHeader from "./Components/MyHeader";
import SearchBar from "./Components/SearchBar";
import QuickLinks from "./Components/QuickLinks";
import bg from "./assets/bg.jpg";

const App = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen flex flex-col relative" style={{ backgroundImage: `url(${bg})` }}>
      <MyHeader />
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-20 md:pb-32">
        <div className="mb-12 md:mb-16">
          <h1 className="text-white text-5xl md:text-7xl font-normal mb-2 select-none">Google</h1>
        </div>
        <div className="w-full mb-12 md:mb-16">
          <SearchBar />
        </div>
        <QuickLinks />
      </div>
    </div>
  );
};

export default App;
