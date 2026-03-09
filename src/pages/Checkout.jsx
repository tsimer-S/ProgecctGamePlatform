import { useState } from "react";

function Checkout() {
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Оплата успешно выполнена!");
  };

  return (
    <div className="p-8 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 neon-glow p-8 rounded-xl w-full max-w-md space-y-4"
      >
        <h1 className="text-3xl text-cyan-400 neon-glow mb-4">
          Оплата
        </h1>

        {/* Имя владельца */}
        <input
          type="text"
          placeholder="Имя владельца карты"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded bg-black text-white border border-cyan-400"
        />

        {/* Номер карты */}
        <input
          type="text"
          placeholder="Номер карты"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full p-3 rounded bg-black text-white border border-cyan-400"
        />

        {/* Дата */}
        <input
          type="text"
          placeholder="Дата (MM/YY)"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 rounded bg-black text-white border border-cyan-400"
        />

        {/* CVV */}
        <input
          type="password"
          placeholder="CVV код"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          className="w-full p-3 rounded bg-black text-white border border-cyan-400"
        />

        <button
          type="submit"
          className="btn-neon w-full mt-4"
        >
          Оплатить
        </button>
      </form>
    </div>
  );
}

export default Checkout;