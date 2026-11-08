import "./geming.css";
import VERX from "./verh.jsx";
import Spisok from "./spisok.jsx";

function Geming() {
  return (
    <div className="content">
      {/* Шапка */}
      <VERX />

      {/* Компонент с 3 кнопками и сеткой карточек под ним */}
      <Spisok />
    </div>
  );
}

export default Geming;