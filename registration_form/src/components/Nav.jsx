import React from 'react'

function Nav() {
  return (
    <div className='w-screen h-16 text-white items-center bg-proj flex justify-evenly'>
        <div className=''>
        <svg width="200" height="100" viewBox="0 0 342 117" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_51_14)">
<path d="M28 4H306V47C306 63.5685 292.569 77 276 77H58C41.4315 77 28 63.5685 28 47V4Z" fill="#F5F5F5"/>
</g>
<defs>
<filter id="filter0_d_51_14" x="0" y="-20" width="342" height="137" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="8"/>
<feGaussianBlur stdDeviation="16"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.275 0 0 0 0 0.195938 0 0 0 0 0.195938 0 0 0 0.45 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_14"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_14" result="shape"/>
</filter>
</defs>
</svg>
        </div>
        <ul className='space-x-6 font-light hidden lg:flex'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li className='border-2 px-5 '>Login</li>
        </ul>
        <a href="" className='lg:hidden'>
        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.400391 1.40447C0.400391 1.07282 0.669253 0.803955 1.0009 0.803955H19.0163C19.3479 0.803955 19.6168 1.07282 19.6168 1.40447C19.6168 1.73612 19.3479 2.00498 19.0163 2.00498H1.0009C0.669253 2.00498 0.400391 1.73612 0.400391 1.40447ZM0.400391 7.40961C0.400391 7.07796 0.669253 6.8091 1.0009 6.8091H19.0163C19.3479 6.8091 19.6168 7.07796 19.6168 7.40961C19.6168 7.74126 19.3479 8.01012 19.0163 8.01012H1.0009C0.669253 8.01012 0.400391 7.74126 0.400391 7.40961ZM1.0009 12.8142C0.669253 12.8142 0.400391 13.0831 0.400391 13.4148C0.400391 13.7464 0.669253 14.0153 1.0009 14.0153H19.0163C19.3479 14.0153 19.6168 13.7464 19.6168 13.4148C19.6168 13.0831 19.3479 12.8142 19.0163 12.8142H1.0009Z" fill="white"/>
</svg>

        </a>
    </div>
  )
}

export default Nav