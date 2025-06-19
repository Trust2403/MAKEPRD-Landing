
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Zap, Target, BarChart3, Rocket, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "PRD Generation",
      description: "Create comprehensive Product Requirements Documents with AI assistance. Define features, user stories, and technical specifications effortlessly.",
      color: "text-blue-500"
    },
    {
      icon: Zap,
      title: "Prompt Optimization",
      description: "Fine-tune your prompts for maximum effectiveness. Our AI analyzes and optimizes your prompts for better results.",
      color: "text-blue-600"
    },
    {
      icon: Target,
      title: "Prompt Generation",
      description: "Generate a high quality prompt just by giving about your idea in a single word without long descriping",
      color: "text-blue-700"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Track performance metrics and gain valuable insights into your product development process.",
      color: "text-blue-500"
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Deploy your PRDs and prompts quickly with our streamlined workflow and collaboration tools.",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption. Your data is protected at every step.",
      color: "text-blue-700"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Powerful Features for
            <span className="text-blue-600"> Product Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create outstanding products, from initial concept to market launch
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-50 to-white hover:from-blue-50 hover:to-white cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <feature.icon className={`w-12 h-12 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
