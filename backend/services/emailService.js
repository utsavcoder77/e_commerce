const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
async function sendRegisterEmail(newClient) {
    const msg = {
        from: 'baralutsav89@gmail.com', // Change to your verified sender

        template_id: 'd-22ae1af406c64a449ccacb23fb41ae77',
        personalizations: [
            {
                to: {
                    email: newClient.email
                },
                dynamic_template_data: {
                    firstName: newClient.firstName,
                    dashboardUrl: "http://localhost:5173/dashboard"
                }
            }
        ]
    }
    try {
        await sgMail.send(msg);
    } catch (error) {
        console.log(error);
    }

}

module.exports = { sendRegisterEmail }