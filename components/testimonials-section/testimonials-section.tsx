import { Quote, Star } from 'lucide-react';
import { Reveal } from '@/components/reveal/reveal';
import { SectionHeading } from '@/components/section-heading/section-heading';

const reviews = [
  {
    quote: "Fixed the electrical fault that others couldn't find. Clean, clear and professional.",
    author: 'James T.',
  },
  {
    quote: 'Honest advice saved us from replacing the whole AC unit.',
    author: 'Linda M.',
  },
  {
    quote: 'Respectful of the house and left the plumbing area spotless.',
    author: 'Robert K.',
  },
];

export function TestimonialsSection() {
  return (
    <section id="reviews" className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="container">
        <SectionHeading
          eyebrow={
            <>
              <Star size={17} aria-hidden="true" />
              Homeowner notes
            </>
          }
          title="The details people remember."
          copy="Fast work matters. So does showing up, explaining the fix and leaving the home clean."
        />

        <div className="review-grid">
          {reviews.map((review, index) => (
            <Reveal key={review.author} as="article" className="review-card" delay={index * 0.06}>
              <Quote size={24} aria-hidden="true" />
              <div className="review-card__stars" aria-label="Five star rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={15} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <p>{review.quote}</p>
              <strong>{review.author}</strong>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
