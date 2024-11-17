import { Body } from "./components/body/Body";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-col p-4 h-5/6 justify-between rounded-lg">
        <Navbar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
