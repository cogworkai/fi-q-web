import React, { useState } from "react";
import CustomButton from "@/components/ui/CustomButton";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: email.trim().toLowerCase() }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already on the waitlist!",
            description: "This email is already registered.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "You're on the list!",
          description: "We'll keep you updated on Fi-Q's launch.",
        });
        setEmail("");
      }
    } catch (error) {
      console.error('Waitlist error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[600px] mt-12">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h3 className="text-2xl font-medium text-[#080808] mb-4">
          Join the Fi-Q Waitlist
        </h3>
        <div className="w-full flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border-2 border-[#080808] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC726]"
            required
            disabled={isSubmitting}
          />
          <CustomButton type="submit" className="px-6 py-3" disabled={isSubmitting}>
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default NewsletterForm;
