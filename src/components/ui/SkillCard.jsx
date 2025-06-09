"use client"
import ProgressBar from "./ProgressBar"
import FloatingCard from "./FloatingCard"

const SkillCard = ({ icon: Icon, title, color, skills, delay = 0 }) => {
  return (
    <FloatingCard delay={delay}>
      <div className="p-8">
        <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${color} mb-6`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
              </div>
              <ProgressBar value={skill.level} delay={delay + index * 0.1} />
            </div>
          ))}
        </div>
      </div>
    </FloatingCard>
  )
}

export default SkillCard
