import { Component, computed, inject, signal } from '@angular/core';
import { NavbarC } from './components/navbar-c/navbar-c';
import { DownloadCvC } from './shared/components/download-cv-c/download-cv-c';
import { ExternalLinkC } from './sections/welcome/components/external-link-c/external-link-c';
import { SvgIconC } from './shared/components/svg-icon-c/svg-icon-c';
import { IconLink } from './shared/interface/icons';
import { AnimatedArrowDownC } from './shared/components/animated-arrow-down-c/animated-arrow-down-c';

import { TitleArrowsWrapperC } from './shared/components/title-arrows-wrapper-c/title-arrows-wrapper-c';
import { ScreenSizeS } from './shared/services/screen-size-s';
import { CardExperienceCompanyC } from './sections/experience/components/card-experience-company-c/card-experience-company-c';
import { CardExperince } from './sections/experience/components/card-experience-company-c/card-experience-company-interface';
import { StackCardC } from './sections/stack/components/stack-card-c/stack-card-c';
import { StackCard } from './sections/stack/components/stack-card-c/stack-card-interface';
import { HighlightPipe } from './shared/pipes/highlight-pipe';
import { CardStudy } from './sections/about-me/card-study-c/card-study-interface';
import { CardStudyC } from './sections/about-me/card-study-c/card-study-c';
import { TitleFooterArrowWrapperC } from './sections/footer/title-footer-arrow-wrapper-c/title-footer-arrow-wrapper-c';
import { TitleCasePipe } from '@angular/common';
import { ProjectData } from './shared/interface/project.interface';
import { CardProjectC } from './shared/components/card-project-c/card-project-c';

@Component({
  selector: 'app-root',
  imports: [
    NavbarC,
    DownloadCvC,
    ExternalLinkC,
    SvgIconC,
    AnimatedArrowDownC,
    CardExperienceCompanyC,
    TitleArrowsWrapperC,
    StackCardC,
    HighlightPipe,
    CardStudyC,
    TitleFooterArrowWrapperC,
    TitleCasePipe,
    CardProjectC,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private screenSizeS = inject(ScreenSizeS);

  preferredStack = signal<IconLink[]>([
    {
      name: 'html',
      link: 'https://developer.mozilla.org/es/docs/Web/HTML',
    },
    {
      name: 'css',
      link: 'https://developer.mozilla.org/es/docs/Web/CSS',
    },
    {
      name: 'tailwind',
      link: 'https://tailwindcss.com/',
    },
    {
      name: 'angular',
      link: 'https://angular.dev/',
    },
    {
      name: 'node',
      link: 'https://nodejs.org/es',
    },
    {
      name: 'express',
      link: 'https://expressjs.com/es/',
    },
    {
      name: 'mysql',
      link: 'https://www.mysql.com/',
    },
  ]);

  clientProjectsData = signal<ProjectData[]>([
    {
      title: 'Cerrajería Express',
      description:
        'Single Page Application (SPA) de alto rendimiento diseñada bajo requerimientos específicos de negocio. Desarrollo "Pixel Perfect" con enfoque en adaptabilidad total (responsive) y optimización de conversión para servicios de urgencia inmediata.',
      image: 'projects/cerrajeroexpress.webp',
      techStack: ['angular', 'tailwind', 'ts'],
      link: 'https://www.cerrajeroexpress.com/',
    },
  ]);

  personalProjectsData = signal<ProjectData[]>([
    {
      title: 'Tock Music',
      description:
        'Plataforma de streaming personal con gestión de biblioteca en la nube. Incluye procesamiento de audio con FFmpeg (transcodificación a Opus), sistema de subida secuencial con seguimiento de progreso y estado reactivo avanzado para una reproducción fluida.',
      image: 'projects/tock-music.webp',
      techStack: ['angular', 'tailwind', 'express', 'mysql', 'prisma', 'ts'],
      link: 'https://tock-music.agussantos.dev/auth/login',
    },
  ]);

  experienceCompanyData = signal<CardExperince[]>([
    {
      title: 'Desarrollador Full Stack + Nytelweb',
      dates: 'Mar 2025 - Jun 2025',
      data: [
        'Habilidades validadas en el stack (-{Laravel 12}-, -{Angular 19}-, -{MySQL}-) mediante proyectos iniciales para superar la evaluación técnica -{.}-',
        'Implementación de nuevas funcionalidades en productos existentes, trabajando en -{backend}- (PHP/Laravel) y -{frontend}- (Angular) -{.}-',
        'Desarrollo de componentes de interfaz con Angular, Tailwind CSS y PrimeNG -{.}-',
        'Liderazgo de un -{proyecto estratégico completo}-, gestionando desde la concepción hasta la implementación final -{.}-',
        'Gestión de -{requisitos del cliente}- para asegurar una implementación exitosa y alineada con objetivos -{.}-',
        'Colaboración con el equipo usando -{ClickUp}- (planificación) y -{Git}- (control de versiones y Code Reviews) -{.}-',
      ],
      stack: [
        'html',
        'css',
        'angular',
        'tailwind',
        'primeng',
        'ionic',
        'php',
        'laravel',
        'mysql',
        'git',
        'github',
        'clickup',
        'xampp',
      ],
    },
    {
      title: 'Técnico Informático + Hilfsdienst',
      dates: 'Mar 2023 -Jun 2023',
      data: [
        'Diagnóstico y resolución eficaz de incidencias complejas de -{hardware}- y -{software}- -{.}-',
        'Optimización del -{rendimiento}- y aseguramiento de la continuidad operativa de los sistemas -{.}-',
        'Gestión de la comunicación directa con clientes para -{entender problemas}- y traducir requisitos técnicos -{.}-',
        'Capacidad para garantizar la completa satisfacción del cliente con el servicio ofrecido -{.}-',
        'Realización de -{mantenimientos preventivos}- en equipos para minimizar averías y asegurar un rendimiento óptimo a largo plazo -{.}-',
      ],
      stack: ['cpu', 'gears', 'memory', 'virtualbox', 'debian', 'linux'],
    },
  ]);

  learningData = signal<StackCard>({
    title: 'aprendiendo',
    nameIcons: ['vitest', 'mongodb', 'postgresql', 'tauri'],
  });

  stackData = signal<StackCard[]>([
    {
      title: 'frontend',
      nameIcons: [
        'html',
        'css',
        'js',
        'ts',
        'angular',
        'tailwind',
        'primeng',
        'jquery',
        'bootstrap',
        'ionic',
      ],
    },
    {
      title: 'backend',
      nameIcons: [
        'node',
        'express',
        'prisma',
        'mysql',
        'php',
        'laravel',
        'codeigniter',
        'jwt',
        'json',
      ],
    },
    {
      title: 'devops',
      nameIcons: ['docker', 'git', 'github', 'dokploy', 'netlify'],
    },
    {
      title: 'herramientas',
      nameIcons: ['vscode', 'xampp', 'laragon', 'postman', 'trello', 'penpot', 'figma', 'obsidian'],
    },
  ]);

  aboutMeData = signal<string[][]>([
    [
      `Soy un desarrollador que cree firmemente en la -{estabilidad}- y la -{constancia}-. Mi formación como Técnico en Telecomunicaciones me dio una -{metodología lógica}- que hoy aplico al software para desgranar problemas complejos hasta encontrar la solución más limpia-{.}-`,

      `No me limito a escribir código; busco entender cómo encajan todas las piezas del puzle tecnológico. Mi enfoque estratégico me permite priorizar la -{eficiencia}- y el rendimiento, asegurando que cada funcionalidad aporte valor real al producto final-{.}-`,
    ],
    [
      `Tengo una obsesión sana por el detalle y el -{pixel perfect}-. El uso de -{Angular}- y -{Tailwind}- me permite cuidar la armonía visual sin sacrificar la funcionalidad, logrando interfaces que son tan robustas por dentro como elegantes por fuera-{.}-`,

      `Mi objetivo es evolucionar en entornos -{desafiantes}- y colaborativos. Me entusiasma adoptar nuevas prácticas de la industria y contribuir a equipos donde la -{calidad técnica}- y el crecimiento mutuo sean la prioridad-{.}-`,
    ],
  ]);

  studiesData = signal<CardStudy[]>([
    {
      title: 'Desarrollador De Aplicaciones Web',
      level: 'Grado Superior',
      date: '2023 - 2025',
      text: [
        `Formación especializada en el ecosistema -{Full Stack}- en el I.E.S. Albor Croft, consolidando un perfil técnico orientado a la resolución de problemas mediante arquitecturas modernas-{.}-`,

        `Dominio del -{Front-End}- con -{Angular 21}- y Tailwind/Bootstrap, junto a un sólido desarrollo de -{Back-End}- en -{Node}- utilizando frameworks como -{Express}- con bases de datos -{MySQL}-.`,

        `Proyecto de Fin de Grado (-{TFG}-) reconocido con la -{máxima calificación}-: una aplicación integral construida con Angular y Laravel, gestionada bajo metodología -{SCRUM}- y control de versiones con -{Git Flow}-.`,
      ],
    },
    {
      title: 'Técnico En Telecomunicaciones',
      level: 'Grado Medio',
      date: '2021 - 2023',
      text: [
        `Desarrollo de una base analítica centrada en el -{diagnóstico lógico}- y la resolución de incidencias en sistemas complejos, optimizando el rendimiento y asegurando la continuidad operativa -{.}-`,

        `Experiencia en -{planificación técnica}- y ejecución de proyectos de infraestructura, adquiriendo competencias críticas en la gestión de estructuras y el -{seguimiento riguroso}- de especificaciones de diseño.`,
      ],
    },
  ]);

  iconSizeMultiplier = computed(() => {
    const isMobile = this.screenSizeS.isMobile();

    return !isMobile ? 1.4 : 1;
  });
}
