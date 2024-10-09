export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl">Meu Site</h1>
      </header>

      <main className="">
        {/* Banner */}
        <section className="bg-gray-950 text-white p-10 text-center md:mx-auto ">
          <h2 className="text-3xl ">Bem-vindo à Nossa Landing Page</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>

        {/* Sessão de Cards */}
        <section className="p-10 container mx-auto">
          <h2 className="text-2xl mb-6">Nossos Serviços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white shadow-lg p-6 rounded-lg">
                <h3 className="text-xl mb-4 text-neutral-900">Card {item}</h3>
                <p className="text-neutral-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum commodi, iste quo, temporibus totam consequuntur ipsa incidunt aut qui nihil hic recusandae placeat laboriosam soluta assumenda sapiente? Delectus, itaque est!</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                  Saiba Mais 
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Sessão de Conteúdo */}
        <section className="bg-gray-100 p-10 text-center text-neutral-900">
          <h2 className="text-2xl mb-4">Mais Informações</h2>
          <p>
            Lorem ipsum, dolor sit amet <a href="#"> consectetur</a> adipisicing elit. Ipsum commodi, iste quo, temporibus totam consequuntur ipsa incidunt aut qui nihil hic recusandae placeat laboriosam soluta assumenda sapiente? Delectus, itaque est! e? Delectus, itaque est!
            Lorem ipsum, dolor sit amet <a href="#"> consectetur</a> adipisicing elit. Ipsum commodi, iste quo, temporibus totam consequuntur ipsa incidunt aut qui nihil hic recusandae placeat laboriosam soluta assumenda sapiente? Delectus, itaque est!e? Delectus, itaque est!
           
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 Meu Site. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
