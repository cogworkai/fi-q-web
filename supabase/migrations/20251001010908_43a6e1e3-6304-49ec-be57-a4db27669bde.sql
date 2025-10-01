-- Prevent public access to waitlist emails
-- Only allow authenticated admin users to view waitlist (no admins exist yet, so this blocks all reads)
CREATE POLICY "Only admins can view waitlist"
ON public.waitlist
FOR SELECT
USING (false);