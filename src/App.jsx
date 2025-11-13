import Header from "./components/Header";
import bg from "./assets/bg.jpg";

const App = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bg})` }}>
      <Header />
    </div>
  );
};

export default App;
