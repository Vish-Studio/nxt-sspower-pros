import React from 'react';
import { SectionId } from '../types';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    { 
      txt: "He arrived on time and fixed the electrical fault that three other guys couldn't find. Professional, clean, and explained everything clearly.", 
      author: "James Thompson", 
      role: "Homeowner",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
    },
    { 
      txt: "Honest pricing. He told me I didn't need to replace the whole unit, just a part. Saved me thousands. Highly recommended!", 
      author: "Linda Martinez", 
      role: "Property Manager",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
    },
    { 
      txt: "The cleanest tradesman I've ever hired. Left the place spotless after the plumbing work. Truly respectful of my home.", 
      author: "Robert Kim", 
      role: "Local Business Owner",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
    }
  ];

  return (
    <section id={SectionId.ABOUT} className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-4">Neighbors Love My Work</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
             <div className="flex text-amber-400">
               {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
             </div>
             <span className="text-slate-600 font-bold text-lg">5.0/5 Rating</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col relative hover:shadow-md transition-shadow">
                    <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6" />
                    
                    <div className="flex gap-1 mb-6 text-amber-400">
                       {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-8 flex-1">"{review.txt}"</p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                        <img 
                          src={review.img} 
                          alt={review.author} 
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div>
                            <span className="block font-bold text-slate-900 text-sm">{review.author}</span>
                            <span className="block text-xs text-slate-500 uppercase tracking-wide font-medium">{review.role}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;