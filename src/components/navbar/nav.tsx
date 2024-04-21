// "use client"
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"


// const Nav = () => {
//   return (
//     <div className='bg-white text-gray-900 sticky top-0'>
//        <header className='flex justify-between items-center p-4 border-b'> 
//           <div>
          
//           <Image
//       src="/panaverse-logo.png"
//       width={110}
//       height={110}
//       alt="panaverse-logo"
//     />
//            </div> 
//          <div className='text-sm'> 
//        <nav className='flex space-x-4 items-center'>
// <Link className="text-gray-900" href="/">
// Home
// </Link>
//           <Select>
//             <SelectTrigger id="course">
//               <SelectValue placeholder="course" />
//             </SelectTrigger>

//             <SelectContent position="popper">
//               <Link href={'/meta/page.tsx'}> <SelectItem value="course1">Web 3.0 and Metaverse Developer</SelectItem> </Link>
              
//               <Link href={'/meta/page.tsx'}> </Link> <SelectItem value="course2">Artifical Intellgence</SelectItem> </Link>
//               <Link href={'/meta/page.tsx'}> </Link> <SelectItem value="course3">Cloud-Native Computing</SelectItem> </Link>
//               <Link href={'/meta/page.tsx'}> </Link> <SelectItem value="course4">Ambient Computing And IoT</SelectItem> </Link>
//               <Link href={'/meta/page.tsx'}> <SelectItem value="course5">Genomics and Bioinformatics</SelectItem> </Link>
//               <Link href={'/meta/page.tsx'}> </Link> <SelectItem value="course6">Network Programmabitily and Automation</SelectItem> </Link>
//             </SelectContent>
//           </Select>
         
//            </nav> </div>
//              </header>  
//     </div>
//   )
// }

// export default Nav
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import NextLink from '@/components/nextLink/nextLink'; // Import the custom NextLink component

const Nav = () => {
  return (
    <div className="bg-white text-gray-900 sticky top-0">
      <header className="flex justify-between items-center p-4 border-b">
        <div>
          <Image src="/panaverse-logo.png" width={110} height={110} alt="panaverse-logo" />
        </div>
        <div className="text-sm">
          <nav className="flex space-x-4 items-center">
            <Link href="/meta" className="text-gray-900">
              Home
            </Link>
            <Select>
              <SelectTrigger id="course">
                <SelectValue placeholder="course" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem key="course1" value="course1">
                  <NextLink href="/meta">Web 3.0 and Metaverse Developer</NextLink>
                </SelectItem>
                <SelectItem key="course2" value="course2">
                  <NextLink href="/ai/page.tsx">Artificial Intelligence</NextLink>
                </SelectItem>
                {/* Add similar SelectItem elements for other courses */}
              </SelectContent>
            </Select>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Nav;
