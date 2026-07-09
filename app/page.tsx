import Image from "next/image";
import StackItem from "@/components/StackItem";
import type { ReactNode } from "react";

import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const featuredProject = {
  name: "Rizzo Implantes",
  type: "Landing page institucional",
  context: "Clínica odontológica em Planaltina-DF",
  goal: "Captação de pacientes e agendamento via WhatsApp",
  url: "https://rizzoimplantes.com",
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
  deliveries: [
    "Página responsiva para apresentação da marca, tratamentos e canais de contato.",
    "Carrosséis para hero e casos clínicos.",
    "FAQ interativo, menu mobile e integração com Google Maps.",
    "CTAs direcionados para conversão e atendimento pelo WhatsApp.",
  ],
};

const technicalProjects = [
  {
    name: "SIGES / Migração SISFAT → SIGES",
    type: "Projeto corporativo interno",
    stack: ["PHP", "Laravel", "MySQL", "Modelagem ER"],
    focus:
      "CRUDs, modelagem ER, scripts de migração e manutenção de sistema corporativo.",
    note: "Sem repositório público por se tratar de sistema corporativo interno.",
  },
  {
    name: "ONAC",
    type: "Projeto corporativo interno",
    stack: ["Angular", "Java", "Spring Boot", "PostgreSQL"],
    focus:
      "Validações, testes, acessibilidade e melhorias em sistema web corporativo.",
    note: "Sem repositório público por se tratar de sistema corporativo interno.",
  },
  {
    name: "Irrigação Automatizada",
    type: "Projeto acadêmico / embarcado",
    stack: ["Arduino", "Sensores", "Relé", "Automação"],
    focus:
      "Automação baseada em umidade do solo com leitura de sensores e acionamento de bomba.",
  },
];

const experiences = [
  {
    organization: "SERPRO - Serviço Federal de Processamento de Dados",
    role: "Estágio em Desenvolvimento",
    period: "Mai/2024 - Mai/2026",
    stack: [
      "PHP",
      "Laravel",
      "MySQL",
      "Angular",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
    ],
    groups: [
      {
        title: "SIGES / Migração SISFAT → SIGES",
        bullets: [
          "Desenvolvimento de CRUDs, formulários e funcionalidades em PHP.",
          "Modelagem e criação de tabelas SQL para sistema de gestão contratual e faturamento.",
          "Elaboração de modelos ER e padronização estrutural do banco de dados.",
          "Apoio na migração de regras, dados históricos, filtros e funcionalidades do SISFAT para o SIGES.",
        ],
      },
      {
        title: "ONAC - Observatório Nacional de Antifraude Cibernética",
        bullets: [
          "Atuação em sistema web com Java, Spring Boot, Angular, TypeScript, Docker e PostgreSQL.",
          "Desenvolvimento de testes unitários e cenários de teste para componentes frontend.",
          "Implementação de validações de campos e ajustes de usabilidade.",
          "Melhorias de acessibilidade seguindo diretrizes WCAG e compatibilidade com leitores de tela.",
        ],
      },
    ],
  },
  {
    organization: "PIL@B UnB",
    role: "Desenvolvimento de Sistemas Embarcados",
    period: "Fev/2025 - Atual",
    stack: ["Arduino", "Sensores", "Relé", "Automação"],
    groups: [
      {
        title: "Projetos acadêmicos de automação",
        bullets: [
          "Desenvolvimento de lógica embarcada para leitura de sensores e controle de atuadores.",
          "Integração de sensores físicos com Arduino para processamento em tempo real.",
          "Construção de sistema automatizado de irrigação baseado em umidade do solo.",
        ],
      },
    ],
  },
  {
    organization: "EDRA UnB",
    role: "Equipe de Competição em Robótica",
    period: "Mai/2024 - Mai/2025",
    stack: ["Sistemas embarcados", "Docker", "Simulação 3D", "Drones autônomos"],
    groups: [
      {
        title: "Controles e sistemas embarcados",
        bullets: [
          "Migração da área de marketing para o núcleo técnico de controles e sistemas embarcados.",
          "Participação em montagem física, testes de voo e simulação de missões autônomas.",
          "Uso de ambientes de simulação 3D containerizados com Docker para testes reprodutíveis.",
        ],
      },
    ],
  },
];

const stackGroups = [
  {
    title: "Frontend",
    items: [
      { name: "Angular" },
      { name: "TypeScript" },
      { src: "/images/stack/react.svg", name: "React" },
      { src: "/images/stack/nextdotjs.svg", name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    items: [
      { src: "/images/stack/php.svg", name: "PHP" },
      { name: "Laravel" },
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Banco de Dados",
    items: [
      { src: "/images/stack/mysql.svg", name: "MySQL" },
      { src: "/images/stack/postgresql.svg", name: "PostgreSQL" },
      { name: "SQL" },
      { name: "Modelagem ER" },
    ],
  },
  {
    title: "Ferramentas",
    items: [
      { src: "/images/stack/docker.svg", name: "Docker" },
      { src: "/images/stack/git.svg", name: "Git" },
      { name: "GitHub" },
      { name: "Linux" },
      { name: "Vercel" },
    ],
  },
  {
    title: "Embarcados",
    items: [
      { name: "Arduino" },
      { name: "Sensores" },
      { name: "Relés" },
      { name: "Automação" },
    ],
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
        {eyebrow}
      </p>
      <h2 className="mb-4 text-2xl font-semibold text-blue-400 md:text-3xl">
        {title}
      </h2>
      <p className="text-lg leading-relaxed text-zinc-400">{description}</p>
    </div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-zinc-700 bg-zinc-950/50 px-3 py-1 text-sm text-zinc-300">
      {children}
    </span>
  );
}

function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded border border-blue-400/70 bg-blue-400/10 px-5 py-3 text-sm font-semibold text-blue-200 transition-colors hover:border-blue-300 hover:bg-blue-400/20"
    >
      {children}
    </a>
  );
}

function SecondaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 pt-28 text-zinc-100 md:px-16">
      <section id="inicio" className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-6xl items-center pb-20">
        <div className="grid w-full items-center gap-10 md:grid-cols-[1fr_15rem] lg:grid-cols-[1fr_18rem]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Desenvolvedor Full Stack Júnior em formação
            </p>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-50 md:text-6xl">
              Dannyeclisson Rodrigo
            </h1>

            <p className="mb-8 max-w-4xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
              Estudante de Engenharia de Software na UnB, com experiência em
              sistemas corporativos no SERPRO, projetos web para clientes reais
              e prática com frontend, backend, banco de dados e sistemas embarcados.
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <Chip>Sistemas corporativos</Chip>
              <Chip>Projetos web</Chip>
              <Chip>Frontend e backend</Chip>
              <Chip>Sistemas embarcados</Chip>
            </div>

            <div className="flex flex-wrap gap-3">
              <PrimaryLink href="#projetos">Ver projetos</PrimaryLink>
              <SecondaryLink href="#contato">Entrar em contato</SecondaryLink>
            </div>
          </div>

          <div className="relative h-44 w-44 justify-self-start overflow-hidden rounded-full border border-zinc-800 md:h-56 md:w-56 md:justify-self-end">
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

      <section id="projetos" className="mx-auto mb-32 max-w-6xl scroll-mt-24">
        <SectionHeader
          eyebrow="Projetos em destaque"
          title="Projetos com contexto real de entrega"
          description="Trabalhos que demonstram atuação prática em produto web, sistemas corporativos e automação."
        />

        <article className="mb-8 grid overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/40 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-b border-zinc-800 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-950 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 truncate rounded bg-zinc-900 px-3 py-1 text-xs text-zinc-500">
                rizzoimplantes.com
              </span>
            </div>

            <div className="hidden bg-[#08111f] md:block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <iframe
                  src={featuredProject.url}
                  title="Preview do site Rizzo Implantes"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full scale-[0.7] origin-top-left border-0 bg-white lg:scale-[0.76]"
                  style={{ width: "142.86%", height: "142.86%" }}
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
              </div>
            </div>

            <div className="bg-[#08111f] p-5 md:hidden">
              <div className="rounded border border-zinc-700 bg-zinc-950 p-5">
                <p className="mb-2 text-sm font-semibold text-zinc-200">
                  {featuredProject.name}
                </p>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Projeto publicado para cliente real, com navegação otimizada
                  para acessar diretamente no navegador móvel.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              {featuredProject.type}
            </p>
            <h3 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-50">
              {featuredProject.name}
            </h3>

            <dl className="mb-6 grid gap-4 text-sm text-zinc-400 sm:grid-cols-2">
              <div>
                <dt className="mb-1 font-semibold text-zinc-200">Contexto</dt>
                <dd>{featuredProject.context}</dd>
              </div>
              <div>
                <dt className="mb-1 font-semibold text-zinc-200">Objetivo</dt>
                <dd>{featuredProject.goal}</dd>
              </div>
            </dl>

            <ul className="mb-6 space-y-3 text-base leading-relaxed text-zinc-400">
              {featuredProject.deliveries.map((delivery) => (
                <li key={delivery} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  <span>{delivery}</span>
                </li>
              ))}
            </ul>

            <div className="mb-8 flex flex-wrap gap-2">
              {featuredProject.stack.map((technology) => (
                <Chip key={technology}>{technology}</Chip>
              ))}
            </div>

            <a
              href={featuredProject.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-blue-400/60 px-5 py-3 text-sm font-semibold text-blue-300 transition-colors hover:border-blue-300 hover:bg-blue-400/10 hover:text-blue-200"
            >
              Acessar projeto
              <FaExternalLinkAlt size={13} />
            </a>
          </div>
        </article>

        <div className="grid gap-4 md:grid-cols-3">
          {technicalProjects.map((project) => (
            <article
              key={project.name}
              className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                {project.type}
              </p>
              <h3 className="mb-4 text-xl font-semibold text-zinc-50">
                {project.name}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                {project.focus}
              </p>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <Chip key={technology}>{technology}</Chip>
                ))}
              </div>
              {project.note && (
                <p className="border-t border-zinc-800 pt-4 text-sm leading-relaxed text-zinc-500">
                  {project.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="experiencia" className="mx-auto mb-32 max-w-6xl scroll-mt-24">
        <SectionHeader
          eyebrow="Experiência profissional"
          title="Atuação prática em ambientes técnicos"
        />

        <div className="space-y-6">
          {experiences.map((experience) => (
            <article
              key={experience.organization}
              className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 md:p-8"
            >
              <div className="mb-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <h3 className="mb-2 text-2xl font-semibold text-zinc-50">
                    {experience.organization}
                  </h3>
                  <p className="text-zinc-400">{experience.role}</p>
                </div>
                <p className="rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-400">
                  {experience.period}
                </p>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {experience.stack.map((technology) => (
                  <Chip key={technology}>{technology}</Chip>
                ))}
              </div>

              <div className="space-y-6">
                {experience.groups.map((group) => (
                  <div
                    key={group.title}
                    className="border-t border-zinc-800 pt-6 first:border-t-0 first:pt-0"
                  >
                    <h4 className="mb-4 font-semibold text-zinc-200">{group.title}</h4>
                    <ul className="grid gap-3 text-sm leading-relaxed text-zinc-400 md:grid-cols-2">
                      {group.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="mx-auto mb-32 max-w-6xl scroll-mt-24">
        <SectionHeader
          eyebrow="Stack técnica"
          title="Tecnologias que já tive contato"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {stackGroups.map((group) => (
            <div key={group.title} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
              <h3 className="mb-4 font-semibold text-zinc-100">{group.title}</h3>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <StackItem key={item.name} src={item.src} name={item.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl scroll-mt-24">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 md:p-8">
          <SectionHeader
            eyebrow="Contato"
            title="Aberto a oportunidades e projetos web"
            description="Busco oportunidades como desenvolvedor júnior, estágio ou projetos web com foco em entrega objetiva e evolução técnica."
          />

          <div className="flex flex-wrap gap-4 text-base text-zinc-400">
            <a
              href="https://github.com/Dannyeclisson"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-zinc-700 px-4 py-3 transition-colors hover:border-blue-400 hover:text-blue-300"
            >
              <FaGithub size={16} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/dannyeclisson-rodrigo-828893283/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-zinc-700 px-4 py-3 transition-colors hover:border-blue-400 hover:text-blue-300"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>

            <a
              href="mailto:dannyeclissonrodrigo@gmail.com"
              className="inline-flex items-center gap-2 rounded border border-zinc-700 px-4 py-3 transition-colors hover:border-blue-400 hover:text-blue-300"
            >
              <MdEmail size={16} />
              dannyeclissonrodrigo@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
