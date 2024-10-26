import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const styles = {
  footer: {
    backgroundColor: 'rgba(26, 32, 44, 0.9)',
    backdropFilter: 'blur(8px)',
    color: '#e2e8f0',
    fontFamily: 'sans-serif',
  },
  content: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '3rem 1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '2rem',
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #818cf8, #c084fc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  description: {
    fontSize: '0.875rem',
    color: '#cbd5e0',
    marginTop: '1rem',
  },
  title: {
    color: '#ffffff',
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '1rem',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: '#cbd5e0',
    fontSize: '0.875rem',
    textDecoration: 'none',
    ':hover': {
      color: '#ffffff',
    },
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
  },
  iconButton: {
    color: '#cbd5e0',
    ':hover': {
      color: '#ffffff',
    },
  },
  newsletterForm: {
    display: 'flex',
    marginTop: '1rem',
  },
  input: {
    backgroundColor: '#2d3748',
    color: '#ffffff',
    padding: '0.5rem 1rem',
    borderTopLeftRadius: '0.375rem',
    borderBottomLeftRadius: '0.375rem',
    border: 'none',
    ':focus': {
      outline: 'none',
      boxShadow: '0 0 0 2px #4299e1',
    },
  },
  button: {
    backgroundColor: '#4299e1',
    color: '#ffffff',
    padding: '0.5rem 1rem',
    borderTopRightRadius: '0.375rem',
    borderBottomRightRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#3182ce',
    },
    ':focus': {
      outline: 'none',
      boxShadow: '0 0 0 2px #4299e1',
    },
  },
  bottom: {
    borderTop: '1px solid #4a5568',
    marginTop: '2rem',
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  copyright: {
    fontSize: '0.875rem',
    color: '#cbd5e0',
  },
  bottomLinks: {
    display: 'flex',
    gap: '1rem',
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <div style={styles.grid}>
          <div>
            <div style={styles.logo}>Cosmic Store</div>
            <p style={styles.description}>
              Explore the universe of cutting-edge technology and futuristic gadgets.
            </p>
          </div>
          <div>
            <h3 style={styles.title}>Quick Links</h3>
            <ul style={styles.linkList}>
              <li><a href="/products" style={styles.link}>All Products</a></li>
              <li><a href="/about" style={styles.link}>About Us</a></li>
              <li><a href="/contact" style={styles.link}>Contact</a></li>
              <li><a href="/faq" style={styles.link}>FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 style={styles.title}>Customer Service</h3>
            <ul style={styles.linkList}>
              <li><a href="/shipping" style={styles.link}>Shipping Info</a></li>
              <li><a href="/returns" style={styles.link}>Returns & Exchanges</a></li>
              <li><a href="/terms" style={styles.link}>Terms & Conditions</a></li>
              <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 style={styles.title}>Connect With Us</h3>
            <div style={styles.socialIcons}>
              <a href="#" aria-label="Facebook" style={styles.iconButton}>
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Twitter" style={styles.iconButton}>
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="Instagram" style={styles.iconButton}>
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="YouTube" style={styles.iconButton}>
                <Youtube size={24} />
              </a>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <h4 style={{ ...styles.title, fontSize: '0.875rem' }}>Subscribe to our newsletter</h4>
              <form style={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={styles.input}
                  aria-label="Email for newsletter"
                />
                <button type="submit" style={styles.button}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div style={styles.bottom}>
          <p style={styles.copyright}>
            © 2023 Cosmic Store. All rights reserved.
          </p>
          <div style={styles.bottomLinks}>
            <a href="/terms" style={styles.link}>Terms</a>
            <a href="/privacy" style={styles.link}>Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;