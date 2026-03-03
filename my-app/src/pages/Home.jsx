function Home() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-6">Добро пожаловать в Game Platform!</h2>
      <p className="text-xl mb-8">
        Здесь ты можешь купить лучшие игры по низким ценам.
      </p>
      <a
        href="/catalog"
        className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg hover:bg-green-600"
      >
        Перейти в каталог
      </a>
    </div>
  );
}

export default Home;