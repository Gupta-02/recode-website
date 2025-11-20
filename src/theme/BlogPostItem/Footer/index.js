import React from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import SocialShare from '@site/src/components/SocialShare';

export default function FooterWrapper(props) {
  const { metadata } = props;
  const { title, permalink, description } = metadata;

  // Construct full URL
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.recodehive.com';
  const fullUrl = `${baseUrl}${permalink}`;

  return (
    <>
      <Footer {...props} />
      <SocialShare
        title={title}
        url={fullUrl}
        description={description}
      />
    </>
  );
}
