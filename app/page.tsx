import Image from "next/image";
import StackItem from "@/components/StackItem";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className="pt-28 min-h-screen bg-zinc-950 text-zinc-100 px-6 md:px-16 py-20">

      {/* HERO */}
      <section className="max-w-6xl mx-auto min-h-screen flex items-center mb-28">
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Dannyeclisson Rodrigo
            </h1>

            <p className="text-2xl md:text-[28px] text-zinc-400 mb-8 leading-relaxed">
              Estudante de Engenharia de Software na Universidade de Brasilia (UnB),
              com experiencia em desenvolvimento frontend, backend e sistemas corporativos,
              atuando em projetos academicos e ambientes de producao no SERPRO.
            </p>

            <div className="flex gap-4 text-lg text-zinc-500 flex-wrap">
              <span>Desenvolvimento Full Stack - SERPRO</span>
              <span>•</span>
              <span>Angular & TypeScript</span>
              <span>•</span>
              <span>PHP</span>
              <span>•</span>
              <span>Modelagem de Dados SQL</span>
              <span>•</span>
              <span>Sistemas Embarcados - EDRA UnB</span>
            </div>
          </div>

          <div className="relative w-48 h-48 md:w-64 md:h-64 md:mt-2 rounded-full overflow-hidden border border-zinc-800 shrink-0">
            <Image
              src="/images/Profile.jpeg"
              alt="Foto de perfil de Dannyeclisson Rodrigo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>


      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="max-w-6xl mx-auto mb-32 min-h-screen">
        <h2 className="text-2xl font-semibold mb-16 text-blue-400">
          Experiência
        </h2>

        <div className="relative space-y-32">
          <span className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800" />

          {/* SERPRO */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* TEXTO */}
            <div className="md:order-2 order-1">
              <h3 className="text-xl font-semibold mb-1">(Serpro) Serviço Federal de Processamento de Dados</h3>
              <p className="text-base text-zinc-500 mb-6">
                Estágio em Desenvolvimento • Mai/2024 – Mai/2026
              </p>

              <div className="text-zinc-400 text-lg leading-relaxed space-y-4">
                <p>
                  <strong className="text-zinc-200">SIGES (Mai/2024 – Mai/2026):</strong> Desenvolvimento de CRUDs,
                  formulários e funcionalidades em PHP para sistema de gestão contratual e faturamento.
                  Implementação de regras de negócio, modelagem e criação de tabelas SQL, elaboração
                  de modelos ER e padronização estrutural do banco de dados. Participação na migração
                  do sistema legado SISFAT para o SIGES, incluindo análise de regras de negócio, estudo
                  de estruturas legadas, criação de novas funcionalidades, filtros e importação de dados
                  históricos para continuidade operacional do faturamento de circuitos e unidades da
                  Receita Federal.
                </p>

                <p>
                  <strong className="text-zinc-200">ONAC – Observatório Nacional de Antifraude Cibernética (Jan/2026 – Mai/2026): </strong>
                  Atuação em projeto utilizando Java, Spring Boot, Angular, TypeScript, Docker e PostgreSQL.
                  Desenvolvimento de testes unitários, validações de campos e cenários de teste para
                  componentes frontend. Implementação de melhorias de acessibilidade seguindo diretrizes
                  WCAG, garantindo compatibilidade com leitores de tela e melhor usabilidade da plataforma.
                </p>
              </div>
            </div>

            {/* IMAGEM */}
            <div className="grid grid-cols-1 gap-4 w-full h-[28rem] md:h-[32rem] md:order-1 order-2">
              <div className="relative rounded-lg overflow-hidden group">
                <Image
                  src="/images/Serpro-Sede.jpeg"
                  alt="Entrada da Sede do Serpro"
                  fill
                  className="object-cover object-[center_55%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

          </div>


          {/* PIL@B */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGEM */}
            <div className="grid grid-cols-1 gap-4 w-full h-96 md:h-[28rem] md:order-2 order-2">
              <div className="relative rounded-lg overflow-hidden group">
                <Image
                  src="/images/Pilab.jpeg"
                  alt="Pil@b"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* TEXTO */}
            <div className="md:order-1 order-1">
              <h3 className="text-xl font-semibold mb-1">PIL@B UnB</h3>
              <p className="text-base text-zinc-500 mb-6">
                Fev/2025 – Atual
              </p>

              <div className="text-zinc-400 text-lg leading-relaxed space-y-4">
                <p>
                  Atuacao no desenvolvimento de sistemas embarcados utilizando Arduino, com foco em
                  automacao, integracao de sensores e controle de dispositivos fisicos.
                </p>

                <p>
                  Responsavel pela implementacao da logica embarcada dos projetos desenvolvidos no
                  laboratorio, incluindo leitura de sensores, processamento de dados em tempo real e
                  acionamento de atuadores.
                </p>

                <p>
                  Desenvolvimento de sistema automatizado de irrigacao utilizando Arduino Uno, sensor
                  de umidade do solo, rele e bomba d'agua, permitindo monitoramento continuo da umidade
                  e irrigacao automatica baseada em limiares definidos em software.
                </p>
              </div>
            </div>

          </div>


          {/* EDRA */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGEM */}
            <div className="grid grid-cols-1 gap-4 w-full h-80 md:h-96 md:order-1 order-2">
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
              <p className="text-base text-zinc-500 mb-6">
                Equipe de Competição em Robótica • Mai/2024 - Mai/2025
              </p>

              <div className="text-zinc-400 text-lg leading-relaxed space-y-4">
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
      <section id="stack" className="max-w-6xl mx-auto mb-28">
        <h2 className="text-2xl font-semibold mb-10 text-blue-400">
          Stack Técnica
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-lg">

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
      <section id="contato" className="max-w-6xl mx-auto">
        <div className="flex gap-8 text-lg text-zinc-400">

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