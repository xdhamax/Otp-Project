import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("All fields are required");
      return;
    }

    toast.success("Message sent successfully!");
  };

  const styles = {
    section: {
      padding: '2rem',
      backgroundColor: '#f4f4f4',
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'left',
    },
    info: {
      marginBottom: '2rem',
    },
    h1: {
      textAlign: 'center',
    },
    h2: {
      textAlign: 'center',
      marginTop: '2rem',
    },
    formGroup: {
      marginBottom: '1rem',
    },
    input: {
      width: '100%',
      padding: '0.5rem',
      marginTop: '0.5rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '0.7rem 1.5rem',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    socialMedia: {
      margin: '0 5px',
      textDecoration: 'none',
      color: '#007bff',
    },
    socialMediaHover: {
      textDecoration: 'underline',
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Contact Us</h1>
        
        <div style={styles.info}>
          <p><strong>Address:</strong> 1234 Main Street, City, Country</p>
          <p><strong>Email:</strong> support@example.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          
          <h2 style={styles.h2}>Follow Us</h2>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialMedia}>Facebook</a> | 
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialMedia}>Twitter</a> | 
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialMedia}>LinkedIn</a>
          </div>
        </div>

        <div>
          <h2 style={styles.h2}>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                placeholder="Enter your name" 
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                placeholder="Enter your email" 
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleInputChange} 
                placeholder="Enter your message" 
                style={styles.input}
              />
            </div>

            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Contact;
