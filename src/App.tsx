import Header from "./Components/Header/Header";
import "./App.css";
import News from "./Components/News/News";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Mapglobal from "./Components/Login/Map/Mapglobal";

function App() {
  return (
    <>
      {localStorage.getItem("token") ? (
        <>
          <Header />
          <News />
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
