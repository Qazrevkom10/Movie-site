const movies = [
  { title: "Project Hail Mary", year: 2026, genre: "Фантастика", rating: 8.4, studio: "Amazon MGM", mood: "космос", description: "Учёный просыпается на корабле и пытается спасти Землю." },
  { title: "The Super Mario Galaxy Movie", year: 2026, genre: "Анимация", rating: 6.5, studio: "Universal", mood: "семейное", description: "Марио отправляется в яркое галактическое приключение." },
  { title: "Crime 101", year: 2026, genre: "Криминал", rating: 6.9, studio: "Amazon MGM", mood: "ограбление", description: "Стильный криминальный триллер о серии дорогих краж." },
  { title: "The Drama", year: 2026, genre: "Драма", rating: 7.5, studio: "A24", mood: "отношения", description: "История пары, у которой всё меняется перед свадьбой." },
  { title: "Pizza Movie", year: 2026, genre: "Комедия", rating: 5.8, studio: "Searchlight", mood: "вечеринка", description: "Безумная комедия о друзьях, пицце и одном странном вечере." },
  { title: "The Housemaid", year: 2025, genre: "Триллер", rating: 6.8, studio: "Lionsgate", mood: "тайны", description: "Дом с идеальным фасадом скрывает опасные секреты." },
  { title: "Anaconda", year: 2025, genre: "Приключения", rating: 5.6, studio: "Sony", mood: "джунгли", description: "Новая версия истории о гигантской змее и рискованной экспедиции." },
  { title: "Mike & Nick & Nick & Alice", year: 2026, genre: "Комедия", rating: 6.2, studio: "20th Century", mood: "экшен", description: "Комедийный боевик с хаосом, погонями и странной командой." },
  { title: "Dhurandhar The Revenge", year: 2026, genre: "Боевик", rating: 8.5, studio: "Jio Studios", mood: "месть", description: "Масштабный индийский боевик с длинной историей возмездия." },
  { title: "Peaky Blinders: The Immortal Man", year: 2026, genre: "Криминал", rating: 6.6, studio: "Netflix", mood: "гангстеры", description: "Возвращение мира Peaky Blinders в полнометражном формате." },
  { title: "Send Help", year: 2026, genre: "Триллер", rating: 6.9, studio: "20th Century", mood: "выживание", description: "Остров, авария и борьба двух людей за контроль." },
  { title: "Avatar: Fire and Ash", year: 2025, genre: "Фантастика", rating: 7.3, studio: "Disney", mood: "эпик", description: "Новая глава Пандоры с огненным племенем и большим конфликтом." },
  { title: "Masters of the Universe", year: 2026, genre: "Фэнтези", rating: 7.0, studio: "Amazon MGM", mood: "герои", description: "Хи-Мэн возвращается в большом фэнтези-приключении." },
  { title: "One Battle After Another", year: 2025, genre: "Драма", rating: 7.7, studio: "Warner Bros.", mood: "напряжение", description: "Остросюжетная авторская история о людях на границе перемен." },
  { title: "Mercy", year: 2026, genre: "Фантастика", rating: 6.2, studio: "Amazon MGM", mood: "будущее", description: "Детективная история в мире, где закон стал почти автоматическим." },
  { title: "Hoppers", year: 2026, genre: "Анимация", rating: 7.5, studio: "Pixar", mood: "душевное", description: "Девочка переносит сознание в робота-бобра и меняет взгляд на природу." },
  { title: "Dhurandhar", year: 2025, genre: "Боевик", rating: 8.3, studio: "Jio Studios", mood: "шпионское", description: "Шпионский боевик с крупными ставками и плотным экшеном." },
  { title: "Ready or Not 2: Here I Come", year: 2026, genre: "Хоррор", rating: 6.9, studio: "Searchlight", mood: "ирония", description: "Продолжение кровавой игры с чёрным юмором." },
  { title: "Backrooms", year: 2026, genre: "Хоррор", rating: 7.1, studio: "A24", mood: "лиминал", description: "Кошмарные бесконечные комнаты становятся ловушкой." },
  { title: "Sinners", year: 2025, genre: "Хоррор", rating: 7.8, studio: "Warner Bros.", mood: "вампиры", description: "Музыка, кровь и южная готика в напряжённой истории." },
  { title: "Superman", year: 2025, genre: "Супергерои", rating: 7.4, studio: "DC Studios", mood: "надежда", description: "Новый старт истории Человека из стали." },
  { title: "F1", year: 2025, genre: "Спорт", rating: 7.1, studio: "Apple", mood: "скорость", description: "Гонки Формулы-1, давление команды и борьба за возвращение." },
  { title: "Mission: Impossible - The Final Reckoning", year: 2025, genre: "Боевик", rating: 7.0, studio: "Paramount", mood: "трюки", description: "Итан Хант снова идёт против невозможного." },
  { title: "Thunderbolts", year: 2025, genre: "Супергерои", rating: 6.9, studio: "Marvel", mood: "антигерои", description: "Команда нестабильных героев получает опасное задание." },
  { title: "Mickey 17", year: 2025, genre: "Фантастика", rating: 7.2, studio: "Warner Bros.", mood: "абсурд", description: "Клон-работник узнаёт цену бессмертной работы." },
  { title: "The Fantastic Four: First Steps", year: 2025, genre: "Супергерои", rating: 7.0, studio: "Marvel", mood: "ретро", description: "Семья героев встречает космическую угрозу." },
  { title: "How to Train Your Dragon", year: 2025, genre: "Фэнтези", rating: 7.2, studio: "Universal", mood: "драконы", description: "Игровая версия дружбы Иккинга и Беззубика." },
  { title: "Jurassic World Rebirth", year: 2025, genre: "Приключения", rating: 6.4, studio: "Universal", mood: "динозавры", description: "Новая экспедиция открывает очередную опасную главу мира динозавров." },
  { title: "Captain America: Brave New World", year: 2025, genre: "Супергерои", rating: 6.1, studio: "Marvel", mood: "политика", description: "Сэм Уилсон сталкивается с глобальным заговором." },
  { title: "A Minecraft Movie", year: 2025, genre: "Приключения", rating: 6.3, studio: "Warner Bros.", mood: "кубы", description: "Герои попадают в блочный мир, где фантазия становится инструментом выживания." },
  { title: "Lilo & Stitch", year: 2025, genre: "Семейный", rating: 6.7, studio: "Disney", mood: "ohana", description: "Тёплая игровая версия истории о девочке и инопланетном друге." },
  { title: "Elio", year: 2025, genre: "Анимация", rating: 6.8, studio: "Pixar", mood: "космос", description: "Мальчик случайно становится представителем Земли в галактике." },
  { title: "28 Years Later", year: 2025, genre: "Хоррор", rating: 7.3, studio: "Sony", mood: "апокалипсис", description: "Продолжение культовой истории о заражённом мире." },
  { title: "Ballerina", year: 2025, genre: "Боевик", rating: 6.8, studio: "Lionsgate", mood: "месть", description: "История наёмницы из вселенной Джона Уика." },
  { title: "The Conjuring: Last Rites", year: 2025, genre: "Хоррор", rating: 6.6, studio: "Warner Bros.", mood: "призраки", description: "Новая паранормальная история из известной хоррор-серии." },
  { title: "Wicked: For Good", year: 2025, genre: "Мюзикл", rating: 7.4, studio: "Universal", mood: "магия", description: "Вторая часть музыкальной истории страны Оз." },
  { title: "Tron: Ares", year: 2025, genre: "Фантастика", rating: 6.8, studio: "Disney", mood: "неон", description: "Цифровой мир выходит за собственные границы." },
  { title: "Now You See Me: Now You Don't", year: 2025, genre: "Криминал", rating: 6.7, studio: "Lionsgate", mood: "фокусы", description: "Иллюзионисты снова смешивают шоу, аферу и ограбление." },
  { title: "Zootopia 2", year: 2025, genre: "Анимация", rating: 7.1, studio: "Disney", mood: "детектив", description: "Джуди и Ник получают новое дело в мире звериного мегаполиса." },
  { title: "Five Nights at Freddy's 2", year: 2025, genre: "Хоррор", rating: 6.2, studio: "Blumhouse", mood: "аниматроники", description: "Новая смена, новые страхи и знакомые механические монстры." },
  { title: "Michael", year: 2026, genre: "Биография", rating: 7.2, studio: "Lionsgate", mood: "музыка", description: "Биографический фильм о Майкле Джексоне." },
  { title: "Scream 7", year: 2026, genre: "Хоррор", rating: 6.8, studio: "Paramount", mood: "слэшер", description: "Ghostface возвращается с новой серией атак." },
  { title: "The Devil Wears Prada 2", year: 2026, genre: "Комедия", rating: 6.9, studio: "20th Century", mood: "мода", description: "Продолжение истории о глянце, карьере и жёстком стиле." },
  { title: "Reminders of Him", year: 2026, genre: "Драма", rating: 6.7, studio: "Universal", mood: "романтика", description: "Эмоциональная история о втором шансе и трудном прошлом." },
  { title: "Mortal Kombat 2", year: 2026, genre: "Боевик", rating: 6.6, studio: "Warner Bros.", mood: "турнир", description: "Продолжение боевого фэнтези с культовыми персонажами." },
  { title: "The Mandalorian and Grogu", year: 2026, genre: "Фантастика", rating: 7.5, studio: "Lucasfilm", mood: "звёзды", description: "Мандалорец и Грогу выходят на большой экран." },
  { title: "Toy Story 5", year: 2026, genre: "Анимация", rating: 7.0, studio: "Pixar", mood: "ностальгия", description: "Игрушки возвращаются с новой семейной историей." },
  { title: "Evil Dead Burn", year: 2026, genre: "Хоррор", rating: 6.7, studio: "New Line", mood: "одержимость", description: "Свежая глава зловещей франшизы с новым кошмаром." },
  { title: "Spider-Man: Brand New Day", year: 2026, genre: "Супергерои", rating: 7.6, studio: "Marvel", mood: "паук", description: "Новый этап истории Питера Паркера." },
  { title: "Avengers: Doomsday", year: 2026, genre: "Супергерои", rating: 7.8, studio: "Marvel", mood: "команда", description: "Крупное событие Marvel с угрозой уровня вселенной." }
];

const accents = ["#ffcf5a", "#ff6a3d", "#2ee6c8", "#ff3d5a", "#8bd450", "#5aa7ff"];
const wikiPages = {
  "Project Hail Mary": "Project Hail Mary (film)",
  "The Super Mario Galaxy Movie": "The Super Mario Galaxy Movie",
  "The Housemaid": "The Housemaid (2025 film)",
  "Anaconda": "Anaconda (2025 film)",
  "Send Help": "Send Help (film)",
  "Avatar: Fire and Ash": "Avatar: Fire and Ash",
  "Masters of the Universe": "Masters of the Universe (film)",
  "One Battle After Another": "One Battle After Another",
  "Mercy": "Mercy (2026 film)",
  "Hoppers": "Hoppers (film)",
  "Ready or Not 2: Here I Come": "Ready or Not 2: Here I Come",
  "Backrooms": "The Backrooms (film)",
  "Sinners": "Sinners (2025 film)",
  "Superman": "Superman (2025 film)",
  "F1": "F1 (film)",
  "Mission: Impossible - The Final Reckoning": "Mission: Impossible – The Final Reckoning",
  "Thunderbolts": "Thunderbolts*",
  "Mickey 17": "Mickey 17",
  "The Fantastic Four: First Steps": "The Fantastic Four: First Steps",
  "How to Train Your Dragon": "How to Train Your Dragon (2025 film)",
  "Jurassic World Rebirth": "Jurassic World Rebirth",
  "Captain America: Brave New World": "Captain America: Brave New World",
  "A Minecraft Movie": "A Minecraft Movie",
  "Lilo & Stitch": "Lilo & Stitch (2025 film)",
  "Elio": "Elio (film)",
  "28 Years Later": "28 Years Later",
  "Ballerina": "Ballerina (2025 film)",
  "The Conjuring: Last Rites": "The Conjuring: Last Rites",
  "Wicked: For Good": "Wicked: For Good",
  "Tron: Ares": "Tron: Ares",
  "Now You See Me: Now You Don't": "Now You See Me: Now You Don't",
  "Zootopia 2": "Zootopia 2",
  "Five Nights at Freddy's 2": "Five Nights at Freddy's 2",
  "Michael": "Michael (2025 film)",
  "Scream 7": "Scream 7",
  "The Devil Wears Prada 2": "The Devil Wears Prada 2",
  "Reminders of Him": "Reminders of Him (film)",
  "Mortal Kombat 2": "Mortal Kombat 2",
  "The Mandalorian and Grogu": "The Mandalorian and Grogu",
  "Toy Story 5": "Toy Story 5",
  "Evil Dead Burn": "Evil Dead Burn",
  "Spider-Man: Brand New Day": "Spider-Man: Brand New Day",
  "Avengers: Doomsday": "Avengers: Doomsday"
};

const grid = document.querySelector("#movieGrid");
const topList = document.querySelector("#topList");
const genreSelect = document.querySelector("#genreSelect");
const searchInput = document.querySelector("#searchInput");
const emptyState = document.querySelector("#emptyState");

function getGenres() {
  return [...new Set(movies.map(movie => movie.genre))].sort((a, b) => a.localeCompare(b, "ru"));
}

function renderGenres() {
  getGenres().forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  });
}

function getWatchUrl(movie) {
  const query = encodeURIComponent(`${movie.title} ${movie.year} смотреть онлайн легально`);
  return `https://yandex.kz/search/?text=${query}`;
}

function getFallbackPoster(movie, index) {
  const accent = accents[index % accents.length];
  const title = movie.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const genre = movie.genre.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#111827"/>
          <stop offset="0.52" stop-color="#1f2937"/>
          <stop offset="1" stop-color="${accent}" stop-opacity="0.85"/>
        </linearGradient>
        <radialGradient id="glow" cx="70%" cy="20%" r="65%">
          <stop stop-color="${accent}" stop-opacity="0.95"/>
          <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="600" height="900" fill="url(#bg)"/>
      <rect width="600" height="900" fill="url(#glow)"/>
      <circle cx="120" cy="145" r="52" fill="none" stroke="#fff" stroke-opacity="0.55" stroke-width="12"/>
      <circle cx="120" cy="145" r="12" fill="#fff" fill-opacity="0.55"/>
      <path d="M70 770 C170 710, 250 820, 360 750 S520 710, 560 780" fill="none" stroke="#fff" stroke-opacity="0.35" stroke-width="10"/>
      <text x="50" y="560" fill="#fff" font-family="Arial, sans-serif" font-size="42" font-weight="800">${title}</text>
      <text x="50" y="625" fill="#ffcf5a" font-family="Arial, sans-serif" font-size="28" font-weight="700">${genre}</text>
      <text x="50" y="705" fill="#fff" fill-opacity="0.76" font-family="Arial, sans-serif" font-size="22">poster loading...</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getPageImageFromData(data) {
  const page = data.query?.pages ? Object.values(data.query.pages)[0] : null;
  return page?.thumbnail?.source || "";
}

async function fetchPosterByTitle(pageTitle) {
  const api = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&redirects=1&prop=pageimages&pithumbsize=900&format=json&origin=*`;
  const response = await fetch(api);
  const data = await response.json();
  return getPageImageFromData(data);
}

async function fetchPosterBySearch(movie) {
  const search = encodeURIComponent(`${movie.title} ${movie.year} film`);
  const api = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${search}&gsrlimit=3&prop=pageimages&pithumbsize=900&format=json&origin=*`;
  const response = await fetch(api);
  const data = await response.json();
  const pages = data.query?.pages ? Object.values(data.query.pages) : [];
  const page = pages.find(item => item.thumbnail?.source);
  return page?.thumbnail?.source || "";
}

async function loadPoster(img, movie) {
  try {
    const exactTitle = wikiPages[movie.title];
    const poster = exactTitle ? await fetchPosterByTitle(exactTitle) : "";
    const backupPoster = poster || await fetchPosterBySearch(movie);

    if (backupPoster) {
      img.src = backupPoster;
      img.classList.add("is-loaded");
    }
  } catch (error) {
    img.alt = `${movie.title} poster unavailable`;
  }
}

function movieMatches(movie, query, genre) {
  const haystack = `${movie.title} ${movie.genre} ${movie.studio} ${movie.mood} ${movie.description}`.toLowerCase();
  const byQuery = haystack.includes(query.toLowerCase().trim());
  const byGenre = genre === "all" || movie.genre === genre;
  return byQuery && byGenre;
}

function renderMovies() {
  const query = searchInput.value;
  const genre = genreSelect.value;
  const filtered = movies.filter(movie => movieMatches(movie, query, genre));

  grid.innerHTML = filtered.map((movie, index) => `
    <article class="movie-card" style="--accent: ${accents[index % accents.length]}; animation-delay: ${Math.min(index * 0.025, 0.4)}s">
      <div class="poster-wrap">
        <img class="poster-image" src="${getFallbackPoster(movie, index)}" alt="Постер фильма ${movie.title}" loading="lazy" data-poster-index="${index}">
        <div class="card-top">
          <span class="year">${movie.year}</span>
          <span class="rating">${movie.rating.toFixed(1)}</span>
        </div>
      </div>
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>${movie.description}</p>
        <div class="meta">
          <span>${movie.genre}</span>
          <span>${movie.mood}</span>
        </div>
        <a class="watch-btn" href="${getWatchUrl(movie)}" target="_blank" rel="noopener noreferrer">Смотреть</a>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".poster-image").forEach((img, index) => loadPoster(img, filtered[index]));
  emptyState.hidden = filtered.length > 0;
}

function renderTopList() {
  const topMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 10);
  topList.innerHTML = topMovies.map(movie => `
    <li><b>${movie.title}</b><span>${movie.rating.toFixed(1)} / ${movie.genre}</span></li>
  `).join("");
}

renderGenres();
renderMovies();
renderTopList();

searchInput.addEventListener("input", renderMovies);
genreSelect.addEventListener("change", renderMovies);



