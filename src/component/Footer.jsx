
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
  <div>
      <div className="hidden md:flex flex-col justify-center items-center mt-[5%] ">
      <div className=" w-[1440px] h-[650px] bg-[#242124] px-20 ">
        <div
          className=" flex mt-[5%]  gap-3 cursor-pointer"
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className=" w-[42px] h-[42px] ">
            <img
              src="/assets/angle right b.svg"
              className=" w-full h-auto object-cover"
            />
          </div>
          <span className=" text-[32px] font-clash font-normal text-white -mt-1">
            Back to top
          </span>
        </div>
        <div className=" flex justify-between  mt-[5%]">
          <div>
            <div className="">
              <h4 className=" font-clash font-normal text-[24px] text-[#DDDDDD] ">
                Email
              </h4>
              <span className=" font-aileron font-normal text-[24px] text-[#FFFFFF] ">
                info@azerotech.com
              </span>
            </div>
            <div className=" mt-5">
              <h4 className=" font-clash font-normal text-[24px] text-[#DDDDDD] ">
                Phone
              </h4>
              <span className=" font-aileron font-normal text-[24px] text-[#FFFFFF] ">
                +91 93639 59787
              </span>
            </div>
            <div className=" mt-5">
              <h4 className=" font-clash font-normal text-[24px] text-[#DDDDDD] ">
                Address
              </h4>
              <span className=" font-aileron font-normal text-[24px] text-[#FFFFFF] ">
                Vellore, Tamil Nadu - 600 002
              </span>
            </div>
          </div>

          <div>
            <h1 className=" font-clash font-normal text-[28px] text-white leading-none">
              Let’s explore ways to <br />
              increase efficiency
              <br />{" "}
            </h1>
            <span className="bg-gradient-to-r text-[28px]  from-[#FB1E01] to-white bg-clip-text text-transparent font-medium font-clash">
              Consult with our experts
            </span>
            <br />
            <div className=" flex gap-2 font-clash font-normal text-[28px] text-white mt-5">
              Talk to an Export
              <img src="/assets/arrow up right.svg" />
            </div>
          </div>
          <div>
            <div className=" flex gap-2">
              <div>
                <img src="/assets/azero-white.svg"  alt="azero-white"/>
              </div>
              <div>
                <img src="/assets/azero-logo-white.svg" className=" mt-1"  alt="azero-logo"/>
              </div>
            </div>
            <div className=" w-[313px] h-[72px] mt-3">
              <p className=" text-[16px] font-aileron font-normal text-[#FFFFFF]">
                Make your data invisible by generating unlimited identities. The
                next-level in privacy protection for online and travel.
              </p>
            </div>
            <div className="flex gap-4 mt-8 items-center">
              <img
                className="hover:scale-110 transition"
                src="/assets/Twitter → SVG.svg"
                alt="twitter"
              />
              <img
                className="hover:scale-110 transition"
                src="/assets/linked.svg"
                alt="linked"
              />
              <img
                className="hover:scale-110 transition"
                src="/assets/facebook.svg"
                alt="facebook"
              />
              <img
                className="hover:scale-110 transition"
                src="/assets/insta.svg"
                alt="insta"
              />
            </div>
          </div>
        </div>
        <div className="w-full relative    mt-[7%]">
          <img
            src="/assets/AZERO TECH.svg"
            alt="Azero Tech"
            className=" absolute  pointer-events-none"
          />

          
          <div className="relative z-10 mt-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white text-sm absolute top-10 left-0 w-full px-4 md:px-10">
              <span className="font-clash font-normal text-[18px]">
                Copyright © AzeroTech 2026
              </span>
              <span className="font-clash font-normal text-[18px]">
                We respect your privacy
              </span>
              <span className="font-clash font-normal text-[18px]">
                All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
 <footer className=" md:hidden w-full bg-[#242124] px-4 py-10 text-white flex flex-col gap-10 md:px-20">
   
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div className="w-10 h-10">
          <img
            src="/assets/angle right b.svg"
            alt="Back to top"
            className="w-full h-auto"
          />
        </div>
        <span className="text-lg font-clash font-normal">Back to top</span>
      </div>

     
      <div className="flex flex-col gap-10 md:flex-row justify-between">
      
        <div className="flex flex-col gap-4 md:w-1/3">
          <div>
            <h4 className="font-clash text-base text-[#DDDDDD]">Email</h4>
            <span className="font-aileron text-base">info@azerotech.com</span>
          </div>
          <div>
            <h4 className="font-clash text-base text-[#DDDDDD]">Phone</h4>
            <span className="font-aileron text-base">+91 93639 59787</span>
          </div>
          <div>
            <h4 className="font-clash text-base text-[#DDDDDD]">Address</h4>
            <span className="font-aileron text-base">Vellore, Tamil Nadu - 600 002</span>
          </div>
        </div>

       
        <div className="flex flex-col gap-3 md:w-1/3">
          <h1 className="font-clash text-lg leading-snug md:text-xl">
            Let’s explore ways to <br /> increase efficiency
          </h1>
          <span className="bg-gradient-to-r from-[#FB1E01] to-white bg-clip-text text-transparent font-medium font-clash text-lg md:text-xl">
            Consult with our experts
          </span>
          <div className="flex items-center gap-2 text-base md:text-lg mt-1">
            Talk to an Expert
            <img src="/assets/arrow up right.svg" alt="arrow" className="w-4 h-4 md:w-5 md:h-5"/>
          </div>
        </div>

       
        <div className="flex flex-col gap-4 md:w-1/3">
          <div className="flex items-center gap-2">
            <img src="/assets/azero-white.svg" alt="Azero" className="w-8 h-auto"/>
            <img src="/assets/azero-logo-white.svg" alt="Azero Logo" className="w-24 h-auto"/>
          </div>
          <p className="text-sm md:text-base text-[#FFFFFF]">
            Make your data invisible by generating unlimited identities. The next-level in privacy protection for online and travel.
          </p>
          <div className="flex gap-4 mt-2">
            <img className="hover:scale-110 transition-transform w-6 h-6" src="/assets/Twitter → SVG.svg" alt="Twitter" />
            <img className="hover:scale-110 transition-transform w-6 h-6" src="/assets/linked.svg" alt="LinkedIn" />
            <img className="hover:scale-110 transition-transform w-6 h-6" src="/assets/facebook.svg" alt="Facebook" />
            <img className="hover:scale-110 transition-transform w-6 h-6" src="/assets/insta.svg" alt="Instagram" />
          </div>
        </div>
      </div>

   
      <div className="w-full mt-5">
        <img
          src="/assets/AZERO TECH.svg"
          alt="Azero Tech"
          className="w-full h-auto object-contain"
        />
      </div>

    
      <div className="mt-5 border-t border-white/20 pt-5 flex flex-col md:flex-row justify-between gap-2 text-sm md:text-base">
        <span className="font-clash">Copyright © AzeroTech 2026</span>
        <span className="font-clash">We respect your privacy</span>
        <span className="font-clash">All Rights Reserved</span>
      </div>
    </footer>
  </div>
  );
};

export default Footer;
