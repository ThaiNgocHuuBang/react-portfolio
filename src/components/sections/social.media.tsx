import { FaFacebook } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
interface IProps {
  github: string;
  tiktok: string;
  udemy: string;
  facebook: string;
}
const SocialMedia = (props: IProps) => {
  const { github, tiktok, udemy, facebook } = props;

  return (
    <div className="my-4 d-flex items-center gap-3">
      <a
        href={github}
        target="_blank"
        className="highlight"
        title="GitHub ThaiNgocHuuBang"
      >
        <SiGithub size={30} />
      </a>
      <a
        href={facebook}
        target="_blank"
        className="highlight"
        title="Facebook ThaiNgocHuuBang"
      >
        <FaFacebook size={30} />
      </a>
      <a href={""} target="_blank" className="highlight" title="Tiktok">
        <FaTiktok size={30} />
      </a>
      <a href={""} target="_blank" className="highlight" title="Udemy">
        <SiUdemy size={30} />
      </a>
    </div>
  );
};

export default SocialMedia;
