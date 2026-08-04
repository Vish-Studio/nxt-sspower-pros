import Image from 'next/image';
import { Droplets, Home, PlugZap, Snowflake, Wrench } from 'lucide-react';
import { Reveal } from '@/components/reveal/reveal';
import { SectionHeading } from '@/components/section-heading/section-heading';

const services = [
  {
    title: 'Electrical',
    icon: PlugZap,
    copy: 'Repairs, lighting, outlets and safer wiring.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=82',
  },
  {
    title: 'AC',
    icon: Snowflake,
    copy: 'Cooling repairs, tune-ups and installations.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=82',
  },
  {
    title: 'Plumbing',
    icon: Droplets,
    copy: 'Leaks, fixtures, heaters and pipe repairs.',
    image: 'https://images.unsplash.com/photo-1749532125405-70950966b0e5?auto=format&fit=crop&w=900&q=82',
  },
  {
    title: 'Maintenance',
    icon: Home,
    copy: 'Small repairs and seasonal home care.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=82',
  },
];

export function ServicesSection() {
  return (
    <section id="services">
      <div className="container">
        <SectionHeading
          eyebrow={
            <>
              <Wrench size={17} aria-hidden="true" />
              Service lanes
            </>
          }
          title="The essentials, covered."
          copy="Book one contractor for the work homes need most."
        />

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} as="article" className="service-card" delay={index * 0.06}>
                <div className="service-card__image">
                  <Image src={service.image} alt={`${service.title} service work`} fill sizes="(max-width: 980px) 50vw, 25vw" />
                </div>
                <div>
                  <div className="service-card__header">
                    <span>0{index + 1}</span>
                    <Icon size={25} aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
