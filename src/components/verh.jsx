
import "./verh.css"

function App() {
  return (
    <header className="header">
      <div className="logo">
        <span>Serj</span>anii
      </div>

      <div className="search">
        <input type="text" placeholder="Поиск..." />
        <button>⌕</button>
      </div>

      <button className="login">Login</button>
    </header>
  )
}

export default App
