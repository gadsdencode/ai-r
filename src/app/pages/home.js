import AvatarWithRipple2 from '@/components/avatarripple2';
import AvatarWithRipple3 from '@/components/avatarripple3';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div>
  <Head>
    <title>AI-E</title>
  </Head>
  <main>
    <div className="justify-center mx-auto max-w-[380px, 768px, 992px, 1200px]">
      <div className="justify-center mx-auto max-w-[380px, 768px, 992px, 1200px]">
        <div className="h-auto w-[100%, 768px, 992px, 1200px]">
          <div className="h-auto w-auto">
            <div className="ml-16 fixed top-[19%] z-10">
              <div className="flex space-x-4">
                <div className="relative inline-block text-center">
                  <button className="m-2 bg-blue-600 text-white rounded px-2">Menu</button>
                  <button onClick={onOpen} className="m-2 bg-blue-600 text-white rounded px-2">FAQ</button>
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <Link href="/">
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">journi<AvatarWithRipple2 /></a>
                    </Link>
                    <Link href="/air">
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AI-R<AvatarWithRipple3 /></a>
                    </Link>
                    <Link href="/page">
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">TBD - Work In Progress</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-auto fixed max-w-[320px] mx-auto h-10%">
              {/* ... */} 
              {/* Place `Drawer` component here. Since there is no direct equivalent in Tailwind, you'd need to create a custom modal or dropdown. */}
              {/* ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
)
  }