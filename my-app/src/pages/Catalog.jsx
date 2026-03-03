// import axios from 'axios';
import { useState, useEffect } from 'react';

// Фейковые данные игр (на время, пока нет ключа Steam API)
const fakeGames = [
  { id: 1, name: 'Cyber Adventure', price: 29.99, image: 'https://via.placeholder.com/300x150?text=Cyber+Adventure' },
  { id: 2, name: 'Space Explorer', price: 19.99, image: 'https://via.placeholder.com/300x150?text=Space+Explorer' },
  { id: 3, name: 'Fantasy Quest', price: 39.99, image: 'https://via.placeholder.com/300x150?text=Fantasy+Quest' },
  { id: 4, name: 'Racing Fury', price: 14.99, image: 'https://via.placeholder.com/300x150?text=Racing+Fury' },
];

function Catalog() {
  const [games, setGames] = useState(fakeGames);
  // const [loading, setLoading] = useState(true);

  // Пример с axios (раскомментируй, когда будет ключ и реальный API)
  // useEffect(() => {
  //   axios.get('https://api.steampowered.com/ISteamApps/GetAppList/v2/')
  //     .then(response => {
  //       // Обработка данных (очень много игр → взять первые 20)
  //       const appList = response.data.applist.apps.slice(0, 20);
  //       setGames(appList.map(app => ({ id: app.appid, name: app.name, price: '??', image: `https://steamcdn-a.akamaihd.net/steam/apps/${app.appid}/header.jpg` })));
  //     })
  //     .catch(err => console.error('Ошибка загрузки игр:', err))
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Каталог игр</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map(game => (
          <div key={game.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={game.image} 
              alt={game.name} 
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
              <p className="text-gray-700 mb-4">Цена: ${game.price}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Если хочешь loader */}
      {/* {loading && <p className="text-center text-xl mt-10">Загрузка игр...</p>} */}
    </div>
  );
}

export default Catalog;