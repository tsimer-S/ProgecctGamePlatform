// src/pages/Catalog.jsx
import { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'

// Массив из 100 игр
const fakeGames = [
  { id: 1, name: "Cyberpunk 2077", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Cyberpunk+2077", genre: "Action RPG" },
  { id: 2, name: "Elden Ring", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Elden+Ring", genre: "Action RPG" },
  { id: 3, name: "God of War Ragnarök", price: 69.99, image: "https://via.placeholder.com/400x225/111122/God+of+War+Ragnarok", genre: "Action-Adventure" },
  { id: 4, name: "The Witcher 3: Wild Hunt", price: 39.99, image: "https://via.placeholder.com/400x225/111122/The+Witcher+3", genre: "Open World RPG" },
  { id: 5, name: "Red Dead Redemption 2", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Red+Dead+Redemption+2", genre: "Open World" },
  { id: 6, name: "GTA V", price: 29.99, image: "https://via.placeholder.com/400x225/111122/GTA+V", genre: "Action-Adventure" },
  { id: 7, name: "Hollow Knight", price: 14.99, image: "https://via.placeholder.com/400x225/111122/Hollow+Knight", genre: "Metroidvania" },
  { id: 8, name: "Stardew Valley", price: 14.99, image: "https://via.placeholder.com/400x225/111122/Stardew+Valley", genre: "Simulation" },
  { id: 9, name: "Among Us", price: 4.99, image: "https://via.placeholder.com/400x225/111122/Among+Us", genre: "Social Deduction" },
  { id: 10, name: "Valorant", price: 0, image: "https://via.placeholder.com/400x225/111122/Valorant", genre: "FPS" },
  { id: 11, name: "Fortnite", price: 0, image: "https://via.placeholder.com/400x225/111122/Fortnite", genre: "Battle Royale" },
  { id: 12, name: "Minecraft", price: 29.99, image: "https://via.placeholder.com/400x225/111122/Minecraft", genre: "Sandbox" },
  { id: 13, name: "DOOM Eternal", price: 39.99, image: "https://via.placeholder.com/400x225/111122/DOOM+Eternal", genre: "FPS" },
  { id: 14, name: "Resident Evil Village", price: 39.99, image: "https://via.placeholder.com/400x225/111122/Resident+Evil+Village", genre: "Horror" },
  { id: 15, name: "Cyber Shadow", price: 19.99, image: "https://via.placeholder.com/400x225/111122/Cyber+Shadow", genre: "Retro Action" },
  { id: 16, name: "Neon White", price: 24.99, image: "https://via.placeholder.com/400x225/111122/Neon+White", genre: "FPS Platformer" },
  { id: 17, name: "Stray", price: 29.99, image: "https://via.placeholder.com/400x225/111122/Stray", genre: "Adventure" },
  { id: 18, name: "It Takes Two", price: 39.99, image: "https://via.placeholder.com/400x225/111122/It+Takes+Two", genre: "Co-op Adventure" },
  { id: 19, name: "Deathloop", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Deathloop", genre: "FPS" },
  { id: 20, name: "Hades", price: 24.99, image: "https://via.placeholder.com/400x225/111122/Hades", genre: "Roguelike" },
  // ... следующие 80 игр
  { id: 21, name: "Sekiro: Shadows Die Twice", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Sekiro", genre: "Action" },
  { id: 22, name: "Control", price: 39.99, image: "https://via.placeholder.com/400x225/111122/Control", genre: "Action-Adventure" },
  { id: 23, name: "Spider-Man: Miles Morales", price: 49.99, image: "https://via.placeholder.com/400x225/111122/Spider-Man+Miles+Morales", genre: "Action" },
  { id: 24, name: "Horizon Forbidden West", price: 69.99, image: "https://via.placeholder.com/400x225/111122/Horizon+Forbidden+West", genre: "Open World" },
  { id: 25, name: "Ghost of Tsushima", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Ghost+of+Tsushima", genre: "Action-Adventure" },
  { id: 26, name: "Death Stranding", price: 39.99, image: "https://via.placeholder.com/400x225/111122/Death+Stranding", genre: "Adventure" },
  { id: 27, name: "Cyberpunk 2077: Phantom Liberty", price: 29.99, image: "https://via.placeholder.com/400x225/111122/Phantom+Liberty", genre: "DLC" },
  { id: 28, name: "Alan Wake 2", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Alan+Wake+2", genre: "Horror" },
  { id: 29, name: "Starfield", price: 69.99, image: "https://via.placeholder.com/400x225/111122/Starfield", genre: "RPG" },
  { id: 30, name: "Baldur's Gate 3", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Baldurs+Gate+3", genre: "RPG" },
  { id: 31, name: "Lies of P", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Lies+of+P", genre: "Soulslike" },
  { id: 32, name: "Armored Core VI", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Armored+Core+VI", genre: "Mecha Action" },
  { id: 33, name: "Dead Space Remake", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Dead+Space", genre: "Horror" },
  { id: 34, name: "Resident Evil 4 Remake", price: 39.99, image: "https://via.placeholder.com/400x225/111122/RE4+Remake", genre: "Survival Horror" },
  { id: 35, name: "Hi-Fi Rush", price: 29.99, image: "https://via.placeholder.com/400x225/111122/Hi-Fi+Rush", genre: "Rhythm Action" },
  { id: 36, name: "Atomic Heart", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Atomic+Heart", genre: "FPS" },
  { id: 37, name: "Forspoken", price: 69.99, image: "https://via.placeholder.com/400x225/111122/Forspoken", genre: "Action RPG" },
  { id: 38, name: "Returnal", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Returnal", genre: "Roguelike" },
  { id: 39, name: "Ratchet & Clank: Rift Apart", price: 69.99, image: "https://via.placeholder.com/400x225/111122/Ratchet+Clank", genre: "Platformer" },
  { id: 40, name: "Demon's Souls Remake", price: 69.99, image: "https://via.placeholder.com/400x225/111122/Demons+Souls", genre: "Soulslike" },
  { id: 41, name: "Persona 5 Royal", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Persona+5+Royal", genre: "JRPG" },
  { id: 42, name: "Final Fantasy VII Remake", price: 69.99, image: "https://via.placeholder.com/400x225/111122/FF7+Remake", genre: "RPG" },
  { id: 43, name: "Yakuza: Like a Dragon", price: 39.99, image: "https://via.placeholder.com/400x225/111122/Yakuza+Like+a+Dragon", genre: "RPG" },
  { id: 44, name: "Nier: Automata", price: 39.99, image: "https://via.placeholder.com/400x225/111122/Nier+Automata", genre: "Action RPG" },
  { id: 45, name: "Bloodborne", price: 19.99, image: "https://via.placeholder.com/400x225/111122/Bloodborne", genre: "Soulslike" },
  { id: 46, name: "Dark Souls III", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Dark+Souls+III", genre: "Soulslike" },
  { id: 47, name: "Sekiro", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Sekiro", genre: "Action" },
  { id: 48, name: "Celeste", price: 19.99, image: "https://via.placeholder.com/400x225/111122/Celeste", genre: "Platformer" },
  { id: 49, name: "Hollow Knight: Silksong", price: 0, image: "https://via.placeholder.com/400x225/111122/Hollow+Knight+Silksong", genre: "Metroidvania" },
  { id: 50, name: "Ori and the Will of the Wisps", price: 29.99, image: "https://via.placeholder.com/400x225/111122/Ori+Will+of+the+Wisps", genre: "Metroidvania" },
  { id: 51, name: "Cuphead", price: 19.99, image: "https://via.placeholder.com/400x225/111122/Cuphead", genre: "Run and Gun" },
  { id: 52, name: "Undertale", price: 14.99, image: "https://via.placeholder.com/400x225/111122/Undertale", genre: "RPG" },
  { id: 53, name: "Deltarune Chapter 1&2", price: 0, image: "https://via.placeholder.com/400x225/111122/Deltarune", genre: "RPG" },
  { id: 54, name: "Slay the Spire", price: 24.99, image: "https://via.placeholder.com/400x225/111122/Slay+the+Spire", genre: "Roguelike Deck-Builder" },
  { id: 55, name: "Dead Cells", price: 24.99, image: "https://via.placeholder.com/400x225/111122/Dead+Cells", genre: "Roguelite" },
  { id: 56, name: "Risk of Rain 2", price: 24.99, image: "https://via.placeholder.com/400x225/111122/Risk+of+Rain+2", genre: "Roguelike" },
  { id: 57, name: "Vampire Survivors", price: 4.99, image: "https://via.placeholder.com/400x225/111122/Vampire+Survivors", genre: "Roguelike" },
  { id: 58, name: "Loop Hero", price: 14.99, image: "https://via.placeholder.com/400x225/111122/Loop+Hero", genre: "Roguelike" },
  { id: 59, name: "Inscryption", price: 19.99, image: "https://via.placeholder.com/400x225/111122/Inscryption", genre: "Card Horror" },
  { id: 60, name: "Cult of the Lamb", price: 24.99, image: "https://via.placeholder.com/400x225/111122/Cult+of+the+Lamb", genre: "Roguelike" },
  { id: 61, name: "Disco Elysium", price: 39.99, image: "https://via.placeholder.com/400x225/111122/Disco+Elysium", genre: "RPG" },
  { id: 62, name: "Outer Wilds", price: 24.99, image: "https://via.placeholder.com/400x225/111122/Outer+Wilds", genre: "Exploration" },
  { id: 63, name: "Subnautica", price: 29.99, image: "https://via.placeholder.com/400x225/111122/Subnautica", genre: "Survival" },
  { id: 64, name: "No Man's Sky", price: 59.99, image: "https://via.placeholder.com/400x225/111122/No+Mans+Sky", genre: "Open Universe" },
  { id: 65, name: "Valheim", price: 19.99, image: "https://via.placeholder.com/400x225/111122/Valheim", genre: "Survival" },
  { id: 66, name: "Satisfactory", price: 29.99, image: "https://via.placeholder.com/400x225/111122/Satisfactory", genre: "Factory Builder" },
  { id: 67, name: "Factorio", price: 35.00, image: "https://via.placeholder.com/400x225/111122/Factorio", genre: "Automation" },
  { id: 68, name: "Terraria", price: 9.99, image: "https://via.placeholder.com/400x225/111122/Terraria", genre: "Sandbox" },
  { id: 69, name: "RimWorld", price: 34.99, image: "https://via.placeholder.com/400x225/111122/RimWorld", genre: "Colony Sim" },
  { id: 70, name: "Cities: Skylines", price: 29.99, image: "https://via.placeholder.com/400x225/111122/Cities+Skylines", genre: "City Builder" },
  { id: 71, name: "Civilization VI", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Civ+VI", genre: "Strategy" },
  { id: 72, name: "Stellaris", price: 39.99, image: "https://via.placeholder.com/400x225/111122/Stellaris", genre: "Grand Strategy" },
  { id: 73, name: "Hearts of Iron IV", price: 39.99, image: "https://via.placeholder.com/400x225/111122/Hearts+of+Iron+IV", genre: "Grand Strategy" },
  { id: 74, name: "Crusader Kings III", price: 49.99, image: "https://via.placeholder.com/400x225/111122/Crusader+Kings+III", genre: "Grand Strategy" },
  { id: 75, name: "Total War: Warhammer III", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Warhammer+III", genre: "Strategy" },
  { id: 76, name: "Age of Empires IV", price: 39.99, image: "https://via.placeholder.com/400x225/111122/Age+of+Empires+IV", genre: "RTS" },
  { id: 77, name: "Company of Heroes 3", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Company+of+Heroes+3", genre: "RTS" },
  { id: 78, name: "Homeworld 3", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Homeworld+3", genre: "RTS" },
  { id: 79, name: "Warhammer 40,000: Space Marine 2", price: 59.99, image: "https://via.placeholder.com/400x225/111122/Space+Marine+2", genre: "Action" },
  { id: 80, name: "Helldivers 2", price: 39.99, image: "https://via.placeholder.com/400x225/111122/Helldivers+2", genre: "Co-op Shooter" },
  { id: 81, name: "Deep Rock Galactic", price: 29.99, image: "https://via.placeholder.com/400x225/111122/Deep+Rock+Galactic", genre: "Co-op FPS" },
  { id: 82, name: "Left 4 Dead 2", price: 9.99, image: "https://via.placeholder.com/400x225/111122/Left+4+Dead+2", genre: "Co-op Shooter" },
  { id: 83, name: "Payday 3", price: 39.99, image: "https://via.placeholder.com/400x225/111122/Payday+3", genre: "Co-op Heist" },
  { id: 84, name: "Rainbow Six Siege", price: 19.99, image: "https://via.placeholder.com/400x225/111122/Rainbow+Six+Siege", genre: "Tactical FPS" },
  { id: 85, name: "Counter-Strike 2", price: 0, image: "https://via.placeholder.com/400x225/111122/CS2", genre: "FPS" },
  { id: 86, name: "Apex Legends", price: 0, image: "https://via.placeholder.com/400x225/111122/Apex+Legends", genre: "Battle Royale" },
  { id: 87, name: "Call of Duty: Modern Warfare III", price: 69.99, image: "https://via.placeholder.com/400x225/111122/MW3", genre: "FPS" },
  { id: 88, name: "Battlefield 2042", price: 59.99, image: "https://via.placeholder.com/400x225/111122/BF2042", genre: "FPS" },
  { id: 89, name: "Overwatch 2", price: 0, image: "https://via.placeholder.com/400x225/111122/Overwatch+2", genre: "Hero Shooter" },
  { id: 90, name: "Destiny 2", price: 0, image: "https://via.placeholder.com/400x225/111122/Destiny+2", genre: "Looter Shooter" },
  { id: 91, name: "Warframe", price: 0, image: "https://via.placeholder.com/400x225/111122/Warframe", genre: "Free-to-Play" },
  { id: 92, name: "Path of Exile 2", price: 0, image: "https://via.placeholder.com/400x225/111122/Path+of+Exile+2", genre: "ARPG" },
  { id: 93, name: "Diablo IV", price: 69.99, image: "https://via.placeholder.com/400x225/111122/Diablo+IV", genre: "ARPG" },
  { id: 94, name: "Last Epoch", price: 34.99, image: "https://via.placeholder.com/400x225/111122/Last+Epoch", genre: "ARPG" },
  { id: 95, name: "Grim Dawn", price: 24.99, image: "https://via.placeholder.com/400x225/111122/Grim+Dawn", genre: "ARPG" },
  { id: 96, name: "Torchlight Infinite", price: 0, image: "https://via.placeholder.com/400x225/111122/Torchlight+Infinite", genre: "ARPG" },
  { id: 97, name: "Lost Ark", price: 0, image: "https://via.placeholder.com/400x225/111122/Lost+Ark", genre: "MMORPG" },
  { id: 98, name: "Black Desert Online", price: 0, image: "https://via.placeholder.com/400x225/111122/Black+Desert", genre: "MMORPG" },
  { id: 99, name: "New World", price: 39.99, image: "https://via.placeholder.com/400x225/111122/New+World", genre: "MMORPG" },
  { id: 100, name: "Throne and Liberty", price: 0, image: "https://via.placeholder.com/400x225/111122/Throne+and+Liberty", genre: "MMORPG" }
]

export default function Catalog() {
  const [games, setGames] = useState([])

  useEffect(() => {
    // Имитация загрузки с задержкой
    setTimeout(() => {
      setGames(fakeGames)
    }, 800)
  }, [])

  return (
    <div className="py-8 md:py-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 md:mb-14 text-center bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] bg-clip-text text-transparent">
        Каталог игр 
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8">
        {games.map((game, i) => (
          <GameCard key={game.id} game={game} index={i} />
        ))}
      </div>

      {games.length === 0 && (
        <div className="text-center py-32 text-xl text-gray-400 animate-pulse">
          Загрузка
        </div>
      )}
    </div>
  )
}