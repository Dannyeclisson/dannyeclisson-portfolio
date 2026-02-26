import Image from "next/image";
import StackItem from "@/components/StackItem";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className="pt-28 min-h-screen bg-zinc-950 text-zinc-100 px-6 md:px-16 py-20">

      {/* HERO */}
      <section className="max-w-4xl mx-auto mb-28">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Dannyeclisson Rodrigo
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 mb-8 leading-relaxed">
          Desenvolvedor com foco em engenharia de sistemas e backend,
          atuando em modelagem de dados, organização estrutural de bases legadas
          e evolução de sistemas corporativos críticos.
          Experiência também em validação e simulação de sistemas embarcados
          para drones autônomos.
        </p>

        <div className="flex gap-4 text-sm text-zinc-500 flex-wrap">
          <span>Estagiário no Serpro</span>
          <span>•</span>
          <span>Controle e Sistemas Embarcados - Edra UnB</span>
          <span>•</span>
          <span>Backend & Modelagem de Dados</span>
        </div>
      </section>


      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="max-w-6xl mx-auto mb-32">
        <h2 className="text-2xl font-semibold mb-16 text-blue-400">
          Experiência
        </h2>

        <div className="space-y-32">

          {/* SERPRO */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* TEXTO */}
            <div>
              <h3 className="text-xl font-semibold mb-1">(Serpro) Serviço Federal de Processamento de Dados</h3>
              <p className="text-xs text-zinc-500 mb-6">
                Estágio em Desenvolvimento Backend • Mai/2024 – Atual
              </p>

              <div className="text-zinc-400 text-sm leading-relaxed space-y-4">
                <p>
                  Atuação em sistema corporativo crítico utilizado no fechamento contábil institucional.
                  Análise e revisão do modelo Entidade-Relacionamento em base de dados legada,
                  propondo padronização estrutural de tabelas e colunas visando
                  maior consistência e manutenibilidade.
                </p>

                <p>
                  Participação na migração de dados de sistema descontinuado,
                  amplamente utilizado pela Receita Federal, garantindo
                  integridade estrutural e adaptação às novas regras de negócio.
                </p>
              </div>
            </div>

            {/* IMAGEM */}
            <div className="grid grid-cols-2 gap-4 w-full h-64 md:order-1 order-2">

              <div className="relative rounded-lg overflow-hidden group">
                <Image
                  src="/images/Serpro-Cracha2.png"
                  alt="Cracha de Estagiário Serpro"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative rounded-lg overflow-hidden group">
                <Image
                  src="/images/Serpro-Sede.jpeg"
                  alt="Entrada da Sede do Serpro"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

            </div>

          </div>


          {/* EDRA */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGEM */}
            <div className="grid grid-cols-2 gap-4 w-full h-64 md:order-1 order-2">

              <div className="relative rounded-lg overflow-hidden group">
                <Image
                  src="/images/Drones-Edra.jpeg"
                  alt="Drone em montagem"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative rounded-lg overflow-hidden group">
                <Image
                  src="/images/Edra-logo.png"
                  alt="Simulação de voo autônomo"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

            </div>

            {/* TEXTO */}
            <div className="md:order-2 order-1">
              <h3 className="text-xl font-semibold mb-1">Edra UnB</h3>
              <p className="text-xs text-zinc-500 mb-6">
                Equipe de Competição em Robótica • Sistemas Embarcados
              </p>

              <div className="text-zinc-400 text-sm leading-relaxed space-y-4">
                <p>
                  Migração da área de marketing para o núcleo técnico de
                  controles e sistemas embarcados, atuando no desenvolvimento
                  e validação de drones autônomos em competições de robótica.
                </p>

                <p>
                  Participação em montagem física, testes de voo e simulação
                  de missões autônomas envolvendo navegação e transporte de cargas.
                </p>

                <p>
                  Desenvolvimento de ambientes de simulação 3D containerizados
                  com Docker para testes reprodutíveis de algoritmos
                  de planejamento de trajetória.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* STACK TÉCNICA */}
      <section id="stack" className="max-w-5xl mx-auto mb-28">
        <h2 className="text-2xl font-semibold mb-10 text-blue-400">
          Stack Técnica
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-sm">

          {/* BACKEND */}
          <div>
            <h4 className="font-semibold mb-5">Backend</h4>
            <div className="space-y-4">
              <StackItem src="/images/stack/php.svg" name="PHP" />
              <StackItem src="/images/stack/python.svg" name="Python" />
              <StackItem src="/images/stack/ruby.svg" name="Ruby" />
            </div>
          </div>

          {/* FRONTEND */}
          <div>
            <h4 className="font-semibold mb-5">Frontend</h4>
            <div className="space-y-4">
              <StackItem src="/images/stack/react.svg" name="React" />
              <StackItem src="/images/stack/nextdotjs.svg" name="Next.js" />
            </div>
          </div>

          {/* BANCO */}
          <div>
            <h4 className="font-semibold mb-5">Banco de Dados</h4>
            <div className="space-y-4">
              <StackItem src="/images/stack/mysql.svg" name="SQL / MySQL" />
              <StackItem src="/images/stack/postgresql.svg" name="PostgresSQL" />
            </div>            
          </div>

          {/* FERRAMENTAS */}
          <div>
            <h4 className="font-semibold mb-5">Ferramentas</h4>
            <div className="space-y-4">
              <StackItem src="/images/stack/docker.svg" name="Docker" />
              <StackItem src="/images/stack/git.svg" name="Git" />
            </div>
          </div>

        </div>
      </section>
      

      {/* CONTATO */}
      <section id="contato" className="max-w-4xl mx-auto">
        <div className="flex gap-8 text-sm text-zinc-400">

          <a
            href="https://github.com/Dannyeclisson"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <FaGithub size={16} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dannyeclisson-rodrigo-828893283/"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>

          <a
            href="mailto:dannyeclissonrodrigo@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <MdEmail size={16} />
            dannyeclissonrodrigo@gmail.com
          </a>

        </div>
      </section>

    </main>
  );
}