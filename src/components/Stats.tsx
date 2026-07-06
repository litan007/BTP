import { stats } from '../data/stats';
import Reveal from './Reveal';
import StatItem from './StatItem';

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__inner">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 100} variant="scale">
            <StatItem stat={stat} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
