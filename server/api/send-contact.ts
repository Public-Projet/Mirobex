import { createTransport } from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // useRuntimeConfig pour accéder aux variables d'environnement
  const config = useRuntimeConfig()

    // DEBUGGING:
  console.log('--- Nuxt Runtime Config on Server ---');
  console.log('SMTP_HOST:', config.smtpHost);
  console.log('SMTP_PORT:', config.smtpPort);
  console.log('SMTP_USER:', config.smtpUser ? '******' : 'UNDEFINED');
  console.log('SMTP_PASS:', config.smtpPass ? '******' : 'UNDEFINED'); 
  console.log('SMTP_FROM:', config.smtpFrom);
  console.log('SMTP_REPLY:', config.smtpReply);
  console.log('FRONTEND_URL (public):', config.public.frontendUrl);
  console.log('-----------------------------------');

  // Vérification des variables d'environnement
  if (!config.smtpUser || !config.smtpPass) {
    throw createError({
      statusCode: 500,
      statusMessage: "Configuration SMTP manquante"
    })
  }

  const transporter = createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: false, // true pour 465
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass
    }
  })

  const currentDate = new Date().toLocaleString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  // Générer un numéro de ticket unique
  const ticketNumber = Date.now()

  // Email de notification pour l'équipe
  const adminMailOptions = {
    from: `"Mirobex contact" <${config.smtpUser}>`,
    to: config.smtpFrom,
    replyTo: body.email,
    bcc: ['contact@mirobex.bj', 'steveasterafovo@gmail.com'],
    subject: `[Mirobex] : ${body.subject} depuis contact - ${ticketNumber}`,
    text: `
      Nouveau message de contact reçu sur Mirobex
      ==========================================
      
      Numéro de ticket: ${ticketNumber}
      Date: ${currentDate}
      Nom: ${body.name}
      Email: ${body.email}
      Sujet: ${body.subject}
      
      Message:
      ${body.message}
      
      ---
      Cet email a été envoyé depuis le formulaire de contact de ${config.public.frontendUrl}
    `,
    html: `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouveau message de contact - Mirobex</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg,rgb(188, 216, 237) 0%,rgb(198, 199, 199) 100%); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <img src="cid:logoHeader" alt="Logo Mirobex" style="max-height: 80px; margin-bottom: 8px;">
            <h1 style="color: #2d3748; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              Nouveau message de contact
            </h1>
            <p style="color:rgb(74, 81, 94); margin: 10px 0 0 0; font-size: 16px; font-weight: 300;">
              Reçu le ${currentDate}
            </p>
            <div style="background: #2d3748; padding: 10px 20px; border-radius: 20px; margin-top: 15px; display: inline-block;">
              <span style="color: #ffffff; font-weight: 600; font-size: 14px;">
                🎫 Ticket N° ${ticketNumber}
              </span>
            </div>
          </div>
          
          <!-- Corps -->
          <div style="padding: 40px 30px;">
            <!-- Informations du contact -->
            <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #667eea;">
              <h2 style="color: #2d3748; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; display: flex; align-items: center; border-bottom: 1px solid #e2e8f0;">
                👤 <span style="margin-left: 8px;">Détails du contact</span>
              </h2>
              
              <div style="display: grid; grid-template-columns: auto 1fr; gap: 15px; align-items: center;">
                <div style="display: flex; align-items: center; font-weight: 600; color: #4a5568; margin-bottom: 5px;">
                  <span style="background: #e2e8f0; padding: 8px; border-radius: 6px; margin-right: 10px;">👨‍💼</span>
                  <div>
                    Nom complet
                    <div style="color: #2d3748; font-size: 16px;">${body.name}</div>
                  </div>
                </div>

                <div style="display: flex; align-items: center; font-weight: 600; color: #4a5568; margin-bottom: 5px;">
                  <span style="background: #e2e8f0; padding: 8px; border-radius: 6px; margin-right: 10px;">📧</span>
                  <div>
                    Adresse email
                    <div style="color: #2d3748; font-size: 16px;">
                      <a href="mailto:${body.email}" style="color: #667eea; text-decoration: none; font-size: 16px; font-weight: 500;">
                    ${body.email}
                  </a>
                    </div>
                  </div>
                </div>
                
                <div style="display: flex; align-items: center; font-weight: 600; color: #4a5568; margin-bottom: 5px;">
                  <span style="background: #e2e8f0; padding: 8px; border-radius: 6px; margin-right: 10px;">📝</span>
                  <div>
                    Sujet
                    <div style="color: #2d3748; font-size: 16px;">${body.subject}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Message -->
            <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #0ea5e9;">
              <h2 style="color: #2d3748; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; display: flex; align-items: center; border-bottom: 1px solid #e2e8f0;">
                💬 <span style="margin-left: 8px;">Contenu du message</span>
              </h2>
              <div style="background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; line-height: 1.6; color: #2d3748; font-size: 15px; white-space: pre-line;">
                ${body.message}
              </div>
            </div>
            
            <!-- Boutons d'action -->
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${body.email}?subject=RE: ${body.subject} - Ticket ${ticketNumber}" 
                 style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
                📩 Répondre au contact
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: linear-gradient(135deg,rgb(169, 195, 252) 0%,rgb(230, 229, 232) 100%); padding: 30px; border-radius: 0 0 8px 8px; text-align: center; color: #000000;">
            <div style="margin-bottom: 20px;">
              <img src="cid:logoFooter" alt="Logo Mirobex" style="max-width: 60px; height: auto; opacity: 0.7;">
            </div>
            
            <p style="margin: 0 0 15px 0; font-size: 14px; line-height: 1.5;">
              Cet email a été envoyé depuis le 
              <a href="${config.public.frontendUrl}/contact" style="color: #667eea; text-decoration: none;">formulaire de contact</a> 
              de Mirobex.
            </p>
            
            <div style="border-top: 1px solid #4a5568; padding-top: 20px; margin-top: 20px;">
              <p style="margin: 0; font-size: 12px;">
                📍 Cotonou, République du Bénin | 📞 +229 0147797912 | 🌐 
                <a href="${config.public.frontendUrl}" style="color: #667eea; text-decoration: none;">mirobex.bj</a>
              </p>

              <p style="margin: 0 0 10px 0; font-size: 13px;">
                © ${new Date().getFullYear()} Mirobex. Tous droits réservés.
              </p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #4a5568;">
              <p style="margin: 0; font-size: 12px; color: #718096; font-style: italic;">
                Vous pouvez répondre directement à cet email pour contacter le client.
              </p>
            </div>
          </div>
          
        </div>
      </body>
      </html>
    `,
    attachments: [
      {
        filename: 'Typo logo',
        path: 'https://raw.githubusercontent.com/Repo-Files/Mirobex/refs/heads/main/img/logoLong.png',
        cid: 'logoHeader'
      },
      {
        filename: 'Base logo',
        path: 'https://raw.githubusercontent.com/Repo-Files/Mirobex/refs/heads/main/img/logo.png',
        cid: 'logoFooter'
      }
    ]
  }

  // Email d'accusé de réception pour le client
  const clientMailOptions = {
    from: `"Mirobex contact" <${config.smtpUser}>`,
    to: body.email,
    replyTo: config.smtpReply,
    subject: `[Accusé de réception] : Votre message a été reçu - Ticket ${ticketNumber}`,
    text: `
      Accusé de réception de votre message
      ====================================
      
      Bonjour ${body.name},
      
      Nous avons bien reçu votre message concernant "${body.subject}".
      
      Numéro de ticket: ${ticketNumber}
      Date de réception: ${currentDate}
      
      Votre message:
      ${body.message}
      
      Notre équipe examinera votre demande et vous répondra dans un délai de 2 à 4 jours ouvrables.
      
      Merci de votre confiance.
      
      Cordialement,
      L'équipe Mirobex
      
      ---
      Pour toute question urgente, contactez-nous au +229 0147797912
      Site web: ${config.public.frontendUrl}
    `,
    html: `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Accusé de réception - Mirobex</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <img src="cid:logoHeader" alt="Logo Mirobex" style="max-height: 80px; margin-bottom: 8px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              Message bien reçu !
            </h1>
            <p style="color: #d1fae5; margin: 10px 0 0 0; font-size: 16px; font-weight: 300;">
              Accusé de réception du ${currentDate}
            </p>
            <div style="background: rgba(255,255,255,0.2); padding: 10px 20px; border-radius: 20px; margin-top: 15px; display: inline-block;">
              <span style="color: #ffffff; font-weight: 600; font-size: 14px;">
                🎫 Ticket N° ${ticketNumber}
              </span>
            </div>
          </div>
          
          <!-- Corps -->
          <div style="padding: 40px 30px;">
            <!-- Message de bienvenue -->
            <div style="text-align: center; margin-bottom: 30px;">
              <h2 style="color: #2d3748; margin: 0 0 15px 0; font-size: 24px; font-weight: 600;">
                👋 Bonjour ${body.name} !
              </h2>
              <p style="color: #4a5568; font-size: 16px; line-height: 1.6; margin: 0;">
                Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés.
              </p>
            </div>
            
            <!-- Résumé de la demande -->
            <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #3b82f6;">
              <h3 style="color: #2d3748; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                📋 <span style="margin-left: 8px;">Résumé de votre demande</span>
              </h3>
              
              <div style="background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <div style="margin-bottom: 15px;">
                  <strong style="color: #374151;">Sujet :</strong> 
                  <span style="color: #2d3748;">${body.subject}</span>
                </div>
                <div style="margin-bottom: 15px;">
                  <strong style="color: #374151;">Message :</strong>
                  <div style="color: #2d3748; margin-top: 8px; padding: 15px; background: #f9fafb; border-radius: 6px; line-height: 1.6; white-space: pre-line;">
                    ${body.message}
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Prochaines étapes -->
            <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #f59e0b;">
              <h3 style="color: #2d3748; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                ⏰ <span style="margin-left: 8px;">Prochaines étapes</span>
              </h3>
              
              <div style="color: #374151; line-height: 1.6;">
                <p style="margin: 0 0 10px 0;">
                  • Notre équipe examinera attentivement votre demande
                </p>
                <p style="margin: 0 0 10px 0;">
                  • Nous vous répondrons dans un délai de <strong>2 à 4 jours ouvrables</strong>
                </p>
                <p style="margin: 0;">
                  • Conservez ce numéro de ticket : <strong>${ticketNumber}</strong> pour tout suivi
                </p>
              </div>
            </div>
            
            <!-- Contact d'urgence -->
            <div style="background: linear-gradient(135deg, #fecaca 0%, #fca5a5 100%); padding: 20px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #ef4444;">
              <h3 style="color: #2d3748; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; display: flex; align-items: center;">
                🚨 <span style="margin-left: 8px;">Besoin d'une réponse urgente ?</span>
              </h3>
              <p style="color: #374151; margin: 0; font-size: 14px; line-height: 1.5;">
                Pour les demandes urgentes, contactez-nous directement au 
                <a href="tel:+2290147797912" style="color: #ef4444; text-decoration: none; font-weight: 600;">
                  +229 0147797912
                </a>
              </p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: linear-gradient(135deg,rgb(169, 195, 252) 0%,rgb(230, 229, 232) 100%); padding: 30px; border-radius: 0 0 8px 8px; text-align: center; color: #000000;">
            <div style="margin-bottom: 20px;">
              <img src="cid:logoFooter" alt="Logo Mirobex" style="max-width: 60px; height: auto; opacity: 0.7;">
            </div>
            
            <p style="margin: 0 0 15px 0; font-size: 16px; font-weight: 600; color: #2d3748;">
              Merci de votre confiance !
            </p>
            
            <p style="margin: 0 0 15px 0; font-size: 14px; line-height: 1.5;">
              L'équipe Mirobex est là pour vous accompagner dans tous vos projets.
            </p>
            
            <div style="border-top: 1px solid #4a5568; padding-top: 20px; margin-top: 20px;">
              <p style="margin: 0; font-size: 12px;">
                📍 Cotonou, République du Bénin | 📞 +229 0147797912 | 🌐 
                <a href="${config.public.frontendUrl}" style="color: #667eea; text-decoration: none;">mirobex.bj</a>
              </p>

              <p style="margin: 0 0 10px 0; font-size: 13px;">
                © ${new Date().getFullYear()} Mirobex. Tous droits réservés.
              </p>
            </div>
            
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #4a5568;">
              <p style="margin: 0; font-size: 12px; color: #718096;">
                Cet email de confirmation a été envoyé automatiquement. 
                Pour toute question, répondez à ce message.
              </p>
            </div>
          </div>
          
        </div>
      </body>
      </html>
    `,
    attachments: [
      {
        filename: 'Typo logo',
        path: 'https://raw.githubusercontent.com/Repo-Files/Mirobex/refs/heads/main/img/logoLong.png',
        cid: 'logoHeader'
      },
      {
        filename: 'Base logo',
        path: 'https://raw.githubusercontent.com/Repo-Files/Mirobex/refs/heads/main/img/logo.png',
        cid: 'logoFooter'
      }
    ]
  }

  try {
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(clientMailOptions)
    
    return { 
      success: true, 
      message: 'Message envoyé avec succès',
      ticketNumber: ticketNumber
    }
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Échec de l\'envoi de l\'email. Veuillez réessayer plus tard.'
    })
  }
})