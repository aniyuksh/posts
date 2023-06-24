import { useContext, useEffect } from "react";
import Feed from "./components/Feed";
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import RightNav from "./components/RightNav";
import { Context } from "./context/DataContext";
import { forumData } from "./data";
import { Route, Routes } from "react-router-dom";
import Single from "./components/Single";
import Home from "./components/Home";

function App() {
  const { data, setData } = useContext(Context);

  useEffect(() => {
    setData(forumData);
  }, []);

  return (
    <div className="flex flex-col h-[100vh] w-[100vw]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
