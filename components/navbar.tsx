'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link"
import Image from "next/image"

function Logo() {
	return (
		<Link aria-label="Longjun Wang" href="/">
			<Image src="/logo.svg" width={60} height={0} alt="Longjun Wang" className="inline-block mx-auto" />
		</Link>
	)
}

export default function Navbar() {
	const pathname = usePathname() || '/';
	return (
		<header className="text-center py-10 md:my-20">
			<Logo />
			<h1 className="font-bold text-3xl font-serif">Longjun.Wang</h1>
			<span className="text-gray-400 font-serif">- an engineer interested in design -</span>
		</header>
	)
}