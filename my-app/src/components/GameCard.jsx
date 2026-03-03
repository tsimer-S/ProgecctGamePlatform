const GameCard = ({ game }) => (
  <div className="border p-4 rounded-lg">
    <img src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg`} alt={game.name} />
    <h3>{game.name}</h3>
    <p>Цена: $19.99</p>  // Из API
    <button onClick={() => addToCart(game)}>Добавить в корзину</button>
  </div>
);