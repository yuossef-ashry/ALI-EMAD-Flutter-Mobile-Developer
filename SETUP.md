# Contact form setup

The contact form uses EmailJS. The direct email and social profile links remain available even when EmailJS is not configured.

1. Create an account at [emailjs.com](https://www.emailjs.com).
2. Add an email service and set its recipient to `ali.emad.dev@gmail.com`.
3. Create a template with `{{name}}`, `{{email}}`, and `{{message}}`, and set its **To Email** to `ali.emad.dev@gmail.com`.
4. Copy the Service ID, Template ID, and Public Key into a local `.env` file:

   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. Restart the development server. Add the same variables to your hosting provider's environment settings before publishing.

The `.env` file is ignored by Git. The `mailto:` link is available as a direct contact option.
