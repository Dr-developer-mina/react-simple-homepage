import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />

        <Carousel />
        <Products />
        <Footer/>
      </div>
    </>
  );
}

export default App;
