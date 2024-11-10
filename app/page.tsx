import Link from 'next/link';
import { FaFileAlt, FaMicrophone, FaVideo, FaCube } from 'react-icons/fa';
import React from 'react';

export default function Home() {
  return (
    <div style={containerStyle}>
      <Hero />
      <div style={iconContainerStyle}>
        <Link href="/text" style={linkStyle}>
          <FaFileAlt size={50} />
          <p>Text</p>
        </Link>
        <Link href="/audio" style={linkStyle}>
          <FaMicrophone size={50} />
          <p>Audio</p>
        </Link>
        <Link href="/video" style={linkStyle}>
          <FaVideo size={50} />
          <p>Video</p>
        </Link>
        <Link href="/3d" style={linkStyle}>
          <FaCube size={50} />
          <p>3D</p>
        </Link>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div style={heroStyle}>
      <h1>Multi Modal Processing and Augmentation</h1>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  textAlign: 'center',
};

const heroStyle: React.CSSProperties = {
  marginBottom: '40px',
};

const iconContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
};

const linkStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'black',
  border: '1px solid #ccc',
  padding: '20px',
  borderRadius: '8px',
  transition: 'transform 0.2s',
};