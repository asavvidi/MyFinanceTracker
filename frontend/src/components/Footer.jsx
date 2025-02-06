import SocialList from "./SocialList";

export default function Footer({ children }) {
  const date = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="copyright-container">
          <p>Created by Alexandros.</p>
          <p>Copyright &copy; {date}</p>
        </div>
        <SocialList />
      </footer>
    </>
  );
}
