
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ArrowLeft, Sparkles, Send } from "lucide-react";
import { Link } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  reason: string;
  interested: string;
  budget: string;
}

const GetStarted = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      reason: "",
      interested: "",
      budget: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-black flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Thank You!</h1>
            <p className="text-blue-200 mb-6">
              We've received your information and will be in touch soon with early access to makeprd.ai.
            </p>
            <Link to="/">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-black px-6 py-12">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-8">
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-blue-400 w-8 h-8 mr-2 animate-pulse" />
            <span className="text-blue-400 font-semibold tracking-wide">MAKEPRD.AI</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Early Access
          </h1>
          <p className="text-blue-200 text-lg">
            Help us build the perfect PRD generation tool for you
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:border-blue-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                rules={{ 
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:border-blue-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Reason Field */}
              <FormField
                control={form.control}
                name="reason"
                rules={{ required: "Please tell us why you need this tool" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Why do you need to use our tool?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your use case, current challenges with PRD creation, or what you hope to achieve..."
                        className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:border-blue-400 min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Interest Level */}
              <FormField
                control={form.control}
                name="interested"
                rules={{ required: "Please select your interest level" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Are you interested in early access?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="very-interested" id="very-interested" className="border-white/40 text-blue-400" />
                          <Label htmlFor="very-interested" className="text-white">Very interested - I need this now!</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="interested" id="interested" className="border-white/40 text-blue-400" />
                          <Label htmlFor="interested" className="text-white">Interested - Would like to try it</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="maybe" id="maybe" className="border-white/40 text-blue-400" />
                          <Label htmlFor="maybe" className="text-white">Maybe - Just exploring options</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Budget Field */}
              <FormField
                control={form.control}
                name="budget"
                rules={{ required: "Please select a budget range" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">What would you be willing to pay for this tool?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="free" id="free" className="border-white/40 text-blue-400" />
                          <Label htmlFor="free" className="text-white">Free tier only</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="10-30" id="10-30" className="border-white/40 text-blue-400" />
                          <Label htmlFor="10-30" className="text-white">$10-30 per month</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="30-50" id="30-50" className="border-white/40 text-blue-400" />
                          <Label htmlFor="30-50" className="text-white">$30-50 per month</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="50-100" id="50-100" className="border-white/40 text-blue-400" />
                          <Label htmlFor="50-100" className="text-white">$50-100 per month</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="100+" id="100+" className="border-white/40 text-blue-400" />
                          <Label htmlFor="100+" className="text-white">$100+ per month</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Submit & Get Early Access
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
