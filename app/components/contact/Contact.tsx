import React from 'react';
import './ContactStyle.css';

function Contact() {
  return (
    <section className="ContactSection">
        <div className="container">
            <div className="contacts-info flex items-center ">
                <div className="contact-svg w-full">
                    <h1>SVG</h1>
                </div>
                <div className="form w-full">
                {/* <form action="https://api.web3forms.com/submit" method="POST">

                    <!-- <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE"> -->
                    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">

                    <!-- Optional: Can be type="hidden" or type="text" for subject -->
                    <input type="hidden" name="subject" value="New Submission from Web3Forms">

                    <!-- Optional: From Name you want to see in the email
                        Default is "Notifications". you can overwrite here -->
                    <input type="hidden" name="from_name" value="Your Website Name">

                    <!-- Optional: To send the form submission as CC email -->
                    <input type="hidden" name="ccemail" value="partner@example.com">

                    <!-- Optional: default replyto will be "email" (if available), 
                        you may overwrite here -->
                    <input type="hidden" name="replyto" value="customer@example.com">

                    <!-- Required: if submitting without Javascript 
                        (because by default web3form outputs json) -->

                    <!-- If javascript, use "window.location.hash" for redirects -->
                    <input type="hidden" name="redirect" value="https://web3forms.com/success">

                    <!-- Optional: But Recommended: To Prevent SPAM Submission. 
                        Make sure its hidden by default -->
                    <input type="checkbox" name="botcheck" id="" style="display: none;">

                    <!-- Webhooks: Send your form data to Notion, Google Sheets or Zapier.
                        This feature available to PRO & Starter Plan users only -->
                    <input type="hidden" name="webhook" value="WEBHOOK_URL_HERE" />

                    <!-- Google reCaptcha v3: To Prevent SPAM Submission.PRO Plan only -->
                    <input type="hidden" name="recaptcha_response" id="recaptchaResponse">

                    <!-- Attachments: Make sure the <form> has enctype="multipart/form-data"
                        This feature available to PRO Plan users only -->
                    <input type="file" name="attachment" />

                    <!-- Custom Form Data: 
                    Then you can include your own form data you wish to receive in email. -->
                    <input type="email" name="email" required>
                    <input type="text" name="First Name" required>
                    <input type="text" name="Phone Number" required>
                    <textarea name="message" cols="30" rows="10" required></textarea>

                    <button type="submit">Submit Form</button>

                    </form> */}
                </div>
            </div>
        </div>
    </section>
  );
}

export default Contact;
