export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">
        Hola, soy <span className="text-blue-600">Rodrigo</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-xl">
        Desarrollador web especializado en interfaces modernas y experiencias digitales atractivas.
      </p>
      <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Ver proyectos
      </button>
    </section>
  );
}
