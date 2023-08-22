import React, { Image } from 'react';
import 'tailwindcss/tailwind.css';

export default function AvatarWithRipple1() {
  return (
    <div className="flex justify-center items-center h-54 w-full overflow-hidden">
      <div className="relative w-24 h-24 before:absolute before:w-[300%] before:h-[300%] before:-ml-[100%] before:-mt-[100%] before:rounded-full before:bg-teal before:opacity-0 animate-pulseRing">
        <Image
          src="/images/journi-avatar.png"
          className="absolute w-full h-full rounded-full top-0 object-cover"
          alt="avatar"
        />
      </div>
    </div>
  );
}