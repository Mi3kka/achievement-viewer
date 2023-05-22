import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <span className="text-muted">Created by <strong>Julius Virtanen</strong> and <strong>Anniina Talja</strong><br />
        This web app uses <strong>Next.js</strong> and <strong>Bootstrap</strong> to render components.<br /></span>
      </div>
    </footer>
  );
}
