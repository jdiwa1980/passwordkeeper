import { 
        FaFacebook, 
        FaGithub, 
        FaWifi, 
        FaLinkedin, 
        FaYahoo, 
        FaYoutube, 
        FaApple, 
        FaTwitter, 
        FaGlobe, 
        FaPlaystation, 
        FaSteam,
      } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { RiNetflixFill } from "react-icons/ri";

export const iconList = [
    {
        keywords: ["facebook"],
        icon:  <i className="nes-icon facebook" />,
    },
    {
        keywords: ["google", "gmail"],
        icon: <i className="nes-icon gmail"/>,
    },
    {
        keywords: ["github"],
        icon: <i className="nes-icon github"/>,
    },
    {
        keywords: ["wifi", "internet"],
        icon: <FaWifi />,
    },
    {
        keywords: ["linkedin"],
        icon: <i className="nes-icon linkedin"/>,
    },
    {
        keywords: ["yahoo"],
        icon: <FaYahoo />,
    },
    {
        keywords: ["youtube"],
        icon: <i className="nes-icon youtube"/>,
    },
    {
        keywords: ["apple", "mac", "icloud"],
        icon: <FaApple size={25}/>,
    },
    {
        keywords: ["twitter"],
        icon: <i className="nes-icon twitter"/>,
    },
    {
        keywords: ["netflix"],
        icon: <RiNetflixFill size={25}/>,
    },
    {
        keywords: ["playstation", "ps2", "ps3", "ps4", "ps5"],
        icon: <FaPlaystation size={25}/>
,
    },
    {
        keywords: ["steam", "Steam" ],
        icon: <FaSteam size={25}/>,
    },
    {
        keywords: [""],
        icon: <FaGlobe size={25}/>,
    },
    
];

