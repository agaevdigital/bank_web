import '../../../App.css';
import React from 'react';
import AppBarHome from "./AppBarHome";
import HomeFooter from "./HomeFooter";
import { Redirect } from 'react-router-dom';
import {containerStyle, sectionPageStyle} from "./styles/PublicStyle";
import Radium from "radium";

const headerContent = {
    maxWidth: "724px",
};

const componentWrapper = {
    display: "flex",
    flexDirection: "column",
    alignItems: "streich",
    width: "100%"
};

const spacer = {
    height: "20px",
    width: "100%"
};

const halfSpacer = {
    height: "10px",
    width: "100%"
};

const textHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    color: "#363636",
    fontSize: "2.0rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700 !important',
    marginTop: "0.9rem",
    marginBottom: "0.5rem",
    lineHeight: "32px",
    "@media (max-width: 500px)": {
        fontSize: "32px",
    },
};

const textSubHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    color: "#363636",
    fontSize: "1.25rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700',
    marginTop: "1.5rem",
    marginBottom: "0.8rem",
};

const textSubSubHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    color: "#363636",
    fontSize: "1.0rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: 'bold',
    marginTop: "1.7rem",
    marginBottom: "0.8rem"
};

const textParagraphHeaderStyle = {
    paddingBottom: "0",
    paddingTop: "0",
    // color: "black",
    color: "#363636",
    fontSize: "1.1rem",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700',
    marginTop: "2.0rem",
    marginBottom: "1.0rem",
};

const textNormalStyle = {
    opacity: "1",
    // color: "#363636",
    color: "black",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '400 !important',
    marginTop: 0,
    marginBottom: 20,
    lineHeight: "1.5"
};

const textBoldStyle = {
    opacity: "1",
    // color: "#363636",
    color: "black",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700',
    marginTop: 0,
    marginBottom: 20,
    lineHeight: "1.5"
};

const textSubNormalStyle = {
    opacity: "1",
    color: "black",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '400 !important',
    marginTop: 0,
    marginBottom: 0,
    lineHeight: "1.5"
};

const listTextStyle = {
    opacity: "1",
    color: "black",
    fontSize: "14px",
    fontFamily: 'ProximaNova, sans-serif',
    fontWeight: '700 !important',
    marginTop: 0,
    marginLeft: 4,
    textAlign: "left",
    lineHeight: "1.5"
};

const divHolderStyle = {
    display: "flex",
    justifyContent: "flex-start",
};

const divListItem = {
    display: "list-item",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginBottom: -10,
    color: "#ff9b0f",
};

class StaticPageHelp extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            login_redirect: false,
            register_redirect: false
        };
        this.handleLoginRedirect = this.handleLoginRedirect.bind(this);
        this.handleRegisterRedirect = this.handleRegisterRedirect.bind(this);
    }

    handleLoginRedirect() {
        this.setState({login_redirect: true});
    };

    handleRegisterRedirect() {
        this.setState({register_redirect: true});
    };


    render() {
        if (
            !this.state.login_redirect &&
            !this.state.register_redirect
        ) {
            return (

                <div>
                    <div className="App" style={componentWrapper}>

                        <header className="App-header">
                            <AppBarHome
                                loginRedirectHandler={this.handleLoginRedirect}
                                registerRedirectHandler={this.handleRegisterRedirect}
                            />
                        </header>

                        <div style={sectionPageStyle}>
                            <div style={containerStyle}>
                            <div style={headerContent}>
                                <div style={divHolderStyle}>
                                    <h1 style={textHeaderStyle}>
                                        PAYSUNION SECURITY TIPS
                                    </h1>
                                </div>
                                <div style={spacer} />
                                <p style={textNormalStyle}>
                                    These Security Tips provide useful information for a more secure use of some of the PAYSUNI’s services and products from the Customer’s side.
                                </p>
                                <p style={textNormalStyle}>
                                    We advise you to apply the following security measures, which are not exhaustive and therefore you are encouraged to take all reasonable steps to avoid improper, insecure, fraudulent and illegal use of the PAYSUNI’s services, products and infrastructure.
                                </p>
                                <p style={textNormalStyle}>
                                    Remember you are solely responsible for security breaches and consequences, including financial losses, if it happened through no fault of PAYSUNI.
                                </p>
                                <div style={spacer} />
                                <p style={textSubHeaderStyle}>
                                    KEEPING YOUR IBAN ACCOUNT SAFE
                                </p>
                                <p style={textSubSubHeaderStyle}>
                                    PAYMENT (CURRENT) ACCOUNT SECURITY TIPS
                                </p>
                                <p style={textNormalStyle}>
                                    Protect your computer from viruses and hackers. Make sure that you have installed anti-virus protection software and the latest antivirus updates/bases.
                                </p>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Run a scan to check local/removable/network drives by antivirus regularly, once per week would be OK in case there were no incidents on your PC. Otherwise, do it right after the incident.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Do not insert your smartphones, flash drives and other removable devices to unknown PCs/laptops/devices because you never know if viruses/malicious programs will be installed to your device from unknown device.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Never open/run suspicious links/sites/archives/programs including suspicious links/files received by email from well-known senders because somebody can hack your sender.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Make sure you have enabled firewall on your operating system and it is configured to pass only authorized connections.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Make sure you have installed the latest operating system updates.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Make sure you have updated the operating system and antivirus bases frequently; you can use the automatic update mode.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Lock the screen of your computer device if you need to leave your place. Also try to keep your computer in safe place and do not leave it unattended in public areas.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Configure Multi Factor Authentication (‘MFA’) known also as Two Factor Authentication (‘2FA’) if possible. All your services available to access from public internet should be protected by MFA, e.g. your web mail box, social media accounts, chat accounts etc.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        It would be advisable if your operating system is hardened according to the best security practices, for example CIS, security policy template is applied to your operating system.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Check your Internet-Banking regularly.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Use strong and complex passwords for accessing online banking.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Change your password to Internet-Banking regularly.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        You may want to use appropriate tools/password managers to keep your account data (login, password, registration email, etc.) safe; never write a password on a paper, on your desktop etc. where third parties may gain access to it.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Avoid using the same password for all bank / online accounts. As good practice, password should not contain your name / birthdate / initials or any other information that identifies you and/or your family. As good practice, you should avoid using at least previous 4 passwords.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Ensure that your browser does not store information; instead you can turn off browsers autocomplete settings.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Avoid connecting to public Wi-Fi networks if you use a laptop or mobile device for an online transaction. Access your accounts only when using networks with a secure wireless connection.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Always check that the total amount of each transaction you intend to make is correct.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Monitor your account frequently to ensure that any transaction posted corresponds to the transactions that you have made.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Access Internet-Banking frequently to ensure that a transaction was posted correctly and if not, contact PAYSUNI immediately.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Never disclose your login password or OTP codes to anyone, including PAYSUNI and its employees, since we do not need this information.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Access your Internet-Banking by login to the website manually, rather than by clicking on links that redirect you from one website to the other. Avoid clicking through emails.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Check for an encrypted connection. The website address shall start with https:// (‘s’ stands for secure) and shall contain the padlock symbol with ‘Secure’ or the unbroken key symbol. By double clicking on the padlock or key symbol, you will also get confirmation that the certificate is still valid.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Never access Internet-Banking or process transactions in case you have a confirmation from the web browser about invalid certificate.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Shred / destroy any statements / documents containing sensitive personal information using crosscut shredder. Shred files with sensitive information by using special shredding tools
                                    </p>
                                </div>
                                <div style={halfSpacer} />
                                <p style={textParagraphHeaderStyle}>
                                    IN CASE OF ANY SUSPICIONS OF IRREGULARITY / SECURITY ISSUES / FRAUD
                                </p>
                                <p style={textBoldStyle}>
                                    PLEASE CONTACT IMMEDIATELY YOUR Relationship Manager / Corporate Services Department via email in order to report the incident. You may also contact your Relationship Manager / Corporate Services department by phone during PAYSUNI working hours for assistance.
                                </p>
                                <div style={spacer} />
                                <div style={halfSpacer} />
                                <p style={textSubHeaderStyle}>
                                    KEEPING YOUR CARD SAFE
                                </p>
                                <p style={textSubSubHeaderStyle}>
                                    PREPAID CARD SECURITY TIPS
                                </p>
                                <p style={textNormalStyle}>
                                    Treat your card like your cash.
                                </p>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Keep your card safe and secure at all times and do not allow other persons to use it or make it available (intentionally or accidently) for other person to record/get know card data.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Keep your PIN confidential and do disclose it to anyone.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        If you decide to write the PIN down, disguise it so that it is not recognizable and never write the PIN on anything that is kept with or near the card.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Memorize the PIN as soon as you receive it and destroy the PIN message you received from PAYSUNI immediately.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Only disclose the card number for the purpose of making a card transaction and make sure nobody is watching you when you enter your card data. It is acceptable to use not more than 6 first and last 4 card digits if there is a need to identify your card with PAYSUNI.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        It is recommended to generally avoid performing card-not-present (remote) transactions over phone conversations or via electronic messages. Additionally, you should never send your card details over email or social media, such as for example Facebook, Twitter, Cloud storages (e.g. Dropbox), messengers (e.g. Skype, Slack, Teams). Do not store card details that are not encrypted on removable storages (e.g. USB flash), notepads etc.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Immediately report theft or loss of your card. If you suspect unauthorized use, block the card immediately using the block SMS-command and contact us immediately.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Place your card always somewhere safe and keep it under your exclusive control; do not make it available to any one either intentionally or accidently.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Make sure your card is returned to you after each transaction.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Use your card only on secured merchants /websites (avoid clicking on unsolicited emails or deal links and accessing websites that do not seem to be secure). Check the trustworthiness of the website online and do not rely only on the website reviews as these might be untrue. You can check that the payment page of an online retailer is secure if when executing a payment, the website address changes from http:// to https:/ (‘s’ stands for secure). Also the website browser shall contain the padlock symbol with ‘Secure’ or the unbroken key symbol. By double clicking on the padlock or key symbol, you will also get confirmation that the certificate is still valid.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Avoid using your card in public (i.e. public computers).
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Be careful when you enter your PIN.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Always collect your card / ATM receipts.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Keep your cards away from devices with magnets.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Avoid using your card in an ATM terminal if you notice anything unusual or suspicious or if you think it has been tampered with.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Always shield your hand when you enter your pin number. Always cover the keypad when entering the PIN.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Avoid disclosing your CVV2/CVC2 number over the phone or via email.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Check the receipts against the transaction confirmations/statements.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        For online purchases, we strongly recommend that you use the card on websites of merchants that support 3D Secure. All our Cards support and are enrolled in 3D Secure authentication (carried out using “Mastercard Secure Code” technology). 3D Secure provides greater security to internet transactions to protect your card from unauthorized use. Completion of transactions requires the use of a One-Time Password (OTP). Each OTP is specific for a particular transaction and is sent to your mobile phone number linked to the card.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Shred / destroy any statements / documents containing sensitive personal information.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Ensure that your browser does not store information; instead you can turn off browsers autocomplete settings.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Avoid connecting to public Wi-Fi networks if you use a mobile device for an online transaction.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Check the legitimacy of the apps that you are downloading. Never use apps that request access or information of your card / account.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Always check that the total amount of each purchase/payment you make is correct before entering card data.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        When shopping/paying online, get a copy of both your order form and the merchant’s terms and conditions. You should as good practice save screenshots of your purchase as well.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Check your SMS confirmations after every transaction.
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Regularly check your card balance by using the SMS command; we recommend that you check the available balance before each card transaction to monitor any unauthorized use.
                                    </p>
                                </div>
                                <div style={spacer} />
                                <p style={textNormalStyle}>
                                    If you suspect unauthorized use / fraud or if your card has been lost or stolen you should block the card immediately using the block SMS-command by sending BLOCK XXXX (replace XXXX with the last 4 digits of your card number and leave a space between BLOCK and the number) to +357 and contact us directly for assistance via the Internet-Banking. You will be provided with a form in order to report full details of the incident.
                                </p>
                                <div style={spacer} />
                                <p style={textSubHeaderStyle}>
                                    KEEPING YOUR CARD SAFE PREPAID CARD SECURITY TIPS
                                </p>
                                <div style={halfSpacer} />
                                <p style={textSubSubHeaderStyle}>
                                    PHISHING
                                </p>
                                <p style={textNormalStyle}>
                                    Phishing is a common technique used by criminals to send emails requesting your password, bank details or other personal data. General characteristics of these types of emails
                                </p>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Create the sense of urgency
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Contain grammatical mistakes, bad spelling, awkward language, missing words
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Include instructions to click on attachments
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Have the same template as the emails you receive from PAYSUNI
                                    </p>
                                </div>
                                <div style={divListItem}>
                                    <p style={listTextStyle}>
                                        Contain a link to a website similar to PAYSUNI’s website/ Internet-Banking interface, therefore by log-in / clicking they can steal your data etc.
                                    </p>
                                </div>
                                <p style={textNormalStyle}>
                                    If you consider that an email is unsafe, please contact us first. During our regular communication, we will never request for confidential information (i.e. password, PIN).
                                </p>
                                <p style={textSubSubHeaderStyle}>
                                    MALICIOUS SOFTWARE
                                </p>
                                <p style={textNormalStyle}>
                                    Malicious software can have the form of a virus installed on your PC without your approval and awareness that can steal your personal information (i.e. password / login credentials).
                                </p>
                                <p style={textSubSubHeaderStyle}>
                                    VISHING
                                </p>
                                <p style={textNormalStyle}>
                                    If you receive a phone by someone pretending to be an employee of PAYSUNI / associate of PAYSUNI or an automated voice giving you instructions and requesting private information stating that there was an unusual activity detected on your card /account, then this might be a fraudster trying to steal information. During our regular communication, we will never request for confidential information (i.e. password, PIN) over the phone.
                                </p>
                                <p style={textSubSubHeaderStyle}>
                                    SMISHING
                                </p>
                                <p style={textNormalStyle}>
                                    If you receive text messages requesting your immediate attention and containing URL or phone number, avoid responding. Smishing messages might request you to call to a phone number that has an automated voice response; usually the actual phone number is not displayed or shown a code.
                                </p>
                                <div style={spacer} />
                                <div style={spacer} />
                                <p style={textSubHeaderStyle}>
                                    Contact us:
                                </p>
                                <p style={textSubNormalStyle}>
                                    We are happy to answer any questions you may have, just send us email at support@paysuni.com.
                                </p>
                                <p style={textSubNormalStyle}>
                                    We are happy to new business partners, please contact us via email fino@paysuni.com
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>

                        <HomeFooter />

                </div>
            );
        }
        else if (this.state.login_redirect && !this.state.register_redirect) {
            return <Redirect push to="/login"/>;
        }
        else if (this.state.register_redirect && !this.state.login_redirect) {
            return <Redirect push to="/register"/>;
        }

    }
}

export default Radium(StaticPageHelp);