import CurrentTime from "./components/CurrentTime";
import Header from "./components/Header";
import bg from "./assets/bg.jpg";

const App = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex justify-between">
        <CurrentTime />
        <Header />
      </div>
    </div>
  );
};

export default App;
