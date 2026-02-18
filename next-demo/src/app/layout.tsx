import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Landing Page",
  description: "A simple landing page created for beginners.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="container nav">
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MyLogo</div>
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="container">
            <p>&copy; 2026 My Awesome Company. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
