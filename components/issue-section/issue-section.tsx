import { Droplets, Home, PhoneCall, PlugZap, Snowflake } from 'lucide-react';
import { CustomButton } from '@/components/custom-button/custom-button';
import { Reveal } from '@/components/reveal/reveal';

const issues = [
  {
    title: 'Power issue',
    copy: 'Breaker trips, outlet dead, lights flicker.',
    icon: PlugZap,
  },
  {
    title: 'No cooling',
    copy: 'AC weak, noisy, leaking or not starting.',
    icon: Snowflake,
  },
  {
    title: 'Leak or clog',
    copy: 'Water where it should not be.',
    icon: Droplets,
  },
  {
    title: 'Repair list',
    copy: 'Small fixes before they become bigger jobs.',
    icon: Home,
  },
];

export function IssueSection() {
  return (
    <section className="issue-section" aria-labelledby="issue-heading">
      <div className="container issue-section__grid">
        <Reveal className="issue-section__copy">
          <div className="eyebrow">Start here</div>
          <h2 id="issue-heading">What needs fixing?</h2>
          <p>Choose the closest issue. The call routes faster when the job starts clear.</p>
          <CustomButton href="tel:+1234567890" icon={PhoneCall}>
            Speak to a technician
          </CustomButton>
        </Reveal>

        <div className="issue-card-grid">
          {issues.map((issue, index) => {
            const Icon = issue.icon;
            return (
              <Reveal key={issue.title} as="article" className="issue-card" delay={index * 0.05}>
                <Icon size={24} aria-hidden="true" />
                <h3>{issue.title}</h3>
                <p>{issue.copy}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
