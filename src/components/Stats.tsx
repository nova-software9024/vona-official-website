import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Users, Clock, Award } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    value: 120,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Across web, mobile, AI & automation',
  },
  {
    icon: Users,
    value: 80,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Startups to Fortune 500s',
  },
  {
    icon: Clock,
    value: 8,
    suffix: '+',
    label: 'Years Experience',
    description: 'In software development',
  },
  {
    icon: Award,
    value: 15,
    suffix: '+',
    label: 'Tech Experts',
    description: 'Designers, developers & engineers',
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / value), 16);
    const timer = setInterval(() => {
      start += Math.ceil(value / (duration / stepTime));
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-12 lg:py-16 bg-slate-950 border-y border-slate-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group text-center p-6 rounded-2xl glass-card hover:bg-slate-900/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-indigo-400">
                  <stat.icon className="h-6 w-6" />
                </div>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 font-semibold text-white">{stat.label}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
