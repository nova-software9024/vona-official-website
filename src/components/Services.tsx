import { motion } from 'framer-motion';
import {
  Smartphone,
  Globe,
  Layout,
  Bot,
  Workflow,
  Building2,
  Code2,
  Palette,
  Plug,
} from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Android App Development',
    description:
      'Native & cross-platform Android apps built with Flutter & Kotlin. Fast, scalable, and user-friendly mobile experiences.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'SEO-optimized, responsive websites that convert visitors into customers. From landing pages to complex corporate sites.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Layout,
    title: 'Web App Development',
    description:
      'Powerful web applications with React, Next.js & Node.js. Real-time dashboards, SaaS platforms, and marketplaces.',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Bot,
    title: 'AI Tools & Integration',
    description:
      'Custom AI solutions, chatbots, automation agents, and LLM integrations that reduce costs and boost productivity.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Workflow,
    title: 'Automation Tools',
    description:
      'Streamline repetitive tasks with intelligent automation. Save time, reduce errors, and scale operations effortlessly.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Building2,
    title: 'Business Software',
    description:
      'ERP, CRM, inventory, HRMS, and custom business portals tailored to your workflows and growth goals.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Code2,
    title: 'Custom Software',
    description:
      'Bespoke software solutions designed from scratch to solve your unique challenges and deliver competitive advantage.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Stunning, intuitive interfaces and user experiences that delight users and drive engagement across all platforms.',
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    icon: Plug,
    title: 'API Integration',
    description:
      'Seamless third-party API integrations, custom API development, and microservices architecture for your products.',
    color: 'from-lime-500 to-green-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative bg-slate-950">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            End-to-End Software Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            From concept to deployment, we deliver high-performance digital products 
            that help businesses innovate, scale, and succeed.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative rounded-2xl glass-card p-6 lg:p-8 hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300`}
              />
              <div className="relative">
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
