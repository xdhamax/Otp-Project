import React from 'react';

function About() {
  const styles = {
    section: {
      padding: '2rem',
      backgroundColor: '#f9f9f9',
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
    },
    h1: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
    },
    p: {
      fontSize: '1.2rem',
      marginBottom: '1.5rem',
    },
    h2: {
      fontSize: '2rem',
      marginTop: '2rem',
    },
    team: {
      marginTop: '3rem',
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.h1}>About Us</h1>
        <p style={styles.p}>
          Welcome to our platform! We are dedicated to providing you with the best experience possible.
          Our mission is to create seamless, intuitive, and user-friendly applications that meet your needs.
        </p>

        <h2 style={styles.h2}>Our Mission</h2>
        <p style={styles.p}>
          Our mission is to innovate and deliver high-quality software solutions that help individuals and businesses
          achieve their goals efficiently. We prioritize user satisfaction, reliability, and performance in everything we build.
        </p>

        <h2 style={styles.h2}>Our Vision</h2>
        <p style={styles.p}>
          We envision a world where technology enhances everyday life, making tasks easier, faster, and more enjoyable for everyone.
          Our goal is to push boundaries and stay ahead in the ever-evolving tech landscape.
        </p>

        <div style={styles.team}>
          <h2 style={styles.h2}>Meet the Team</h2>
          <p style={styles.p}>We are a team of passionate developers, designers, and innovators who love to create and solve problems through technology.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
