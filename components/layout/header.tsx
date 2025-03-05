"use client"

import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image src="/images/logo.png" alt="logo" className="py-[1rem] absolute w-[5rem] md:w-[9rem] h-[10rem] md:h-[18rem]" width={200} height={50} />
                        {/* <span className="text-2xl font-bold text-amber-600">Huggie Decking</span> */}
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-amber-600 font-medium">
                            Home
                        </Link>
                        <Link href="/services" className="text-gray-700 hover:text-amber-600 font-medium">
                            Services
                        </Link>
                        <Link href="/projects" className="text-gray-700 hover:text-amber-600 font-medium">
                            Projects
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-amber-600 font-medium">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-amber-600 font-medium">
                            Contact
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-center">
                            <Phone className="h-5 w-5 text-amber-600 mr-2" />
                            <span className="text-gray-700 font-medium">+27 69 238 9358</span>
                        </div>
                        <Button className="bg-amber-600 hover:bg-amber-700">Get a Quote</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-amber-600 font-medium py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/services"
                                className="text-gray-700 hover:text-amber-600 font-medium py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="/projects"
                                className="text-gray-700 hover:text-amber-600 font-medium py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-700 hover:text-amber-600 font-medium py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-700 hover:text-amber-600 font-medium py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <div className="pt-2">
                                <Button className="w-full bg-amber-600 hover:bg-amber-700">Get a Quote</Button>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}

