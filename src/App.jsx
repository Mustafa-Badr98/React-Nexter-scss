import "../sass/main.scss";
import Features from "./components/features";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Homes from "./components/homes";
import Realtors from "./components/realtors";
import Sidebar from "./components/sidebar";
import Story from "./components/story";
function App() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Header />
        <Realtors />
        <Features />
        <Story />
        <Homes />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}

export default App;
