// src/pages/Case.jsx
import { useState, useEffect, useRef } from 'react'

export default function Case() {
  const [result, setResult] = useState(null)
  const [isOpening, setIsOpening] = useState(false)
  const [canOpen, setCanOpen] = useState(false)
  const [message, setMessage] = useState('')

  // Массив скидок
  const discounts = [1, 3, 5, 7, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
  const longTape = [...discounts, ...discounts, ...discounts, ...discounts, ...discounts] // длинная лента для прокрутки

  const tapeRef = useRef(null)

  // Проверяем, можно ли открыть кейс (только по таймеру 7 дней)
  useEffect(() => {
    const lastCaseOpen = localStorage.getItem('lastCaseOpen')

    if (!lastCaseOpen) {
      // Никогда не открывался → можно сразу
      setCanOpen(true)
      setMessage('Кейс готов! Откройте его прямо сейчас.')
    } else {
      const daysPassed = (new Date() - new Date(lastCaseOpen)) / (1000 * 60 * 60 * 24)
      if (daysPassed >= 7) {
        setCanOpen(true)
        setMessage('Кейс снова доступен! Откройте его.')
      } else {
        const daysLeft = Math.ceil(7 - daysPassed)
        setCanOpen(false)
        setMessage(`Следующий кейс будет доступен через ${daysLeft} ${daysLeft === 1 ? 'день' : 'дней'}.`)
      }
    }
  }, [])

  const openCase = () => {
    if (!canOpen || isOpening) return

    setIsOpening(true)
    setResult(null)

    // Выбираем победителя заранее
    const winnerIndex = Math.floor(Math.random() * discounts.length)
    const winningDiscount = discounts[winnerIndex]

    // Позиция в ленте (чтобы выиграш остановился в центре)
    const visibleItems = 5
    const finalPosition = longTape.length - visibleItems - winnerIndex - Math.floor(Math.random() * 10) - 5

    // Запуск анимации
    if (tapeRef.current) {
      tapeRef.current.style.transition = 'none'
      tapeRef.current.style.transform = 'translateY(0px)'

      setTimeout(() => {
        tapeRef.current.style.transition = 'transform 6s cubic-bezier(0.25, 0.1, 0.25, 1)'
        tapeRef.current.style.transform = `translateY(-${finalPosition * 80}px)`

        // Показываем результат после анимации
        setTimeout(() => {
          setResult(winningDiscount)
          setIsOpening(false)
          setCanOpen(false)

          localStorage.setItem('lastCaseOpen', new Date().toISOString())
          localStorage.setItem('activeDiscount', winningDiscount)

          alert(`Поздравляем! Вы выиграли скидку ${winningDiscount}%!`)
        }, 6200) // 6 секунд + запас
      }, 100)
    }
  }

  return (
    <div className="py-12 text-center">
      <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
        Кейс Скидки
      </h1>

      <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
        Открывайте кейс каждые 7 дней и получайте случайную скидку до 100%!
      </p>

      <div className="max-w-lg mx-auto bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border-4 border-yellow-600/50 neon-glow overflow-hidden">
        {result ? (
          <div className="space-y-8 animate-bounce-once">
            <div className="text-8xl font-black text-yellow-400 drop-shadow-2xl">
              {result}%
            </div>
            <p className="text-3xl text-white">Выиграно!</p>
            <button
              onClick={() => window.location.href = '/catalog'}
              className="w-full py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-xl rounded-xl hover:brightness-110 hover:scale-105 transition-all"
            >
              Применить скидку в каталоге
            </button>
          </div>
        ) : (
          <>
            <div className="h-80 overflow-hidden relative mb-6 border-2 border-yellow-500/30 rounded-xl bg-black/50">
              <div
                ref={tapeRef}
                className="absolute top-0 left-0 w-full flex flex-col items-center"
                style={{ transform: 'translateY(0px)' }}
              >
                {longTape.map((disc, i) => (
                  <div
                    key={i}
                    className={`
                      h-20 w-full flex items-center justify-center text-3xl font-bold border-b border-gray-700
                      ${disc >= 70 ? 'text-red-400' : disc >= 40 ? 'text-yellow-400' : 'text-cyan-400'}
                    `}
                  >
                    {disc}%
                  </div>
                ))}
              </div>

              <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black to-transparent pointer-events-none" />
              <div className="absolute top-1/2 left-0 w-full h-20 border-t-4 border-b-4 border-yellow-400 pointer-events-none transform -translate-y-1/2" />
            </div>

            <button
              onClick={openCase}
              disabled={!canOpen || isOpening}
              className={`
                w-full py-6 text-3xl font-bold rounded-2xl transition-all duration-500
                ${!canOpen || isOpening
                  ? 'bg-gray-700 cursor-not-allowed opacity-60'
                  : 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,200,0,0.7)]'
                }
              `}
            >
              {isOpening ? 'Прокрутка...' : 'Открыть кейс'}
            </button>

            {message && <p className="mt-6 text-lg text-yellow-300 font-medium">{message}</p>}
          </>
        )}
      </div>

      <p className="mt-12 text-gray-500 text-sm">
        Новый кейс доступен каждые 7 дней
      </p>
    </div>
  )
}