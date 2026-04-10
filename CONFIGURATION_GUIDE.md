/**
 * Configuration EmailJS pour le formulaire de contact
 * 
 * Pour configurer EmailJS :
 * 1. Créez un compte sur https://www.emailjs.com/
 * 2. Créez un service de messagerie (ex: Gmail)
 * 3. Créez un template d'email
 * 4. Récupérez vos identifiants :
 *    - PUBLIC_KEY
 *    - SERVICE_ID
 *    - TEMPLATE_ID
 * 
 * Remplacez les valeurs placeholder dans pages/contact.js
 */

// Dans pages/contact.js, remplacez :
// emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
// emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {...})

// Avec vos vraies valeurs d'EmailJS

// Variables d'environnement (créer un fichier .env.local)
/*
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
*/

// Template Email recommandé dans EmailJS :
/*
Objet : New contact from {{from_name}}

Body :
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
*/

// Calendly : Créez un compte sur https://calendly.com/
// Remplacez l'URL dans contact.js : https://calendly.com/your-calendly-link
