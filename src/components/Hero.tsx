import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Code2, Smartphone, Bot, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 aurora-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-indigo-600/20 blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-600/15 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating icons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 left-[10%] hidden lg:block"
      >
        <div className="glass-card p-4 rounded-2xl">
          <Code2 className="h-8 w-8 text-indigo-400" />
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-48 right-[12%] hidden lg:block"
      >
        <div className="glass-card p-4 rounded-2xl">
          <Smartphone className="h-8 w-8 text-cyan-400" />
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 left-[15%] hidden lg:block"
      >
        <div className="glass-card p-4 rounded-2xl">
          <Bot className="h-8 w-8 text-violet-400" />
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-32 right-[10%] hidden lg:block"
      >
        <div className="glass-card p-4 rounded-2xl">
          <Globe className="h-8 w-8 text-emerald-400" />
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 mb-8"
          >
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-200">
              Trusted by 50+ startups & enterprises
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          >
            We Build{' '}
            <span className="text-gradient">Digital Futures</span>
            <br className="hidden sm:block" />
            That Scale Your Business
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed"
          >
            NOVA Software Studio crafts premium Android apps, websites, web apps, AI tools, 
            and custom software solutions designed to accelerate growth and dominate markets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-900/30 hover:shadow-indigo-900/50 hover:scale-105 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 text-base font-semibold text-white hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all duration-300"
            >
              <Play className="h-5 w-5 text-indigo-400" />
              View Our Work
            </a>
          </motion.div>

          {/* Trusted by logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mx-auto max-w-4xl"
          >
            <p className="text-sm text-slate-500 mb-6 uppercase tracking-wider">
              Powered by Modern Technologies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
              {['React', 'Next.js', 'Node.js', 'Flutter', 'Python', 'Firebase', 'AWS', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  className="text-sm sm:text-base font-display font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
