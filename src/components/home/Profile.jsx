import { useLanguage } from "../../contexts/LanguageContext"
import profilePic from "../../assets/pfp.jpg"

const facts = [
  { label: "profile.studying", value: "profile.studyingValue" },
  { label: "profile.location", value: "profile.locationValue" },
  { label: "profile.club", value: "profile.clubValue" },
  { label: "profile.interests", value: "profile.interestsValue" },
]

const skills = [
  { label: "skills.ai", items: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "Computer Vision", "NLP"] },
  { label: "skills.design", items: ["Figma", "Illustrator", "Photoshop", "UI/UX", "Web Design", "Mobile Design"] },
  { label: "skills.engineering", items: ["Flutter", "React", "TypeScript", "Next.js", "FastAPI", "Node.js", "PostgreSQL", "Supabase", "Linux"] },
]

const Profile = () => {
  const { lang, t, tag } = useLanguage()

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div data-reveal className="tile relative overflow-hidden md:col-span-4 lg:col-span-3 aspect-square md:aspect-auto">
          <img src={profilePic} alt="Islem Gouicem" className="absolute inset-0 h-full w-full object-cover" />
        </div>

        <div data-reveal className="tile p-8 md:col-span-8 lg:col-span-6">
          <p className="mono-label mb-5">{t("profile.about")}</p>
          <p data-words className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-zinc-900 dark:text-white">
            {t("profile.statement").split(" ").map((word, index) => (
              <span key={`${lang}-${index}`} data-word>{word} </span>
            ))}
          </p>
        </div>

        <dl data-reveal className="tile p-8 md:col-span-12 lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="mono-label mb-1">{t(fact.label)}</dt>
              <dd className="text-sm text-zinc-700 dark:text-zinc-300">{t(fact.value)}</dd>
            </div>
          ))}
        </dl>

        {skills.map((group) => (
          <div key={group.label} data-reveal className="tile p-8 md:col-span-4">
            <h3 className="mono-label mb-5">{t(group.label)}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">{tag(item)}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Profile
