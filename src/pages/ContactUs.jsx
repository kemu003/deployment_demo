import React, { useState } from 'react';

const ContactUs = () => {
  const phoneNumber = '+254731522280';
  const [reason, setReason] = useState('');

  // Map of reasons to related SMS messages
  const reasonMessages = {
    Order: 'Hello, I would like to place an order.',
    Suggestions: 'Hi, I have a suggestion for your service.',
    Application: 'Hello, I am interested in submitting an application.',
    Comments: 'Hey, I have some comments to share with you.',
    Complain: 'Hi, I’d like to raise a complaint regarding your service.',
  };

  const links = {
    whatsapp: 'https://wa.me/254731522280?text=' + encodeURIComponent('Hello, I visited your website and would like to get in touch!'),
    facebook: 'https://www.facebook.com/profile.php?id=100072239960786',
    email: 'mailto:rapstarinvestment@gmail.com',
    phone: `tel:${phoneNumber}`,
  };

  // Get the SMS link dynamically based on selected reason
  const getSmsLink = () => {
    if (!reason) return '#';
    const message = reasonMessages[reason];
    return `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.text}>Reach out to us through any of the platforms below:</p>

      <div style={styles.links}>
        <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" style={styles.button}>
          WhatsApp
        </a>
        <a href={links.facebook} target="_blank" rel="noopener noreferrer" style={styles.button}>
          Facebook
        </a>
        <a href={links.email} target="_blank" rel="noopener noreferrer" style={styles.button}>
          Email
        </a>
        <a href={links.phone} style={{ ...styles.button, backgroundColor: '#007bff' }}>
          Call Us
        </a>

        {/* Reason selector */}
        <select value={reason} onChange={handleReasonChange} style={styles.select}>
          <option value="" disabled>
            Why send an SMS?
          </option>
          <option value="Order">Order</option>
          <option value="Suggestions">Suggestions</option>
          <option value="Application">Application</option>
          <option value="Comments">Comments</option>
          <option value="Complain">Complain</option>
        </select>

        {/* Preview selected message */}
        {reason && (
          <p style={styles.preview}>
            Preview: "{reasonMessages[reason]}"
          </p>
        )}

        {/* Send SMS button */}
        <a
          href={getSmsLink()}
          style={{
            ...styles.button,
            backgroundColor: '#28a745',
            ...(reason ? {} : styles.disabledButton),
          }}
          onClick={(e) => {
            if (!reason) {
              e.preventDefault();
              alert('Please select a reason before sending an SMS.');
            }
          }}
        >
          Send SMS
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
  },
  button: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#25D366',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  select: {
    width: '100%',
    maxWidth: '300px',
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    textAlign: 'center',
  },
  preview: {
    fontStyle: 'italic',
    color: '#555',
  },
  disabledButton: {
    backgroundColor: '#a0a0a0',
    cursor: 'not-allowed',
  },
};

export default ContactUs;
