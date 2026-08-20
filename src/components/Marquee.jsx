import React from 'react';

export default function Marquee() {
  return (
    <div className="py-16 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="font-code-label text-code-label text-outline uppercase mx-8">UI/UX Design</span>
          <span className="font-code-label text-code-label text-outline uppercase mx-8">Frontend Development</span>
          <span className="font-code-label text-code-label text-outline uppercase mx-8">System Architecture</span>
          <span className="font-code-label text-code-label text-outline uppercase mx-8">Performance Optimization</span>
        </div>
        <div className="marquee-content" aria-hidden="true">
          <span className="font-code-label text-code-label text-outline uppercase mx-8">UI/UX Design</span>
          <span className="font-code-label text-code-label text-outline uppercase mx-8">Frontend Development</span>
          <span className="font-code-label text-code-label text-outline uppercase mx-8">System Architecture</span>
          <span className="font-code-label text-code-label text-outline uppercase mx-8">Performance Optimization</span>
        </div>
      </div>
    </div>
  );
}
