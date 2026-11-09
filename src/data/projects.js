// Project images are imported so a wrong path fails the build instead of breaking live.
import { useLanguage } from "../contexts/LanguageContext"
import skillntell from "../assets/projects/skillntell.webp"
import streetwatch from "../assets/projects/streetwatch-logo.webp"
import antispoof from "../assets/projects/antispoof.webp"
import gestanea from "../assets/projects/gestanea.webp"
import arcade from "../assets/projects/arcade.webp"
import juries from "../assets/projects/juries.webp"
import checkin from "../assets/projects/checkin.webp"
import departments from "../assets/projects/departments.webp"
import algreenia from "../assets/projects/algreenia.webp"
import jobmatch from "../assets/projects/jobmatch.webp"
import dms from "../assets/projects/dms.webp"

const repo = (name) => `https://github.com/islemgouicem/${name}`

export const projects = [
  {
    id: "streetwatch",
    title: "StreetWatch",
    description: {
      en: "Road damage reporting platform. Citizens capture damage from a mobile app, reports land on a public web map, and admins moderate them from a dashboard.",
      fr: "Plateforme de signalement des dégradations routières. Les citoyens les photographient depuis une application mobile, les signalements arrivent sur une carte web publique et sont modérés depuis un tableau de bord.",
    },
    image: streetwatch,
    background: "#f4f5f4",
    tileTop: "-24%",
    category: "ai",
    tags: ["Computer Vision", "Flutter", "FastAPI", "PostGIS", "TensorFlow Lite", "React"],
    github: repo("StreetWatch"),
    demo: "https://street-watch-mu.vercel.app",
  },
  {
    id: "face-attendance",
    title: { en: "Secure Face Attendance", fr: "Présence par reconnaissance faciale" },
    description: {
      en: "Attendance by face recognition, with an anti-spoofing ensemble that rejects printed photos, replays and masks before recognition runs.",
      fr: "Pointage par reconnaissance faciale, avec un ensemble anti-usurpation qui rejette photos imprimées, vidéos rejouées et masques avant la reconnaissance.",
    },
    image: antispoof,
    fit: "contain",
    background: "#ffffff",
    category: "ai",
    tags: ["Computer Vision", "Python", "RetinaFace", "MiniFASNet", "Flutter"],
    github: repo("AntiSpoofing-facial-attendance-system"),
  },
  {
    id: "arcade",
    title: { en: "ARCADE Event Platform", fr: "Plateforme événementielle ARCADE" },
    description: {
      en: "Installable web app that runs a live strategy event: missions, infection zones, a card shop and a leaderboard synced across every role in real time.",
      fr: "Application web installable qui fait tourner un événement de stratégie en direct : missions, zones d'infection, boutique de cartes et classement synchronisé en temps réel pour tous les rôles.",
    },
    image: arcade,
    category: "web",
    tags: ["React", "TypeScript", "Supabase Realtime", "PWA"],
    github: repo("PWA-Arcade-Platform"),
    demo: "https://arcade-platform-pi.vercel.app",
  },
  {
    id: "gestanea",
    title: "Gestanea",
    description: {
      en: "Pregnancy and baby care app with weekly tracking, health logs, appointments and push reminders.",
      fr: "Application de suivi de grossesse et de soins du bébé : suivi hebdomadaire, journal de santé, rendez-vous et rappels.",
    },
    image: gestanea,
    fit: "contain",
    background: "#f7eafa",
    category: "mobile",
    tags: ["Flutter", "Bloc", "Supabase", "FastAPI", "Firebase"],
    github: repo("Gestanea-Pregnancy-Mobile-App"),
  },
  {
    id: "skill-and-tell",
    title: { en: "Skill & Tell Website", fr: "Site de Skill & Tell" },
    description: {
      en: "Official site of ENSIA's Skill & Tell Scientific Club, with a dedicated page for each major event.",
      fr: "Site officiel du club scientifique Skill & Tell de l'ENSIA, avec une page dédiée à chaque grand événement.",
    },
    image: skillntell,
    category: "web",
    tags: ["React", "Vite", "Three.js", "Supabase"],
    github: repo("Skill-and-Tell-official-website"),
    demo: "https://www.skillntell.com",
  },
  {
    id: "juries",
    title: { en: "MobAI Juries Dashboard", fr: "Tableau de bord des jurys MobAI" },
    description: {
      en: "Replaces paper scoring sheets at competitions with structured criteria, automatic totals and a live ranking.",
      fr: "Remplace les feuilles de notation papier en compétition par des critères structurés, des totaux automatiques et un classement en direct.",
    },
    image: juries,
    category: "web",
    tags: ["React", "TypeScript", "Supabase Realtime"],
    github: repo("Juries-Dashboard"),
    demo: "https://mobai-juries.netlify.app",
  },
  {
    id: "check-in",
    title: { en: "Event Check-in System", fr: "Système de check-in événementiel" },
    description: {
      en: "One QR identity per person for event entry, meals and organizer shifts, with duplicate scans blocked.",
      fr: "Une identité QR par personne pour l'entrée, les repas et les créneaux des organisateurs, avec blocage des scans en double.",
    },
    image: checkin,
    category: "web",
    tags: ["React", "TypeScript", "Supabase", "QR"],
    github: repo("check-in-system"),
    demo: "https://snt-checkin-sys.netlify.app/login",
  },
  {
    id: "departments",
    title: { en: "Department Selection Test", fr: "Test de choix de département" },
    description: {
      en: "Quiz that scores new club members and shows the department that fits them best and the one that fits least.",
      fr: "Quiz qui évalue les nouveaux membres du club et indique le département qui leur convient le mieux et celui qui leur convient le moins.",
    },
    image: departments,
    category: "web",
    tags: ["JavaScript", "Scoring"],
    github: repo("Departments_Test"),
    demo: "https://departments-test.vercel.app",
  },
  {
    id: "jobmatch",
    title: { en: "AI Job Matching System", fr: "Système de matching d'emplois par IA" },
    description: {
      en: "Matches job seekers and employers using greedy search, A* and genetic algorithms, with a compatibility score per match.",
      fr: "Met en relation candidats et employeurs grâce à la recherche gloutonne, A* et aux algorithmes génétiques, avec un score de compatibilité par correspondance.",
    },
    image: jobmatch,
    category: "ai",
    tags: ["Search Algorithms", "Python", "Web Development"],
  },
  {
    id: "algreenia",
    title: "Algreenia",
    description: {
      en: "Afforestation platform for Algeria with tree recommendations, local campaigns, irrigation tracking and volunteer management.",
      fr: "Plateforme de reboisement pour l'Algérie : recommandations d'arbres, campagnes locales, suivi de l'irrigation et gestion des bénévoles.",
    },
    image: algreenia,
    category: "web",
    tags: ["AI", "Sustainability", "React", "Node.js"],
  },
  {
    id: "dentist",
    title: { en: "Dental Clinic Manager", fr: "Gestion de cabinet dentaire" },
    description: {
      en: "Windows desktop app for patient records, appointments and billing.",
      fr: "Application de bureau Windows pour les dossiers patients, les rendez-vous et la facturation.",
    },
    image: dms,
    category: "mobile",
    tags: ["Flutter", "Desktop"],
    github: repo("Dentist-Desktop-Management-System"),
  },
]

export const useProjects = () => {
  const { localize } = useLanguage()
  return projects.map((project) => ({
    ...project,
    title: localize(project.title),
    description: localize(project.description),
  }))
}

// Home grid order: the first tile is the large one.
const SELECTED = ["skill-and-tell", "streetwatch", "face-attendance"]

export const useSelectedProjects = () => {
  const all = useProjects()
  return SELECTED.map((id) => all.find((project) => project.id === id))
}
