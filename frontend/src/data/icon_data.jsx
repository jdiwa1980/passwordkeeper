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
        FaInstagram,
        FaReddit,
        FaMicrosoft,
        FaXbox,
        FaQuestionCircle,
        FaPaypal,
        FaAmazon,
        FaSpotify,
        FaLaptop,
        FaTiktok,
        FaPinterest,
        FaDiscord,
        FaWhatsapp,
        FaLinux,
        FaAndroid,
        FaGoogleDrive,
      } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { BsNintendoSwitch, BsClaude } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { RiNetflixFill } from "react-icons/ri";
import { TbBrandDisney, TbDeviceCctv } from "react-icons/tb";
import { SiGooglegemini, SiReplit, SiUbisoft } from "react-icons/si";
import { AiFillOpenAI } from "react-icons/ai";
import { SiHbo, SiRockstargames, SiCisco } from "react-icons/si";
import { MdEmojiTransportation } from "react-icons/md";
import { LiaGlobeEuropeSolid } from "react-icons/lia";
import { FcCellPhone } from "react-icons/fc";

export const iconLookup = [
    {
        keywords: ["Spotify", "music", "playlist", "audio" ],
        icon:  <FaSpotify />,
    },
    {
        keywords: ["Amazon", "prime videos", "subscription", "tv" ],
        icon:  <FaAmazon />,
    },
    {
        keywords: ["lto", "drivers license", "plate number", "registration" ],
        icon:  <MdEmojiTransportation />,
    },
    {
        keywords: ["TAPO", "cctv", "camera", "security" ],
        icon:  <TbDeviceCctv />,
    },
    
    {
        keywords: ["Rockstart", "games", "GTA", "RDR" ],
        icon:  <SiRockstargames />,
    },
    {
        keywords: ["Replit", "dev", "code", ],
        icon:  <SiReplit />,
    },
    {
        keywords: ["HBO", "Max", "movies", "series", "subscription", ],
        icon:  <SiHbo />,
    },
    {
        keywords: ["Netflix", "series", "movies", "series", "subscription", ],
        icon:  <RiNetflixFill />,
    },
    {
        keywords: ["Chatgpt", "OPENAI", "llm", "ROBOT", "prompt", ],
        icon:  <AiFillOpenAI/>,
    },
    {
        keywords: ["claude","AI", "OPENAI", "llm", "ROBOT", "prompt" ],
        icon:  <BsClaude />,
    },
    {
        keywords: ["Bank", "BDO", "bpi", "PNB", "security bank", "landbank", "RCBC", "HSBC"],
        icon:  <CiBank />,
    },
    {
        keywords: ["Disney", "disney+"],
        icon:  <TbBrandDisney />,
    },
    {
        keywords: ["Nintendo", "Switch"],
        icon:  <BsNintendoSwitch />,
    },
    {
        keywords: ["Xbox"],
        icon:  <FaXbox />,
    },
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
    {
        keywords: ["?"],
        icon: <FaQuestionCircle />,
    },
    
];

export const iconPicker = {
    socials : [
        {
            name: "Facebook",
            icon: FaFacebook,
        },
        {
            name: "Instagram",
            icon: FaInstagram,
        },
        {
            name: "Twitter",
            icon: FaTwitter,
        },
        {
            name: "XTwitter",
            icon: FaXTwitter,
        },
        {
            name: "Reddit",
            icon: FaReddit,
        },
        {
            name: "Tiktok",
            icon: FaTiktok,
        },
        {
            name: "Pinterest",
            icon: FaPinterest,
        },
        {
            name: "Discord",
            icon: FaDiscord,
        },
        {
            name: "Whatsapp",
            icon: FaWhatsapp,
        },
        {
            name: "placeholder",
            icon: FaQuestionCircle,
        },
        
    ],

    media: [
        {
            name: "Steam",
            icon: FaSteam,
        },
        {
            name: "Ubisoft",
            icon: SiUbisoft,
        },
        
        {
            name: "Playstation",
            icon: FaPlaystation,
        },
        {
            name: "Nintendo",
            icon: BsNintendoSwitch,
        },
        {
            name: "Netflix",
            icon: RiNetflixFill,
        },
        {
            name: "Disney",
            icon: TbBrandDisney,
        },
        {
            name: "HBO",
            icon: SiHbo,
        },
        {
            name: "Amazon",
            icon: FaAmazon,
        },
        {
            name: "Spotify",
            icon: FaSpotify,
        },
        {
            name: "Rockstar",
            icon: SiRockstargames,
        },
        {
            name: "CCTV",
            icon: TbDeviceCctv,
        },
        {
            name: "Laptop",
            icon: FaLaptop,
        },
        {
            name: "Cellphone",
            icon: FcCellPhone,
        },
        {
            name: "Linux",
            icon: FaLinux,
        },
        {
            name: "Android",
            icon: FaAndroid,
        },
        {
            name: "Googledrive",
            icon: FaGoogleDrive,
        },
    ],

    work: [
        {
            name: "Yahoo",
            icon: FaYahoo,
        },
        {
            name: "Gmail",
            icon: BiLogoGmail,
        },
        {
            name: "Linkedin",
            icon: FaLinkedin,
        },
        {
            name: "Github",
            icon: FaGithub,
        },
        {
            name: "wifi",
            icon: FaWifi,
        },
        {
            name: "Microsoft",
            icon: FaMicrosoft,
        },
        {
            name: "Apple",
            icon: FaApple,
        },
        {
            name: "Bank",
            icon: CiBank,
        },
        {
            name: "Claude",
            icon: BsClaude,
        },
        {
            name: "Gemini",
            icon: SiGooglegemini,
        },
        {
            name: "Chatgpt",
            icon: AiFillOpenAI,
        },
        {
            name: "Replit",
            icon: SiReplit,
        },
        {
            name: "LTO",
            icon: MdEmojiTransportation,
        },
        {
            name: "Globe",
            icon: LiaGlobeEuropeSolid,
        },
        {
            name: "Paypal",
            icon: FaPaypal,
        },
        {
            name: "Cisco",
            icon: SiCisco,
        },
    ],
    
};

