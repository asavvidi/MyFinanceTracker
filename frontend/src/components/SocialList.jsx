import { mySocial } from "../data/myData.js";
import SocialItem from "./SocialItem";
export default function SocialList() {
  return (
    <div className="social-container">
      {mySocial.map((social) => {
        return <SocialItem social={social} size={30} key={social.url} />;
      })}
    </div>
  );
}
