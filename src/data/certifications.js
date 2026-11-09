import ml from "../assets/certs/ml.webp"
import unsupervised from "../assets/certs/unsupervised.webp"
import sql from "../assets/certs/sql.webp"
import supervised from "../assets/certs/supervised.webp"
import web from "../assets/certs/web.webp"
import js from "../assets/certs/js.webp"
import advanced from "../assets/certs/advanced.webp"
import dataEngineer from "../assets/certs/dea.webp"
import dataScientist from "../assets/certs/dsa.webp"
import opencv from "../assets/certs/opencv.webp"

const fcc = (slug) => `https://freecodecamp.org/certification/fcca84b3f7e-c71e-4661-b1c3-ef0b801be95b/${slug}`

export const certifications = [
  {
    title: "Associate Data Engineer in SQL",
    issuer: "DataCamp",
    date: "2026-09",
    image: dataEngineer,
    skills: ["Data Engineering", "Data Warehousing"],
    credentialUrl: "https://www.datacamp.com/certificate/DEA0016089763386",
    verified: true,
  },
  {
    title: "OpenCV Bootcamp",
    issuer: "OpenCV University",
    date: "2025-08",
    image: opencv,
    skills: ["OpenCV", "Computer Vision"],
    credentialUrl: "https://courses.opencv.org/certificates/c0a338bee89245658651b8e6c0caefad",
    verified: true,
  },
  {
    title: "Associate Data Scientist in Python",
    issuer: "DataCamp",
    date: "2025-08",
    image: dataScientist,
    skills: ["Python", "Machine Learning", "Statistical Inference"],
    credentialUrl: "https://www.datacamp.com/certificate/DSA0015935095737",
    verified: true,
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "2025-01",
    skills: ["Deep Learning"],
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University (Coursera)",
    date: "2024-11",
    image: ml,
    skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks"],
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/O0BB7JL5J0TY",
    verified: true,
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "DeepLearning.AI (Coursera)",
    date: "2024-11",
    image: unsupervised,
    skills: ["Unsupervised Learning", "Recommender Systems", "Reinforcement Learning"],
    credentialUrl: "https://coursera.org/share/c38605a0d1f7eaa59f2a79ab90eb408c",
    verified: true,
  },
  {
    title: "Relational Database Certification",
    issuer: "freeCodeCamp",
    date: "2024-09",
    image: sql,
    skills: ["SQL", "PostgreSQL", "Database Design", "Bash"],
    credentialUrl: fcc("relational-database-v8"),
    verified: true,
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2024-09",
    image: js,
    skills: ["JavaScript", "Algorithms", "Data Structures"],
    credentialUrl: fcc("javascript-algorithms-and-data-structures-v8"),
    verified: true,
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI (Coursera)",
    date: "2024-09",
    image: advanced,
    skills: ["Neural Networks", "Regularization", "Hyperparameter Tuning"],
    credentialUrl: "https://coursera.org/share/03ecac1d6b3a15616e2ea6f7ec00e958",
    verified: true,
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford University (Coursera)",
    date: "2024-08",
    image: supervised,
    skills: ["Supervised Learning", "Linear Regression", "Logistic Regression"],
    credentialUrl: "https://coursera.org/share/aa23900843e2a2e9125946990538a177",
    verified: true,
  },
  {
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    date: "2024",
    image: web,
    skills: ["HTML", "CSS", "Responsive Design"],
    credentialUrl: fcc("responsive-web-design"),
    verified: true,
  },
]
