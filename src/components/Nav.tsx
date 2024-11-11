'use client';
import  { useState}  from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { X, Menu as MenuIcon } from 'lucide-react'


function Navbar():JSX.Element {
const[isopen, setIsopen] = useState(false);
 
const handleMenuToggle = () => {
  setIsopen(!isopen);
};

   const handleLinkClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsopen(false);
  };

const navLinks = [{id:'about' , label: 'About'},
                  {id:'skills' , label: 'Skills'},
                  {id:'project' , label: 'Project'},
                  {id:'contactme' , label: 'Contact'}
];

const socialLinks = [{href:"https://www.linkedin.com/in/alishba-qureshi-6188762b5/",
                      icon:<FaLinkedin/>,
                      label:'LinkedIn',
                    },

                    {href:"https://www.facebook.com/profile.php?id=100074409559882&sk=about",
                      icon:<FaFacebook/>,
                      label:'Facebook',
                    },
                  
                    {href:"https://github.com/alishba66",
                      icon:<FaGithub/>,
                      label:'Github',
 } ];
 const renderLinks = () =>
 navLinks.map(({ id , label }) =>( <li key={id}
 className='font-semibold text-sm transition cursor-pointer
 hover:text-[#A594FD]'
     
   onClick={()=> handleLinkClick(id)}
   >
    {label}
   </li>
   ));

   const renderSocialIcons = () => 
      socialLinks.map(({ href, icon, label }) => (
        <Link
        key={label}
        href={href}
        target="_blank"
        aria-label={label}
        className="transition hover:text-[#A594FD]"
        >
          {icon}
          </Link>
      ));
      return(
         <nav className='container z-20 flex items-center justify-between p-4 mx-auto  md:pt-8 md:justify-around'
         > 
         <h3 className='z-30 text-xl font-bold transition-transform duration-300 cursor-pointer hover:-rotate-6 pr-80'>
         My Portfolio
         </h3>

         <div className='hidden gap-4 items-center md:flex'>
         {renderSocialIcons()}
         </div>

         {/* mobile view*/}
         <button className='z-30 md:hidden' onClick={handleMenuToggle}>
           {isopen ? <X /> : <MenuIcon/>}    
         </button>

         <div className={`absolute md:hidden bg-[#0f1724] z-0 left-0 top-[58px] w-full p-4 
         transition-all duration-500 ease-in-out ${isopen 
          ? 'translate-y-0 opacity-100'
          :'translate-y-[200%] opacity-0'
         }`}
          >
          <ul className='flex flex-col items-center gap-4'>
          {renderLinks()}
          </ul>
          
          <div className='flex items-center justify-center gap-4 mt-6'>
          {renderSocialIcons()}
          </div>
          
          </div>
         
         </nav> 
      );
     
                      

  
}

export default Navbar;
