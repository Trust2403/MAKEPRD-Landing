
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is MakePRD.ai and how does it work?",
      answer: "MakePRD.ai is an AI-powered platform that generates comprehensive Product Requirement Documents (PRDs) and optimized prompts for vibe coding tools like Lovable and Bolt. Simply input your project requirements, and our AI creates detailed, actionable PRDs in minutes."
    },
    {
      question: "Which coding tools does MakePRD.ai support?",
      answer: "We specialize in optimizing prompts for leading vibe coding tools including Lovable, Bolt, and other AI-powered development platforms. Our prompts are tailored to each platform's specific requirements for maximum effectiveness."
    },
    {
      question: "How accurate are the generated PRDs?",
      answer: "Our AI maintains a 99.9% accuracy rate by leveraging advanced machine learning models trained on thousands of successful PRDs. Each document is structured to include all essential components: objectives, user stories, technical requirements, and acceptance criteria."
    },
    {
      question: "Can I customize the generated prompts?",
      answer: "Absolutely! While our AI generates comprehensive prompts, you can easily modify, refine, and customize them to match your specific project needs and coding style preferences."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a free trial that allows you to generate up to 3 PRDs and experience our prompt optimization features. No credit card required to get started."
    },
    {
      question: "How does pricing work?",
      answer: "We offer flexible pricing plans based on your team size and usage needs. Plans start from $29/month for individual developers and scale up for larger teams with additional features and priority support."
    },
    {
      question: "Can teams collaborate on PRDs?",
      answer: "Yes, our platform supports team collaboration with features like real-time editing, commenting, version control, and role-based permissions to streamline your product development workflow."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including detailed documentation, video tutorials, email support, and for premium plans, priority support with dedicated account management."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="w-12 h-12 text-blue-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Frequently Asked
                <span className="text-blue-400"> Questions</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about MakePRD.ai and how it can transform your product development workflow
            </p>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between group"
                  >
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-blue-400 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                    )}
                  </button>
                  
                  <div className={`transition-all duration-300 ease-out ${
                    openItems.includes(index) 
                      ? "max-h-48 opacity-100" 
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}>
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-8">
              Our support team is here to help you get the most out of MakePRD.ai
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
