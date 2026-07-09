import Image from "next/image";
import StackItem from "@/components/StackItem";
import type { ReactNode } from "react";

import { FaExternalLinkAlt, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const featuredProject = {
  name: "Rizzo Implantes",
  type: "LANDING PAGE PARA CLIENTE",
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
    name: "SIGES / Migração SISFAT -> SIGES",
    type: "SISTEMA CORPORATIVO INTERNO",
    stack: ["PHP", "Laravel", "MySQL", "Modelagem ER"],
    focus:
      "CRUDs, modelagem ER, scripts de migração e manutenção de sistema corporativo.",
    note: "Sem repositório público por se tratar de sistema corporativo interno.",
  },
  {
    name: "ONAC",
    type: "SISTEMA WEB CORPORATIVO",
    stack: ["Angular", "Java", "Spring Boot", "PostgreSQL"],
    focus:
      "Validações, testes, acessibilidade e melhorias em sistema web corporativo.",
    note: "Sem repositório público por se tratar de sistema corporativo interno.",
  },
  {
    name: "IRRIGAÇÃO AUTOMATIZADA",
    type: "PROJETO ACADEMICO",
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
        title: "SIGES / Migração SISFAT -> SIGES",
        bullets: [
          "Desenvolvimento de CRUDs, formulários e funcionalidades em PHP.",
          "Modelagem e criação de tabelas SQL para gestão contratual e faturamento.",
          "Elaboração de modelos ER e padronização estrutural do banco de dados.",
          "Apoio na migração de regras, dados históricos, filtros e funcionalidades legadas.",
        ],
      },
      {
        title: "ONAC - Observatório Nacional de Antifraude Cibernética",
        bullets: [
          "Atuação em sistema web com Java, Spring Boot, Angular, TypeScript, Docker e PostgreSQL.",
          "Desenvolvimento de testes unitários e cenários de teste para componentes frontend.",
          "Implementação de validações de campos e ajustes de usabilidade.",
          "Melhorias de acessibilidade seguindo diretrizes WCAG.",
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
          "Desenvolvimento de lógica embarcada para sensores e atuadores.",
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
          "Migração da área de marketing para o núcleo técnico.",
          "Participação em montagem física, testes de voo e simulação de missões autônomas.",
          "Uso de ambientes de simulação 3D containerizados com Docker.",
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
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl md:mb-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
        {eyebrow}
      </p>
      <h2 className="mb-4 text-2xl font-semibold text-blue-400 md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex max-w-full items-center rounded-full border border-zinc-700 bg-zinc-950/50 px-3 py-1 text-xs leading-5 text-zinc-300 sm:text-sm">
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
      className="inline-flex w-full items-center justify-center rounded border border-blue-400/70 bg-blue-400/10 px-5 py-3 text-sm font-semibold text-blue-200 transition-colors hover:border-blue-300 hover:bg-blue-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:w-auto"
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
      className="inline-flex w-full items-center justify-center rounded border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:w-auto"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-zinc-950 px-5 py-16 pt-24 text-zinc-100 sm:px-6 md:px-16 md:py-20 md:pt-28">
      <section
        id="inicio"
        className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center pb-16 md:pb-20"
      >
        <div className="grid w-full items-center gap-10 md:grid-cols-[minmax(0,1fr)_16rem] lg:grid-cols-[minmax(0,1fr)_22rem]">
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

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryLink href="#projetos">Ver projetos</PrimaryLink>
              <SecondaryLink href="#contato">Entrar em contato</SecondaryLink>
            </div>
          </div>

          <div className="relative h-48 w-48 justify-self-start overflow-hidden rounded-full border border-zinc-800 shadow-2xl shadow-blue-950/25 sm:h-56 sm:w-56 md:h-64 md:w-64 md:justify-self-end lg:h-80 lg:w-80 lg:justify-self-center">
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

      <section id="projetos" className="mx-auto mb-24 max-w-6xl scroll-mt-24 md:mb-32">
        <SectionHeader
          eyebrow="Projetos e entregas"
          title="Soluções aplicadas em web, sistemas corporativos e automação"
        />

        <article className="mb-8 grid overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/40 shadow-2xl shadow-black/20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-b border-zinc-800 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-950 px-4 py-3">
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-red-400" />
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-yellow-400" />
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 truncate rounded bg-zinc-900 px-3 py-1 text-xs text-zinc-500">
                rizzoimplantes.com
              </span>
              <span className="ml-auto hidden text-xs text-zinc-600 sm:inline">
                Preview desktop
              </span>
            </div>

            <div className="hidden bg-[#08111f] md:block">
              <div className="relative aspect-[16/10] overflow-hidden p-4">
                <div className="relative h-full overflow-hidden rounded border border-white/10 bg-white">
                  <iframe
                    src={featuredProject.url}
                    title="Preview do site Rizzo Implantes"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full scale-[0.68] origin-top-left border-0 bg-white lg:scale-[0.74]"
                    style={{ width: "147.06%", height: "147.06%" }}
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
              </div>
            </div>

            <div className="bg-[#08111f] p-4 md:hidden">
              <a
                href={featuredProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded border border-zinc-700 bg-zinc-950 p-5 transition-colors hover:border-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
                aria-label="Abrir o projeto Rizzo Implantes em uma nova aba"
              >
                <p className="mb-2 text-sm font-semibold text-zinc-200">
                  {featuredProject.name}
                </p>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Projeto publicado para cliente real. No mobile, o preview foi
                  substituído por um acesso direto para evitar scroll interno.
                </p>
              </a>
            </div>
          </div>

          <div className="p-5 sm:p-6 md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              {featuredProject.type}
            </p>
            <h3 className="mb-4 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
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

            <ul className="mb-6 space-y-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              {featuredProject.deliveries.map((delivery) => (
                <li key={delivery} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"
                  />
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
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded border border-blue-400/60 px-5 py-3 text-sm font-semibold text-blue-300 transition-colors hover:border-blue-300 hover:bg-blue-400/10 hover:text-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:w-auto"
            >
              Acessar projeto
              <FaExternalLinkAlt aria-hidden="true" size={13} />
            </a>
          </div>
        </article>

        <div className="grid gap-4 md:grid-cols-3">
          {technicalProjects.map((project) => (
            <article
              key={project.name}
              className="flex min-w-0 flex-col rounded-lg border border-zinc-800 bg-zinc-900/40 p-5"
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
                <p className="mt-auto border-t border-zinc-800 pt-4 text-sm leading-relaxed text-zinc-500">
                  {project.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="experiencia" className="mx-auto mb-24 max-w-6xl scroll-mt-24 md:mb-32">
        <SectionHeader
          eyebrow="Experiência profissional"
          title="Vivência prática em projetos corporativos e acadêmicos"
        />

        <div className="space-y-6">
          {experiences.map((experience) => (
            <article
              key={experience.organization}
              className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6 md:p-8"
            >
              <div className="mb-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-zinc-50 md:text-2xl">
                    {experience.organization}
                  </h3>
                  <p className="text-sm text-zinc-400 md:text-base">{experience.role}</p>
                </div>
                <p className="w-fit rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-400">
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
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"
                          />
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

      <section id="stack" className="mx-auto mb-24 max-w-6xl scroll-mt-24 md:mb-32">
        <SectionHeader
          eyebrow="Stack técnica"
          title="Tecnologias presentes na minha experiência"
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {stackGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5"
            >
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
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6 md:p-8">
          <SectionHeader
            eyebrow="Contato"
            title="Aberto a oportunidades e projetos web"
            description="Busco oportunidades como desenvolvedor júnior, estágio ou projetos web com foco em entrega objetiva e evolução técnica."
          />

          <div className="flex flex-col gap-3 text-base text-zinc-400 sm:flex-row sm:flex-wrap">
            <a
              href="https://github.com/Dannyeclisson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded border border-zinc-700 px-4 py-3 transition-colors hover:border-blue-400 hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:justify-start"
            >
              <FaGithub aria-hidden="true" size={16} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/dannyeclisson-rodrigo-828893283/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded border border-zinc-700 px-4 py-3 transition-colors hover:border-blue-400 hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:justify-start"
            >
              <FaLinkedin aria-hidden="true" size={16} />
              LinkedIn
            </a>

            <a
              href="mailto:dannyeclissonrodrigo@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded border border-zinc-700 px-4 py-3 text-center transition-colors hover:border-blue-400 hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:justify-start"
            >
              <MdEmail aria-hidden="true" size={16} />
              <span className="break-all">dannyeclissonrodrigo@gmail.com</span>
            </a>

            <a
              href="/docs/curriculo-dannyeclisson.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="curriculo-dannyeclisson.pdf"
              className="inline-flex items-center justify-center gap-2 rounded border border-zinc-700 px-4 py-3 transition-colors hover:border-blue-400 hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:justify-start"
            >
              <FaFilePdf aria-hidden="true" size={16} />
              Baixar currículo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
