import { useContext, useState } from "react";
import "./App.css";
import Campaign from "./components/Campaign";
import EmailModal from "./components/EmailModal";
import MyForm from "./components/MyForm";
import { inputContext } from "./context/InputContext";
import { Route, Routes } from "react-router-dom";
import View from "./components/View";
import Edit from "./components/Edit";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  let { allEmail } = useContext(inputContext);

  return (
    <>
      <h2>Campaign Menu</h2>
      <div className="campaign_header">
        <div>
          <h4> Campaigns</h4>
          <p>You can </p>
        </div>
        <button onClick={handleOpen}>Thread</button>
      </div>

      <Routes>
        <Route path="/" element={<Campaign />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      <EmailModal open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
