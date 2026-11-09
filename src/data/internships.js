// Newest first. Leave `end` as null for an ongoing internship.
export const internships = [
  {
    id: "giba",
    role: {
      en: "Data Engineering & Business Intelligence Intern",
      fr: "Stagiaire en ingénierie des données et Business Intelligence",
    },
    company: "GIBA Group",
    context: {
      en: "Industrial holding of 10+ companies, including Guedila Biskra",
      fr: "Holding industrielle de plus de 10 entreprises, dont Guedila Biskra",
    },
    start: "2026-07",
    end: null,
    points: {
      en: [
        "Built ELT pipelines from the Sage X3 ERP into a SQL Server data warehouse with Airbyte, Airflow and dbt.",
        "Defined the group's data governance framework (16 principles adapted from established frameworks) and its implementation action plan.",
        "Developed the full set of Power BI dashboards for the Production department, now in use.",
      ],
      fr: [
        "Construction de pipelines ELT depuis l'ERP Sage X3 vers un entrepôt de données SQL Server avec Airbyte, Airflow et dbt.",
        "Définition du cadre de gouvernance des données du groupe (16 principes adaptés de référentiels reconnus) et de son plan d'action.",
        "Développement de l'ensemble des tableaux de bord Power BI du département Production, aujourd'hui en service.",
      ],
    },
    tags: ["Airbyte", "Airflow", "dbt", "SQL Server", "Power BI", "Sage X3"],
  },
  {
    id: "bnp",
    role: {
      en: "AI & Data Science Intern",
      fr: "Stagiaire en IA et science des données",
    },
    company: "BNP Paribas El Djazair",
    context: {
      en: "Headquarters, Algiers",
      fr: "Siège, Alger",
    },
    start: "2026-08",
    end: "2026-09",
    points: {
      en: [
        "Built an XGBoost model forecasting daily attendance at the headquarters canteen, using an asymmetric loss that penalises under-prediction to prevent shortages while cutting food waste.",
        "Delivered the model in a full desktop application as a team of 4; currently under security review for deployment.",
      ],
      fr: [
        "Construction d'un modèle XGBoost de prévision de la fréquentation quotidienne de la cantine du siège, avec une perte asymétrique qui pénalise la sous-estimation pour éviter les pénuries tout en réduisant le gaspillage alimentaire.",
        "Livraison du modèle dans une application de bureau complète, en équipe de 4 ; actuellement en revue de sécurité avant déploiement.",
      ],
    },
    tags: ["XGBoost", "Forecasting", "Desktop App"],
  },
]
