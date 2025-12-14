import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WaitlistEmailRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: WaitlistEmailRequest = await req.json();

    console.log("Sending waitlist confirmation to:", email);

    const emailResponse = await resend.emails.send({
      from: "Fi Q <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to the Fi Q Waitlist! 🚀",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #0a0a0f; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0f; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1a1a2e 0%, #0a0a0f 100%); border-radius: 16px; border: 1px solid rgba(99, 102, 241, 0.2); overflow: hidden;">
                  <tr>
                    <td style="padding: 48px 40px; text-align: center;">
                      <h1 style="margin: 0 0 24px; font-size: 32px; font-weight: bold; background: linear-gradient(135deg, #6366f1, #a78bfa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                        Fi Q
                      </h1>
                      <h2 style="margin: 0 0 16px; font-size: 24px; color: #ffffff; font-weight: 600;">
                        You're on the list! 🎉
                      </h2>
                      <p style="margin: 0 0 24px; font-size: 16px; color: rgba(255, 255, 255, 0.7); line-height: 1.6;">
                        Thank you for joining the Fi Q waitlist. We're building something special — personal finance that finally figures itself out.
                      </p>
                      <div style="background: rgba(99, 102, 241, 0.1); border-radius: 12px; padding: 24px; margin: 24px 0; border: 1px solid rgba(99, 102, 241, 0.2);">
                        <p style="margin: 0 0 12px; font-size: 14px; color: rgba(255, 255, 255, 0.6); text-transform: uppercase; letter-spacing: 1px;">
                          What to expect
                        </p>
                        <ul style="margin: 0; padding: 0 0 0 20px; text-align: left; color: rgba(255, 255, 255, 0.8); font-size: 15px; line-height: 1.8;">
                          <li>AI-powered expense categorization</li>
                          <li>Smart subscription tracking</li>
                          <li>Personalized budgeting that adapts to you</li>
                          <li>100% private — we never sell your data</li>
                        </ul>
                      </div>
                      <p style="margin: 24px 0 0; font-size: 14px; color: rgba(255, 255, 255, 0.5);">
                        We'll keep you updated on our progress. Stay tuned!
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 24px 40px; background: rgba(0, 0, 0, 0.3); text-align: center; border-top: 1px solid rgba(99, 102, 241, 0.1);">
                      <p style="margin: 0; font-size: 12px; color: rgba(255, 255, 255, 0.4);">
                        © 2024 Fi Q. Personal finance, figured out.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      }),
    });

    const data = await emailResponse.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending waitlist confirmation:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
