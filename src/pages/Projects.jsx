import ProjectCard from '../components/ProjectCard'
import  Everlearn from '../assets/Everlearn.png'; // Make sure this file exists
import Ula from '../assets/ula.png'; // Make sure this file exists
import Psi from '../assets/Psi.png'; // Make sure this file exists

const projects = [
  {
    title: 'Project ULA – Universal Learning Archive',
    description: 'A digital learning repository aimed at preserving and sharing academic and practical knowledge across Africa. ULA empowers students, researchers, and educators with access to structured open educational content, cross-discipline insights, and legacy-driven collaboration tools.',
    imageUrl: Ula
  },
  {
    title: 'Project E – Everlearn & Evertake',
    description: 'Everlearn delivers immersive micro-learning experiences tailored to children, focusing on foundational and digital skills in fun, interactive formats. Evertake, its companion platform, acts as a decentralized proof-of-skill vault — allowing young learners to showcase their growth, earn endorsements, and access pathways to mentorship, recognition, and future opportunities..',
    imageUrl: Everlearn
  },
  {
    title: 'Project PSI – Public Service Infrastructure',
    description: 'A civic-tech infrastructure for digital governance and grassroots innovation. PSI bridges communities and government with smart feedback tools, impact trackers, and open-data dashboards to enhance transparency, accountability, and service delivery.',
    imageUrl: Psi
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Legacy Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
