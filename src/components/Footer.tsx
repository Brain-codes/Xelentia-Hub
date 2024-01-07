import facebook from "../../public/facebook.svg";
import instagram from "../../public/instagram.svg";
import linkedin from "../../public/linkedin.svg";
import logo from "../../public/logo1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="bg-[#000327] py-20 px-[5%] flex md:flex-row flex-col justify-between">
        <div className="flex flex-col gap-10 md:w-[55%] w-full">
          <div className="flex gap-5 items-center">
            <img src={logo} alt="" className="w-15 h-10" />{" "}
            <p className="text-[#eef5ff69] text-[20px]">Xellentia Hub</p>
          </div>
          <p className="text-[#eef5ff69]  md:text-xl text-[14px] font-normal my-10 w-full">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, cupiditate. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque praesentium temporibus accusantium qui
            voluptatum est quia in impedit facilis quae. Eligendi molestiae unde
            nemo, sit ipsam enim porro sequi in deleniti iste molestias
            blanditiis dolores facilis reprehenderit facere iusto placeat?
          </p>
          <div className="flex gap-10 flex-wrap md:justify-end justify-center">
            <SocialFooter icon={facebook} name="Facebook" />
            <SocialFooter icon={instagram} name="Instagram" />
            <SocialFooter icon={linkedin} name="Linkedin" />
          </div>
        </div>
        <div className="text-[#eef5ff69] flex md:flex-col gap-10 md:items-end md:mt-0 mt-10 flex-row text-[20px] justify-center flex-wrap">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">SERVICES</a>
          <a href="#">CONTACT</a>
        </div>
      </div>
      <div className="bg-[#1a1e3f] flex md:flex-row flex-col md:gap-0 gap-10 justify-between items-center py-7 px-[5%]">
        <p className="text-[#EEF5FF]">
          Developed by <a href="">anonimos_brain</a>
        </p>
        <p className="text-[#EEF5FF]">Copyright ©{currentYear} Xellentia Hub</p>
      </div>
    </div>
  );
};

export default Footer;

type socialFooterProp = { icon: string; name: string };
export const SocialFooter = ({ icon, name }: socialFooterProp) => {
  return (
    <div className="rounded-lg flex flex-col items-center justify-center bg-[#eef5ff1c] py-10 px-10">
      <img src={icon} alt="" />
      <p className="mt-8 text-[#EEF5FF]">{name}</p>
    </div>
  );
};
