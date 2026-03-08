// src/pages/Catalog.jsx
import { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'

// Массив из 100 игр
// загрузил фотки
const fakeGames = [
  { id: 1, name: "Cyberpunk 2077", price: 59.99, image: "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_2_games/cyberpunk2077ultimateedition/2x1_NSwitch2_Cyberpunk2077UE_image1600w.jpg", genre: "Action RPG" },
  { id: 2, name: "Elden Ring", price: 59.99, image: "https://image.api.playstation.com/vulcan/ap/rnd/202501/2901/c200be5371265efb80a1bae120ad3a0f2a3232c6006c0464.jpg", genre: "Action RPG" },
  { id: 3, name: "God of War Ragnarök", price: 69.99, image: "https://gaming-cdn.com/images/products/15544/orig/god-of-war-ragnarok-valhalla-playstation-5-game-playstation-store-europe-cover.jpg?v=1730296335", genre: "Action-Adventure" },
  { id: 4, name: "The Witcher 3: Wild Hunt", price: 39.99, image: "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f", genre: "Open World RPG" },
  { id: 5, name: "Red Dead Redemption 2", price: 59.99, image: "https://gaming-cdn.com/images/products/5679/orig/red-dead-redemption-2-pc-game-rockstar-cover.jpg?v=1713793245", genre: "Open World" },
  { id: 6, name: "GTA V", price: 29.99, image: "https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2014/11/gtav-featured.jpg", genre: "Action-Adventure" },
  { id: 7, name: "Hollow Knight", price: 14.99, image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51", genre: "Metroidvania" },
  { id: 8, name: "Stardew Valley", price: 17.99, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg?t=1754692865", genre: "Simulation" },
  { id: 9, name: "Among Us", price: 5.99, image: "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000036098/758ab0b61205081da2466386940752c70e0e5ea43bd39e8b9b13eaa455c69b7e", genre: "Social Deduction" },
  { id: 10, name: "Valorant", price: 0, image: "https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg", genre: "FPS" },
  { id: 11, name: "Fortnite", price: 0, image: "https://i.ytimg.com/vi/adGdyCdvKz4/maxresdefault.jpg", genre: "Battle Royale" },
  { id: 12, name: "Minecraft", price: 29.99, image: "https://gaming-cdn.com/images/products/442/orig/minecraft-java-and-bedrock-edition-pc-mac-cover.jpg?v=1769503807", genre: "Sandbox" },
  { id: 13, name: "DOOM Eternal", price: 39.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNkt3Bfe9YrpMR98PWB4ooFa_7fffItmbaA&s", genre: "FPS" },
  { id: 14, name: "Resident Evil Village", price: 39.99, image: "https://i.ytimg.com/vi/ZSJJLSxEkZw/maxresdefault.jpg", genre: "Horror" },
  { id: 15, name: "Cyber Shadow", price: 19.99, image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000019477/4069a87ddda83c35e87d27a8f2f20204a2b0fd4af8c0df83360e9cc5e835877c", genre: "Retro Action" },
  { id: 16, name: "Neon White", price: 24.99, image: "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000037795/6cdb85f8a8527c55553b82fd72face10345a44cd8ddb0918d76b7e62860416b0", genre: "FPS Platformer" },
  { id: 17, name: "Stray", price: 29.99, image: "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000080625/d8c81b018b2e579aa5c224e635cf5368266ef168c7828e9ae18ad9444158efc4", genre: "Adventure" },
  { id: 18, name: "It Takes Two", price: 39.99, image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70070000014924/e7200824041808289d4a65589ed368f7e08dc2e538a5fd7ee9f8d39e58015c24", genre: "Co-op Adventure" },
  { id: 19, name: "Deathloop", price: 59.99, image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DEATHLOOP_ArkaneStudios_S1_2560x1440-bf6d342edbd2411ccf24e326852fca93", genre: "FPS" },
  { id: 20, name: "Hades", price: 24.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7ZmyAQ32fxPK6NkTcgeKwJnFxW6dfW_GPw&s", genre: "Roguelike" },
  { id: 21, name: "Sekiro: Shadows Die Twice", price: 59.99, image: "https://i.ytimg.com/vi/eD5xx8IKO6c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA3RJ3Y5C_N_A_DIL2zBM-Ojc0cRg", genre: "Action" },
  { id: 22, name: "Control", price: 39.99, image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/2111/hezOSo9ubBJZtTXCojBgNljX.png", genre: "Action-Adventure" },
  { id: 23, name: "Spider-Man: Miles Morales", price: 49.99, image: "https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S1_2560x1440-a0518b9f9f36a05294e37448df8a27a0", genre: "Action" },
  { id: 24, name: "Horizon Forbidden West", price: 69.99, image: "https://cdn1.epicgames.com/offer/24cc2629b0594bf29340f6acf9816af8/EGS_HorizonForbiddenWestCompleteEdition_GuerrillaGamesNixxesSoftware_S1_2560x1440-90cc343f3fcef2f750f13d8a2d84893b", genre: "Open World" },
  { id: 25, name: "Ghost of Tsushima", price: 59.99, image: "https://helios-i.mashable.com/imagery/articles/00iMVz5oU69RK9UEoPsZTMW/hero-image.fill.size_1248x702.v1623390188.jpg", genre: "Action-Adventure" },
  { id: 26, name: "Death Stranding", price: 39.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB5k3DCsZRwILA5WZ2uJI16WBupNpRnQlvAw&s", genre: "Adventure" },
  { id: 27, name: "Cyberpunk 2077: Phantom Liberty", price: 29.99, image: "https://evault.ru/storage/2024/08/0814f2a8fbd9649108002990987a9e5e3db25aea99.webp", genre: "DLC" },
  { id: 28, name: "Alan Wake 2", price: 59.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRURwR7Ef7X4a9w_X7Kq6XGaof5Nec_-1ts_g&s", genre: "Horror" },
  { id: 29, name: "Starfield", price: 69.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Bgm9KDcNLw0SjArB17g6ahxVmFT_WibuQA&s", genre: "RPG" },
  { id: 30, name: "Baldur's Gate 3", price: 59.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vxpv5aeYw2jxZ9jUgYyDFn3HDwqHwSkvQA&s", genre: "RPG" },
  { id: 31, name: "Lies of P", price: 59.99, image: "https://catholicgamereviews.com/wp-content/uploads/2025/04/Lies-of-P-Thumbnail.jpg", genre: "Soulslike" },
  { id: 32, name: "Armored Core VI", price: 59.99, image: "https://i.ytimg.com/vi/SlSfr6Wa5sc/maxresdefault.jpg", genre: "Mecha Action" },
  { id: 33, name: "Dead Space Remake", price: 59.99, image: "https://cdn1.epicgames.com/offer/4ec958d5e4b6429aadbc116cee0b6ea0/EGS_DeadSpaceDigitalDeluxeEdition_Motive_Editions_S1_2560x1440-d1804076d5464fdbdbaf864685e47353", genre: "Horror" },
  { id: 34, name: "Resident Evil 4 Remake", price: 39.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx_9t-rGdBqw7vsL1UO0mv_TiwNpu-qoaKjQ&s", genre: "Survival Horror" },
  { id: 35, name: "Hi-Fi Rush", price: 29.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2yYf0Y-AGIGaogv_PgZM8PdmGO8H8LCRnA&s", genre: "Rhythm Action" },
  { id: 36, name: "Atomic Heart", price: 59.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoP7LRk3zLwRDOvfduoGkeBl9e3ElU0WSxzA&s", genre: "FPS" },
  { id: 37, name: "Forspoken", price: 69.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4e0MEM4C0vlpQvtX-WeBn_SDx_pqM_cE48w&s", genre: "Action RPG" },
  { id: 38, name: "Returnal", price: 59.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QrPV9pQILDww9W5hK3aBGe8FtnP2XRGwfA&s", genre: "Roguelike" },
  { id: 39, name: "Ratchet & Clank: Rift Apart", price: 69.99, image: "https://sonyinteractive.com/tachyon/2022/10/RCRA_KEYART_PRIMARY_16X9_20210208.jpg", genre: "Platformer" },
  { id: 40, name: "Demon's Souls Remake", price: 69.99, image: "https://i.ytimg.com/vi/Gg7FQyfiubE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCZN4BhBfZgsvkEivBRA3k9E2w1OA", genre: "Soulslike" },
  { id: 41, name: "Persona 5 Royal", price: 59.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5m5ujh1vrsqZzs6coVJtcdLzxAJeO35CDeA&s", genre: "JRPG" },
  { id: 42, name: "Final Fantasy VII Remake", price: 69.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMRUHAZO4_aZG5B0T06o0pezF5M69at0y8OA&s", genre: "RPG" },
  { id: 43, name: "Yakuza: Like a Dragon", price: 39.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqUqSI0w8MpECmMhScO74_YddgO-h0FqQjw&s", genre: "RPG" },
  { id: 44, name: "Nier: Automata", price: 39.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wwIt44fo2R6exvVG6hXgd0NZFkXX_AKbZg&s", genre: "Action RPG" },
  { id: 45, name: "Bloodborne", price: 19.99, image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/Sy5e8DmeKIJVjlAGraPAJYkT.png", genre: "Soulslike" },
  { id: 46, name: "Dark Souls III", price: 59.99, image: "https://hi-news.ru/wp-content/uploads/2016/04/Dark-Souls-III-01.jpg", genre: "Soulslike" },
  { id: 47, name: "Sekiro", price: 59.99, image: "https://i.ytimg.com/vi/eD5xx8IKO6c/maxresdefault.jpg", genre: "Action" },
  { id: 48, name: "Celeste", price: 19.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sA-p9c1D_SYYFzYAfKscs1-BwullT_B6DA&s", genre: "Platformer" },
  { id: 49, name: "Hollow Knight: Silksong", price: 0, image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch2/70010000105851/8787627be7f26ae7984456ffd9af17bea845032cebbf59fe6eeb596dea6bb20e", genre: "Metroidvania" },
  { id: 50, name: "Ori and the Will of the Wisps", price: 29.99, image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000034725/cf74916275780188fd850512efe6c678318d7317bf987599205d2a3fc76dbd79", genre: "Metroidvania" },
  { id: 51, name: "Cuphead", price: 19.99, image: "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000016330/d94d2186ef03c930392253c83c84af0c73b7e57cd902a526b09b4155a25930fe", genre: "Run and Gun" },
  { id: 52, name: "Undertale", price: 14.99, image: "https://res.cloudinary.com/jerrick/image/upload/v1724258809/66c619f9c88bef001c0f1ec4.webp", genre: "RPG" },
  { id: 53, name: "Deltarune Chapter 1&2", price: 0, image: "https://www.gematsu.com/wp-content/uploads/2021/09/Deltarune_09-23-21.jpg?w=640", genre: "RPG" },
  { id: 54, name: "Slay the Spire", price: 24.99, image: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_SlayTheSpire_image1600w.jpg", genre: "Roguelike Deck-Builder" },
  { id: 55, name: "Dead Cells", price: 24.99, image: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DeadCells.jpg", genre: "Roguelite" },
  { id: 56, name: "Risk of Rain 2", price: 24.99, image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/2220/RfRnyMuPPdQraj09cluhX5yZ.png", genre: "Roguelike" },
  { id: 57, name: "Vampire Survivors", price: 4.99, image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000059002/e2c326b8fbab42b3f48c86c10c728b8bc04cf59fa51302c54837823879e6749f", genre: "Roguelike" },
  { id: 58, name: "Loop Hero", price: 14.99, image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000041968/29516f2f693790d431e2e8ae297f85d5d11b75337b8be14f1c052beb0425c065", genre: "Roguelike" },
  { id: 59, name: "Inscryption", price: 19.99, image: "https://m.media-amazon.com/images/M/MV5BYjBhNmNmNDktOWFjYi00YzIzLThmOTEtMTMxNjE0MmI4MGM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", genre: "Card Horror" },
  { id: 60, name: "Cult of the Lamb", price: 24.99, image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000047973/f4bf3b2748a6571b0f0c62369b733a8386347abdb158fb985f9ffdf36a5567a6", genre: "Roguelike" },
  { id: 61, name: "Disco Elysium", price: 39.99, image: "https://vector-bsfa.com/wp-content/uploads/2024/12/disco.webp?w=1024", genre: "RPG" },
  { id: 62, name: "Outer Wilds", price: 24.99, image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000038712/f82902db3c1f0b19b1e00c324aba9509c0f9ebec784bcd249e21cffc39151a4e", genre: "Exploration" },
  { id: 63, name: "Subnautica", price: 29.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5ubNIAoP0Kp1Za-LDvCE1FFRXEtaXkOaWA&s", genre: "Survival" },
  { id: 64, name: "No Man's Sky", price: 59.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYljrcDVe7Ul5bUNpHzYWTiM1NmN9Lpv5ww&s", genre: "Open Universe" },
  { id: 65, name: "Valheim", price: 19.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QxTWTctwyphgq2QYx9C64JNUEfmqQaqorA&s", genre: "Survival" },
  { id: 66, name: "Satisfactory", price: 29.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUSFImUc9C7XfUcfhdn_kITPyuW6XcTOVwGA&s", genre: "Factory Builder" },
  { id: 67, name: "Factorio", price: 35.00, image: "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch2/70010000114614/9a5d800cc991652c1e051b844c11a86cf8b9bc061cdaf035ad44be1ea461e471", genre: "Automation" },
  { id: 68, name: "Terraria", price: 9.99, image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000001702/dac3a26570b5ca1ddf703bf0add7cc7c527f71a2b56521baf69e20c7a573c610", genre: "Sandbox" },
  { id: 69, name: "RimWorld", price: 34.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32YtI9aMozAJ4WZPIl12B07judCBdVWhd4A&s", genre: "Colony Sim" },
  { id: 70, name: "Cities: Skylines", price: 29.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPMDqe4jJMTy5gMVKfkUxnEL8JPKWVkvK9w&s", genre: "City Builder" },
  { id: 71, name: "Civilization VI", price: 59.99, image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000013704/918c0badde3aeba760e2185f382a2402248a1292322cf540fd8d098eeb292e1e", genre: "Strategy" },
  { id: 72, name: "Stellaris", price: 39.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5yTY8caS8UMxHrv3EJ3hScAY4PJB6V4R3g&s", genre: "Grand Strategy" },
  { id: 73, name: "Hearts of Iron IV", price: 39.99, image: "https://cdn-images.dzcdn.net/images/cover/98b632fc3d49387b50cf27a5a7a24846/0x1900-000000-80-0-0.jpg", genre: "Grand Strategy" },
  { id: 74, name: "Crusader Kings III", price: 49.99, image: "https://images.ctfassets.net/u73tyf0fa8v1/2cJL5z5SuGooLkw8yQiHWx/993e7dd21eae65d600f447f18fcca6db/ST_CKIII_STARTER_EDITION_1920x1080.jpg?w=3840&q=75", genre: "Grand Strategy" },
  { id: 75, name: "Total War: Warhammer III", price: 59.99, image: "https://upload.wikimedia.org/wikipedia/ru/2/27/Total_War_Warhammer_3_cover_art.jpg", genre: "Strategy" },
  { id: 76, name: "Age of Empires IV", price: 39.99, image: "https://image.api.playstation.com/vulcan/ap/rnd/202508/2017/8ed8776ca3d965eb9eb17ef0e040743fcc61b2b9f77c1c4a.png", genre: "RTS" },
  { id: 77, name: "Company of Heroes 3", price: 59.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bQSpGwM7Xz6Q5ZCA4Q5-rQPUTkl7R6juRQ&s3", genre: "RTS" },
  { id: 78, name: "Homeworld 3", price: 59.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFfmo2bjAy8CumWwcDq9U8zBZLyTv5PqDVA&s", genre: "RTS" },
  { id: 79, name: "Warhammer 40,000: Space Marine 2", price: 59.99, image: "https://gepig.com/game_cover_460w/7233.jpg", genre: "Action" },
  { id: 80, name: "Helldivers 2", price: 39.99, image: "https://levelupnews.com.br/wp-content/uploads/2025/10/bbb70532-ffd1-44e7-98b7-1ba253c8f619.jpg", genre: "Co-op Shooter" },
  { id: 81, name: "Deep Rock Galactic", price: 29.99, image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/1407/2JSde8PFCF6B4nO2EECrcR1m.png", genre: "Co-op FPS" },
  { id: 82, name: "Left 4 Dead 2", price: 9.99, image: "https://i.ytimg.com/vi/PewcieMXHSc/maxresdefault.jpg", genre: "Co-op Shooter" },
  { id: 83, name: "Payday 3", price: 39.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3_TMcP5X5eKk4ZmC2hhD8bbrbAt9MC7tng&s", genre: "Co-op Heist" },
  { id: 84, name: "Rainbow Six Siege", price: 19.99, image: "https://i.ebayimg.com/images/g/yKAAAOSwzPlfru5x/s-l1200.jpg", genre: "Tactical FPS" },
  { id: 85, name: "Counter-Strike 2", price: 0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcXT8ddSbjjLw9IakVCfgNy5T1TuMKTizZw&s", genre: "FPS" },
  { id: 86, name: "Apex Legends", price: 0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgZWznZmUptn0HdqulpkkqFftWXFwSn6ewKg&s", genre: "Battle Royale" },
  { id: 87, name: "Call of Duty: Modern Warfare III", price: 69.99, image: "https://upload.wikimedia.org/wikipedia/ru/0/0b/Call_Of_Duty_MW3_2023.jpg", genre: "FPS" },
  { id: 88, name: "Battlefield 2042", price: 59.99, image: "https://habrastorage.org/getpro/habr/upload_files/039/d5f/09e/039d5f09ef44994ca33de39c4fd8c1e2.jpeg", genre: "FPS" },
  { id: 89, name: "Overwatch 2", price: 0, image: "https://i.ytimg.com/vi/yIqoK8ajmHc/maxresdefault.jpg", genre: "Hero Shooter" },
  { id: 90, name: "Destiny 2", price: 0, image: "https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EN_Bungie_D2_v950_OfferLandscape_S1_2560x1440_2560x1440-61cd46cb2d27e41f358293225ec354c8", genre: "Looter Shooter" },
  { id: 91, name: "Warframe", price: 0, image: "https://www-static.warframe.com/images/landing/warframe-metacard.png", genre: "Free-to-Play" },
  { id: 92, name: "Path of Exile 2", price: 0, image: "https://cdn1.epicgames.com/offer/58a18be6bbba41a0bf52b014bb81d33b/EGS_PathofExile2_GrindingGearGames_S1_2560x1440-56206c309622e9cdb8bb0560085c5a9c", genre: "ARPG" },
  { id: 93, name: "Diablo IV", price: 69.99, image: "https://image.api.playstation.com/vulcan/ap/rnd/202211/3017/Oo1B84A7BLCT157YFSxjtwG0.png", genre: "ARPG" },
  { id: 94, name: "Last Epoch", price: 34.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDBTpcJ7ABNhrNU7-Be0spPx0suXdspu_Yg&s", genre: "ARPG" },
  { id: 95, name: "Grim Dawn", price: 24.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlP7zFK6L6aO3-Y-sma8RnXVlE5FnCZvZmNw&s", genre: "ARPG" },
  { id: 96, name: "Torchlight Infinite", price: 0, image: "https://media04.gamesunit.de/newszoom-b-164448.jpg", genre: "ARPG" },
  { id: 97, name: "Lost Ark", price: 0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjR5LY0EHdr11Jwe2Q1XNhPVyxRDmhrpFiOg&s", genre: "MMORPG" },
  { id: 98, name: "Black Desert Online", price: 0, image: "https://image.api.playstation.com/vulcan/ap/rnd/202506/0506/2439354ffcce3b666f7445f1426e3714fb24f37b18dc770c.jpg", genre: "MMORPG" },
  { id: 99, name: "New World", price: 39.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ozwnbzdGhkwFL5UKfiqXfJknfcULtdFkyw&s", genre: "MMORPG" },
  { id: 100, name: "Throne and Liberty", price: 0, image: "https://images.ctfassets.net/z7aj1lm9rbu3/mTrFm7OJQj0KFLfzGRBXz/5c6f87af097b9acca98105f0a20b8d8f/TL_KA_LAUNCH_OPEN_GRAPH_1200x630.jpg", genre: "MMORPG" }
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