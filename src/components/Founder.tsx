import { motion } from 'framer-motion';
import { User, MessageCircle, Mail, Award, Rocket, Target } from 'lucide-react';

export default function Founder() {
  return (
    <section id="founder" className="section-padding relative bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-cyan-600/8 blur-[150px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-full">
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-600/30 to-cyan-600/30 blur-2xl opacity-60" />
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl border border-indigo-500/30 bg-indigo-500/10" />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full border border-cyan-500/30 bg-cyan-500/10" />
              
              {/* Founder Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-slate-700/50">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Founder of NOVA Software Studio"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white">8+ Years</p>
                      <p className="text-sm text-slate-400">Tech Leadership</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-4">
              Meet the Founder
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Passionate About Building{' '}
              <span className="text-gradient">Meaningful Products</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              Hi, I'm <strong className="text-white">Aditya Rao</strong>, founder of NOVA Software Studio. 
              With over 8 years of experience in software engineering and product design, I started NOVA with a 
              simple mission — to help businesses transform bold ideas into powerful digital products.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Our team combines technical excellence with creative design thinking to deliver solutions that not 
              only look great but also drive real business results. From startups to enterprises, we treat every 
              project as our own.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Innovation First</h4>
                  <p className="text-sm text-slate-400">We embrace modern tech to solve real problems.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Result Driven</h4>
                  <p className="text-sm text-slate-400">Every line of code serves your business goal.</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:border-indigo-500 hover:text-white hover:bg-indigo-500/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <User className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-white hover:bg-cyan-500/10 transition-all duration-300"
                aria-label="Twitter"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@novasoftware.studio"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:border-indigo-500 hover:text-white hover:bg-indigo-500/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
