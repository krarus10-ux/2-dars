import { useState, useEffect } from "react";
import "./geming.css";

function Spisok() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("mmorpg"); // Категория по умолчанию

  useEffect(() => {
    setLoading(true);
    // Запрос к реальному API FreeToGame с выбранной категорией
    fetch(`https://www.freetogame.com/api/games?category=${activeCategory}`)
      .then((response) => response.json())
      .then((data) => {
        setGames(data.slice(0, 30)); // Берем 30 игр для сетки по 3 в ряд
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка загрузки:", error);
        setLoading(false);
      });
  }, [activeCategory]);

  return (
    <div>
      {/* 3 кнопки переключения категорий прямо под шапкой */}
      <div className="tab-buttons">
        <button 
          className={activeCategory === "mmorpg" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveCategory("mmorpg")}
        >
          ⚔️ MMORPG
        </button>
        <button 
          className={activeCategory === "shooter" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveCategory("shooter")}
        >
          🎯 Шутеры
        </button>
        <button 
          className={activeCategory === "strategy" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveCategory("strategy")}
        >
          🏰 Стратегии
        </button>
      </div>

      {loading ? (
        <p className="loading-text">Загружаем список игр с сервера...</p>
      ) : (
        <div className="games-grid">
          {games.map((game) => (
            <div key={game.id} className="game-card">
              <img 
                src={game.thumbnail} 
                alt={game.title} 
                className="game-poster" 
              />
              
              <div className="game-info">
                <div>
                  <h3>{game.title}</h3>
                  <p>{game.short_description}</p>
                </div>

                <div className="card-bottom">
                  <div className="game-footer">
                    <span className="game-genre">{game.genre}</span>
                    <span className="game-platform">{game.platform}</span>
                  </div>

                  {/* Кнопка "Играть", ведущая на официальную страницу игры */}
                  <a 
                    href={game.game_url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="play-btn"
                  >
                    Играть
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Spisok;