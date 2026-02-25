export default function Home() {
  return (
    <main className="pt-28 min-h-screen bg-zinc-950 text-zinc-100 px-6 md:px-16 py-20">

      {/* HERO */}
      <section className="max-w-4xl mx-auto mb-28">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Dannyeclisson Rodrigo
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 mb-8 leading-relaxed">
          Estudante de Engenharia de Software com foco em desenvolvimento backend,
          integração com bancos SQL e simulação de sistemas embarcados.
        </p>

        <div className="flex gap-4 text-sm text-zinc-500 flex-wrap">
          <span>Estagiário no Serpro</span>
          <span>•</span>
          <span>Controle Embarcado - Edra UnB</span>
          <span>•</span>
          <span>Foco em Sistemas</span>
        </div>
      </section>


      {/* EXPERIÊNCIA */}
      <section id="experiencia"className="max-w-5xl mx-auto mb-28">
        <h2 className="text-2xl font-semibold mb-10 text-blue-400">
          Experiência
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="border border-zinc-800 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Serpro</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Desenvolvimento e manutenção de APIs em PHP,
              integração com bancos SQL, mapeamento de estruturas
              e propostas de padronização para sistemas legados.
            </p>
          </div>

          <div className="border border-zinc-800 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Edra UnB</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Desenvolvimento e validação de sistemas de controle embarcado
              para drones autônomos. Configuração de ambientes de simulação 3D
              com Docker para testes reprodutíveis de algoritmos de navegação.
            </p>
          </div>

        </div>
      </section>


      {/* STACK TÉCNICA */}
      <section id="stack" className="max-w-5xl mx-auto mb-28">
        <h2 className="text-2xl font-semibold mb-10 text-blue-400">
          Stack Técnica
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Backend</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>PHP</li>
              <li>Python</li>
              <li>Ruby</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Frontend</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>React</li>
              <li>Next.js</li>
              <li>TailwindCSS</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Banco de Dados</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>SQL</li>
              <li>Modelagem de Dados</li>
              <li>Padronização de Estruturas</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Simulação & Ferramentas</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>Docker</li>
              <li>Simulação 3D</li>
              <li>Power BI</li>
            </ul>
          </div>
        </div>
      </section>


      {/* PRINCÍPIOS DE ENGENHARIA */}
      <section id="principios" className="max-w-5xl mx-auto mb-28">
        <h2 className="text-2xl font-semibold mb-10 text-blue-400">
          Princípios de Engenharia
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-zinc-400 text-sm">
          <li>• Sistemas backend escaláveis e sustentáveis</li>
          <li>• Consistência e integridade de dados</li>
          <li>• Ambientes reprodutíveis para testes</li>
          <li>• Documentação clara e evolução contínua</li>
        </ul>
      </section>


      {/* CONTATO */}
      <section id="contato" className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">
          Contato
        </h2>

        <p className="text-zinc-400 mb-4">
          Aberto a oportunidades de estágio, pesquisa e desenvolvimento backend.
        </p>

        <div className="flex gap-6 text-sm text-blue-400">
          <a href="https://github.com/Dannyeclisson" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/dannyeclisson-rodrigo-828893283/" className="hover:underline">LinkedIn</a>
          <a href="mailto:dannyeclissonrodrigo@gmail.com" className="hover:underline">
            Email
          </a>
        </div>
      </section>

    </main>
  );
}