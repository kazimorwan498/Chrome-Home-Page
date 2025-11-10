import CurrentTime from "./components/CurrentTime";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-[url(bg.jpg)] bg-cover bg-center h-screen">
      <div className="flex justify-between">
        <CurrentTime />
        <Header />
      </div>
    </div>
  );
};

export default App;
