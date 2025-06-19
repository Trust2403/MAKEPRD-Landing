
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-white w-8 h-8 mr-2 animate-spin" />
            <span className="text-white/80 font-semibold tracking-wide">GET STARTED TODAY</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Build Better
            <span className="text-blue-200"> Products?</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join thousands of product teams already using MakePRD.ai to create exceptional products faster than ever before.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                placeholder="Enter your email address"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30 transition-all duration-300"
              />
              <Button 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 transition-all duration-300 transform hover:scale-105 group"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                ✨ Free Trial
              </div>
              <p className="text-blue-200">Start with our 14-day free trial</p>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                🚀 Quick Setup
              </div>
              <p className="text-blue-200">Get up and running in under 5 minutes</p>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                💪 24/7 Support
              </div>
              <p className="text-blue-200">Expert support whenever you need it</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
