export default function SocialItem({ social, size }) {
  return (
    <a href={social.url} className="social-link">
      <img
        src={social.image}
        alt={social.description}
        width={size}
        height={size}
      />
    </a>
  );
}
