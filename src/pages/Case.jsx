// src/pages/Case.jsx
import { useState, useRef } from 'react'

export default function Case() {
  const [result, setResult] = useState(null)
  const [isOpening, setIsOpening] = useState(false)

  // Массив скидок
  const discounts = [1, 3, 5, 7, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
  
  // Создаем ленту с повторениями для плавной прокрутки
  const repetitions = 7
  const longTape = Array(repetitions).fill(discounts).flat()
  
  const tapeRef = useRef(null)
  const itemHeight = 80
  const visibleItems = 5

  const openCase = () => {
    if (isOpening) return

    setIsOpening(true)
    setResult(null)

    // Выбираем случайный индекс в оригинальном массиве скидок
    const winnerOriginalIndex = Math.floor(Math.random() * discounts.length)
    const winningDiscount = discounts[winnerOriginalIndex]
    
    // Находим все позиции этого значения в длинной ленте
    const allPositions = []
    longTape.forEach((value, index) => {
      if (value === winningDiscount) {
        allPositions.push(index)
      }
    })
    
    // Выбираем случайную позицию из середины ленты
    const middleIndex = Math.floor(allPositions.length / 2)
    const winnerIndex = allPositions[middleIndex]
    
    // Рассчитываем целевую позицию, чтобы победитель оказался под стрелкой
    const targetPosition = winnerIndex - Math.floor(visibleItems / 2)
    
    // Минимальная и максимальная прокрутка
    const maxScroll = (longTape.length - visibleItems) * itemHeight
    let scrollTo = targetPosition * itemHeight
    
    if (scrollTo < 0) scrollTo = 0
    if (scrollTo > maxScroll) scrollTo = maxScroll

    if (tapeRef.current) {
      tapeRef.current.style.transition = 'none'
      tapeRef.current.style.transform = 'translateY(0px)'
      
      setTimeout(() => {
        tapeRef.current.style.transition = 'transform 6s cubic-bezier(0.25, 0.1, 0.25, 1)'
        tapeRef.current.style.transform = `translateY(-${scrollTo}px)`

        setTimeout(() => {
          setResult(winningDiscount)
          setIsOpening(false)
          
          // Сохраняем активную скидку
          localStorage.setItem('activeDiscount', winningDiscount)
        }, 6000)
      }, 50)
    }
  }

  const openNewCase = () => {
    setResult(null)
    openCase()
  }

  return (
    <div className="py-12 text-center">
      <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
        Кейс Скидки
      </h1>

      <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
        Открывайте кейс сколько угодно раз и получайте случайную скидку до 100%!
      </p>

      <div className="max-w-lg mx-auto bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border-4 border-yellow-600/50 neon-glow overflow-hidden">
        {result ? (
          <div className="space-y-8">
            <div className="text-8xl font-black text-yellow-400 drop-shadow-2xl animate-bounce">
              {result}%
            </div>
            <p className="text-3xl text-white">Выиграно!</p>
            
            <div className="space-y-4">
              <button
                onClick={() => window.location.href = '/catalog'}
                className="w-full py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-xl rounded-xl hover:brightness-110 hover:scale-105 transition-all"
              >
                Применить скидку в каталоге
              </button>
              
              <button
                onClick={openNewCase}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:brightness-110 hover:scale-105 transition-all"
              >
                Открыть еще раз
              </button>
            </div>
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
              
              <div className="absolute top-1/2 left-0 w-full h-20 border-t-4 border-b-4 border-yellow-400 pointer-events-none transform -translate-y-1/2">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rotate-45"></div>
              </div>
            </div>

            <button
              onClick={openCase}
              disabled={isOpening}
              className={`
                w-full py-6 text-3xl font-bold rounded-2xl transition-all duration-500
                ${isOpening
                  ? 'bg-gray-700 cursor-not-allowed opacity-60'
                  : 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,200,0,0.7)]'
                }
              `}
            >
              {isOpening ? 'Прокрутка...' : 'Открыть кейс'}
            </button>
          </>
        )}
      </div>

      <p className="mt-12 text-gray-500 text-sm">
        Открывайте кейс сколько угодно раз!
      </p>
    </div>
  )
}