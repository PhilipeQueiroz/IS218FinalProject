import React from 'react';
import styles from './Privacy.module.css';

const PrivacyPolicy = () => {
    return (
        <div className="terms">
            <div className={styles.privacyPolicy}>
                <div className="mb-2 text-xl font-bold">Privacy Policy for Hush Haven</div>
                <div>
                    <p>Welcome to HushHaven! Your privacy is as important to us. Please take a moment to familiarize yourself with our Privacy Policy.</p>

                    <h2 className="text-lg font-bold mt-4">1. Information We Collect</h2>
                    <p>1.1 <strong>Personal Data:</strong> While using our site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you.
                     This may include, but is not limited to, your email address, name, phone number, and postal address.</p>
                    <p>1.2 <strong>Usage Data:</strong>We may also collect information on how the service is accessed and used. This Usage Data may include information such as your computer's IP address,
                     browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.</p>

                    <h2 className="text-lg font-bold mt-4">2. Google Analytics</h2>
                    <p>2.1 <strong>Google Analytics</strong>We use Google Analytics to monitor and analyze the use of our service. Google Analytics is a web analytics service offered by Google that tracks
                     and reports website traffic. Google uses the data collected to track and monitor the use of our service. This data is shared with other Google services. Google may use the collected 
                     data to contextualize and personalize the ads of its own advertising network.</p>

                    <h2 className="text-lg font-bold mt-4">3. GDPR Compliance</h2>
                    <p>3.1 <strong>Legal Obligations:</strong> We adhere to the General Data Protection Regulation (GDPR). If you are a resident of the European Economic Area (EEA), you have certain data 
                    protection rights. Our aim is to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>

                    <h2 className="text-lg font-bold mt-4">4. Cookies and Similar Technologies</h2>
                    <p>4.1 <strong>Cookies:</strong> We use cookies to enhance your shopping experience.</p>
                    <p>4.2 <strong>Opt-Out Options:</strong> If you are not a fan of cookies, you can adjust your browser settings to block them. However, some features may not work as expected.</p>

                    <h2 className="text-lg font-bold mt-4">6. Security Measures</h2>
                    <p>5.1 <strong>Security:</strong>The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
                     While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                    
                     <h2 className="text-lg font-bold mt-4">5. Your Privacy Choices</h2>
                    <p>6.1 <strong>Control:</strong>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know
                     via email and/or a prominent notice on our Service, prior to the change becoming effective and update the effective date at the top of this Privacy Policy.</p>

                    <p>By using HushHaven, you acknowledge that you have read and agree with our Privacy Policy. If you have any questions, our customer service team is awaiting your call.</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;