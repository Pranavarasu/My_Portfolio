// components/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold">Your Name</h1>
      <nav className="space-x-4">
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
