-- Add enrolled_beta column to waitlist table
ALTER TABLE public.waitlist 
ADD COLUMN enrolled_beta boolean NOT NULL DEFAULT false;