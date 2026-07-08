import { StatIcon } from './icons/Icons';
import { useCountUp } from '../hooks/useCountUp';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import type { Stat } from '../data/stats';

interface StatItemProps {
  stat: Stat;
}

export default function StatItem({ stat }: StatItemProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();
  const displayValue = useCountUp(stat.value, isVisible);

  return (
    <div ref={ref} className="stat-item">
      <div className="stat-item__icon-wrap">
        <div className="stat-item__icon">
          <StatIcon type={stat.icon} />
        </div>
      </div>
      <div className="stat-item__text">
        <strong>{displayValue}</strong>
        <span>{stat.label}</span>
      </div>
    </div>
  );
}
