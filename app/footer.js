import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <span className="text-muted">Created by <strong>Julius Virtanen</strong> and <strong>Anniina Talja</strong> <br />
        This web app uses <strong>Next.js</strong> and <strong>Bootstrap</strong> to render components.<br /></span>
        <a href="https://github.com/Mi3kka/achievement-viewer" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/github-mark-white.svg" alt="GitHub Icon" width={40} height={40} className="git-link" />
        </a>
      </div>
    </footer>
  );
}
