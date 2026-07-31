import React, { useState } from 'react';
import { generateSmartQuote } from '../services/geminiService';
import { AIQuoteEstimation, SectionId } from '../types';
import { MessageCircle, Sparkles, Send, Loader2, ArrowRight } from 'lucide-react';

const SmartQuote: React.FC = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [estimation, setEstimation] = useState<AIQuoteEstimation | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    setLoading(true);
    setEstimation(null);
    
    try {
      const result = await generateSmartQuote(description);
      setEstimation(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={SectionId.QUOTE} className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
            <span className="inline-block p-2 bg-white rounded-full shadow-sm mb-4">
                <Sparkles className="w-6 h-6 text-blue-600 fill-current" />
            </span>
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-3">Ask the Pro (AI)</h2>
            <p className="text-slate-500">Describe your issue. Get an instant preliminary assessment.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
            <div className="bg-slate-900 p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                        AI
                    </div>
                    <div>
                        <p className="text-white font-bold text-sm">SS Diagnostic Bot</p>
                        <p className="text-slate-400 text-xs flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8 bg-slate-50 min-h-[300px] flex flex-col">
                {/* Bot Greeting */}
                <div className="flex gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700 max-w-[80%] border border-slate-100">
                        Hi there! I can help you estimate repairs before you even pick up the phone. What seems to be the problem?
                    </div>
                </div>

                {/* Result Area */}
                {estimation && (
                    <div className="flex gap-4 mb-6 animate-fade-up">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="bg-white p-5 rounded-2xl rounded-tl-none shadow-sm max-w-[90%] border border-slate-100 space-y-4">
                            <div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Analysis</span>
                                <h4 className="font-bold text-slate-900 text-lg">{estimation.likelyIssue}</h4>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="px-3 py-1.5 bg-slate-100 rounded-lg">
                                    <span className="block text-xs text-slate-500">Severity</span>
                                    <span className={`font-bold ${
                                        estimation.severity === 'High' ? 'text-amber-600' : 'text-slate-900'
                                    }`}>{estimation.severity}</span>
                                </div>
                                <div className="px-3 py-1.5 bg-blue-50 rounded-lg">
                                    <span className="block text-xs text-blue-500">Est. Cost</span>
                                    <span className="font-bold text-blue-700">{estimation.estimatedCostRange}</span>
                                </div>
                            </div>

                            <p className="text-sm text-slate-600 italic border-l-2 border-amber-400 pl-3">
                                "{estimation.professionalAdvice}"
                            </p>

                            <a href={`#${SectionId.CONTACT}`} className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700">
                                Schedule Fix <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </div>
                )}

                {/* Input Area */}
                <div className="mt-auto">
                    {!estimation ? (
                        <form onSubmit={handleSubmit} className="relative">
                            <input 
                                type="text" 
                                className="w-full bg-white border border-slate-200 rounded-full py-4 pl-6 pr-14 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                                placeholder="e.g. My AC is leaking water..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <button 
                                type="submit" 
                                disabled={loading || !description.trim()}
                                className="absolute right-2 top-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 transition-colors"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                            </button>
                        </form>
                    ) : (
                        <button 
                            onClick={() => setEstimation(null)}
                            className="w-full py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-semibold hover:bg-slate-50"
                        >
                            Start New Diagnosis
                        </button>
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SmartQuote;