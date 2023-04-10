import React from 'react';
import Link from "next/link";

export default function Navbar() {
  return (
<div className="flex justify-between sticky top-0 h-20 items-end pb-4 z-10" style={{backgroundColor: "rgba(0,0,0,0.5)", color: "white"}}>
      <p className="mx-10 align-bottom font-bold text-3xl">kucingkoding</p>
      <div className="flex flex-row gap-x-10 mx-10 font-thin text-lg">
        <Link href="/">Basic Coding</Link>
        <Link href="/tasks">Kumpulan Tugas</Link>
        <Link href="/community">Komunitas</Link>
        <Link href="/about">Tentang Kami</Link>
      </div>
    </div>
  );
}

