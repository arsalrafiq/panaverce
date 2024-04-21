import React from 'react';
import Link from 'next/link';

const NextLink = ({ href, children, ...props }:any) => {
  return (
    <Link href={href}>
      <span {...props}>{children}</span>
    </Link>
  );
};

export default NextLink;
