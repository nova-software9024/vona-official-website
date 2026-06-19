import { motion } from 'framer-motion';
import { ExternalLink, Code2, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'Finova Banking App',
    description:
      'A secure fintech mobile app for digital payments, expense tracking, and investment management with biometric authentication.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    tags: ['Flutter', 'Firebase', 'Node.js'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    name: 'ShopSwift E-Commerce',
    description:
      'A high-converting e-commerce platform with real-time inventory, AI recommendations, and seamless checkout experience.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    name: 'MediCare Portal',
    description:
      'Healthcare management system with appointment booking, telemedicine, electronic health records, and prescription management.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Python', 'PostgreSQL'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    name: 'Nova AI Assistant',
    description:
      'Enterprise AI assistant with natural language processing, workflow automation, and integration with popular business tools.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    tags: ['OpenAI', 'LangChain', 'FastAPI'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    name: 'LogiTrack Dashboard',
    description:
      'Real-time logistics and fleet management dashboard with GPS tracking, route optimization, and analytics reporting.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    tags: ['Vue.js', 'Node.js', 'AWS'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    name: 'EduLearn Platform',
    description:
      'Online learning platform with video courses, live classes, quizzes, certificates, and progress tracking for students.',
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Django', 'WebRTC'],
    liveLink: '#',
    githubLink: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding relative bg-slate-950 overflow-hidden">
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[150px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-4"
            >
              Our Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Projects That Speak for Themselves
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400"
            >
              Explore our latest work across fintech, healthcare, e-commerce, AI, education, and logistics.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
          >
            Start Your Project
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-card hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveLink}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950 hover:bg-indigo-400 transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white border border-slate-700 hover:border-indigo-500 transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Code2 className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-800/70 px-3 py-1 text-xs font-medium text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
