import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Website',
    description: 'Professional websites & landing pages',
    price: '₹24,999',
    period: 'starting',
    popular: false,
    features: [
      'Custom responsive design',
      'SEO-friendly structure',
      'Up to 5 pages',
      'Contact form integration',
      'Google Analytics setup',
      '1 month free support',
    ],
  },
  {
    name: 'Android App',
    description: 'Native & cross-platform mobile apps',
    price: '₹79,999',
    period: 'starting',
    popular: true,
    features: [
      'Flutter / Kotlin development',
      'User authentication',
      'Push notifications',
      'API integration',
      'App store deployment',
      '3 months free support',
    ],
  },
  {
    name: 'Custom Software',
    description: 'Tailored business software solutions',
    price: '₹1,49,999',
    period: 'starting',
    popular: false,
    features: [
      'Custom web application',
      'Database architecture',
      'Admin dashboard',
      'Third-party integrations',
      'Scalable cloud deployment',
      '6 months free support',
    ],
  },
  {
    name: 'AI Tool',
    description: 'AI automation & integration solutions',
    price: '₹99,999',
    period: 'starting',
    popular: false,
    features: [
      'LLM / AI model integration',
      'Custom chatbot / agent',
      'Workflow automation',
      'Data training pipeline',
      'API endpoints',
      '3 months free support',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding relative bg-slate-950 overflow-hidden">
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[150px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-4"
          >
            Transparent Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Pricing That Fits Your Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            No hidden costs. Choose a package that matches your needs, or request a custom quote for enterprise projects.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-gradient-to-b from-indigo-600/20 to-cyan-600/10 border-2 border-indigo-500/50 shadow-xl shadow-indigo-900/20'
                  : 'glass-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-4 py-1 text-xs font-bold text-white shadow-lg">
                  <Sparkles className="h-3 w-3" />
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-400">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="font-display text-3xl lg:text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-slate-400 text-sm ml-2">/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className={`h-5 w-5 shrink-0 ${plan.popular ? 'text-cyan-400' : 'text-indigo-400'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`block w-full rounded-full py-3 text-center text-sm font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-indigo-900/30'
                    : 'border border-slate-700 text-white hover:border-indigo-500 hover:bg-indigo-500/10'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400">
            Need a custom enterprise solution?{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-indigo-400 font-semibold hover:text-cyan-400 transition-colors"
            >
              Contact us for a tailored quote →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
