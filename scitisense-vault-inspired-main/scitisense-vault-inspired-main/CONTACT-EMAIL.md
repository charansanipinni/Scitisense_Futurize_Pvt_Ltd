# Contact form email setup

The form sends through the server route `/api/contact` to `info@scitisensefuturize.in`, with the visitor's email as Reply-To. Secrets stay on the server.

1. Verify your sending domain in Resend: https://resend.com/docs/dashboard/domains/introduction
2. Copy `.env.example` to `.env.local`, add a sending API key to `RESEND_API_KEY` and set `CONTACT_FROM_EMAIL` to an address on that verified domain.
3. Restart the local server. Set the same environment variables on the production host before deployment.
4. Submit a real enquiry and confirm delivery in the inbox and Resend dashboard. A successful API response confirms acceptance by the email service; inbox delivery must be checked separately.

Missing configuration or provider failures produce a visible error and preserve the visitor's message. No success is shown unless the provider returns a message ID.
