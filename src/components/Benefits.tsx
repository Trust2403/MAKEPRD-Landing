
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Target, Rocket, Code, Sparkles } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Brain,
      stat: "300%",
      title: "Faster PRD Creation",
      description: "Generate comprehensive PRDs in minutes, not weeks"
    },
    {
      icon: Zap,
      stat: "90%",
      title: "Time Savings",
      description: "Reduce time spent on documentation and focus on building"
    },
    {
      icon: Target,
      stat: "10K+",
      title: "Teams Empowered",
      description: "Product teams worldwide trust our platform"
    },
    {
      icon: Rocket,
      stat: "99.9%",
      title: "Accuracy Rate",
      description: "AI-powered precision for reliable results"
    }
  ];

  const features = [
    {
      icon: Code,
      title: "Lovable Prompts",
      description: "Generate optimized prompts specifically for Lovable's AI editor"
    },
    {
      icon: Sparkles,
      title: "Bolt Compatibility Prompts", 
      description: "Create perfect prompts for Bolt and other vibe coding tools"
    },
    {
      icon: Brain,
      title: "Smart Optimization",
      description: "AI-powered prompt enhancement for maximum effectiveness"
    },
    {
      icon: Target,
      title: "Tool-Specific Prompts",
      description: "Tailored prompts for each coding platform's unique requirements"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-blue-900 to-blue-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Product Teams Choose
            <span className="text-blue-400"> MakePRD.ai</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of product managers who've revolutionized their workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <CardContent className="p-8 text-center">
                <benefit.icon className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Optimized for Leading <span className="text-blue-400">Vibe Coding Tools</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 transform hover:scale-105"
              >
              <CardContent className="p-6 text-center bg-blue-900 rounded-xl shadow-lg transition-all duration-300">
                <feature.icon className="w-10 h-10 text-blue-200 mx-auto mb-4 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-white text-sm">{feature.description}</p>
              </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 text-center border border-blue-400/30">
          <h3 className="text-3xl font-bold text-white mb-6">
            "Perfect prompts for every vibe coding platform"
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our AI understands the unique requirements of Lovable, Bolt, and other vibe coding tools, 
            ensuring your prompts are optimized for maximum effectiveness and better results.
          </p>
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center space-x-3">
              <Code className="w-8 h-8 text-blue-400" />
              <span className="text-white font-medium">Lovable</span>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="w-8 h-8 text-purple-400" />
              <span className="text-white font-medium">Bolt</span>
            </div>
            <div className="flex items-center space-x-3">
              <Sparkles className="w-8 h-8 text-green-400" />
              <span className="text-white font-medium">More Tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
