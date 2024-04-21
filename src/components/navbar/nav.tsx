import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';

const Nav = () => {
  return (
    <div className="bg-white text-gray-900 sticky top-0">
      <header className="flex justify-between items-center p-4 border-b">
        <div>
          <Image src="/panaverse-logo.png" width={110} height={110} alt="panaverse-logo" />
        </div>
        <div className="text-sm">
          <nav className="flex space-x-4 items-center">
            <Link href="/" className="text-gray-900">
              Home
            </Link>
            <Select>
              <SelectTrigger id="course">
                <SelectValue placeholder="course" />
              </SelectTrigger>
              <SelectContent position="popper">
                <Link href="../meta/page.tsx">
                  <SelectItem value="course1">Web 3.0 and Metaverse Developer</SelectItem>
                </Link>
                <Link href="/meta">
                  <SelectItem value="course2">Artificial Intelligence</SelectItem>
                </Link>
                <Link href="/meta">
                  <SelectItem value="course3">Cloud-Native Computing</SelectItem>
                </Link>
                <Link href="/meta">
                  <SelectItem value="course4">Ambient Computing And IoT</SelectItem>
                </Link>
                <Link href="/meta">
                  <SelectItem value="course5">Genomics and Bioinformatics</SelectItem>
                </Link>
                <Link href="/meta">
                  <SelectItem value="course6">Network Programmability and Automation</SelectItem>
                </Link>
              </SelectContent>
            </Select>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Nav;
