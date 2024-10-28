"use client";
import React, { useState } from "react";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import useAppContext from "@/context/AppContext";
import Link from "next/link";

const styles = {
  header: {
    backgroundColor: "rgba(26, 32, 44, 0.9)",
    backdropFilter: "blur(8px)",
    position: "sticky",
    top: 0,
    zIndex: 50,
  },
  nav: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  navContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "4rem",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    background: "linear-gradient(to right, #818cf8, #c084fc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textDecoration: "none",
  },
  navLinks: {
    display: "none",
    "@media (min-width: 768px)": {
      display: "flex",
    },
  },
  navLink: {
    color: "#cbd5e0",
    padding: "0.5rem 0.75rem",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    textDecoration: "none",
    transition: "background-color 0.3s, color 0.3s",
  },
  navLinkHover: {
    backgroundColor: "#4a5568",
    color: "#ffffff",
  },
  iconButton: {
    color: "#cbd5e0",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0.5rem",
    borderRadius: "0.375rem",
    transition: "color 0.3s, background-color 0.3s",
  },
  iconButtonHover: {
    color: "#ffffff",
    backgroundColor: "#4a5568",
  },
  mobileMenuButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    borderRadius: "0.375rem",
    color: "#cbd5e0",
    background: "none",
    border: "none",
    cursor: "pointer",
    transition: "color 0.3s, background-color 0.3s",
  },
  mobileMenu: {
    padding: "0.5rem",
  },
  mobileNavLink: {
    display: "block",
    padding: "0.5rem 0.75rem",
    borderRadius: "0.375rem",
    color: "#cbd5e0",
    fontSize: "1rem",
    fontWeight: "500",
    textDecoration: "none",
    transition: "background-color 0.3s, color 0.3s",
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { logout, loggedIn } = useAppContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {!loggedIn ? (
              <Link href="/login">Login Now</Link>
            ) : (
              <button onClick={logout} className="border p-4">
                Logout
              </button>
            )}
            <a href="/" style={styles.logo}>
              Cosmic Store
            </a>
            <div style={styles.navLinks}>
              <a
                href="/"
                style={styles.navLink}
                onMouseEnter={(e) =>
                  Object.assign(e.target.style, styles.navLinkHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.target.style, styles.navLink)
                }
              >
                Home
              </a>
              <a
                href="/products"
                style={styles.navLink}
                onMouseEnter={(e) =>
                  Object.assign(e.target.style, styles.navLinkHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.target.style, styles.navLink)
                }
              >
                Products
              </a>
              <a
                href="/about"
                style={styles.navLink}
                onMouseEnter={(e) =>
                  Object.assign(e.target.style, styles.navLinkHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.target.style, styles.navLink)
                }
              >
                About
              </a>
              <a
                href="/contact"
                style={styles.navLink}
                onMouseEnter={(e) =>
                  Object.assign(e.target.style, styles.navLinkHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.target.style, styles.navLink)
                }
              >
                Contact
              </a>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button
              aria-label="Search"
              style={styles.iconButton}
              onMouseEnter={(e) =>
                Object.assign(e.target.style, styles.iconButtonHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.target.style, styles.iconButton)
              }
            >
              <Search size={24} />
            </button>
            <button
              aria-label="Shopping cart"
              style={styles.iconButton}
              onMouseEnter={(e) =>
                Object.assign(e.target.style, styles.iconButtonHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.target.style, styles.iconButton)
              }
            >
              <ShoppingCart size={24} />
            </button>
            <button
              aria-label="User account"
              style={styles.iconButton}
              onMouseEnter={(e) =>
                Object.assign(e.target.style, styles.iconButtonHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.target.style, styles.iconButton)
              }
            >
              <User size={24} />
            </button>
            <button
              onClick={toggleMenu}
              style={styles.mobileMenuButton}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              onMouseEnter={(e) =>
                Object.assign(e.target.style, styles.iconButtonHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.target.style, styles.mobileMenuButton)
              }
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div style={styles.mobileMenu}>
            <a
              href="/"
              style={styles.mobileNavLink}
              onMouseEnter={(e) =>
                Object.assign(e.target.style, styles.navLinkHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.target.style, styles.mobileNavLink)
              }
            >
              Home
            </a>
            <a
              href="/browse-product"
              style={styles.mobileNavLink}
              onMouseEnter={(e) =>
                Object.assign(e.target.style, styles.navLinkHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.target.style, styles.mobileNavLink)
              }
            >
              Products
            </a>
            <a
              href="/about"
              style={styles.mobileNavLink}
              onMouseEnter={(e) =>
                Object.assign(e.target.style, styles.navLinkHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.target.style, styles.mobileNavLink)
              }
            >
              About
            </a>
            <a
              href="/contact"
              style={styles.mobileNavLink}
              onMouseEnter={(e) =>
                Object.assign(e.target.style, styles.navLinkHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.target.style, styles.mobileNavLink)
              }
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
