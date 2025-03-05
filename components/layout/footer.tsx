import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Huggie Decking</h3>
            <p className="text-gray-400 mb-4">
              Premium decking solutions in Johannesburg. Transform your outdoor space with our expert installation
              services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/composite-decking" className="text-gray-400 hover:text-white">
                  Composite Decking
                </Link>
              </li>
              <li>
                <Link href="/services/timber-decking" className="text-gray-400 hover:text-white">
                  Timber Decking
                </Link>
              </li>
              <li>
                <Link href="/services/pool-decking" className="text-gray-400 hover:text-white">
                  Pool Decking
                </Link>
              </li>
              <li>
                <Link href="/services/deck-maintenance" className="text-gray-400 hover:text-white">
                  Deck Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/custom-designs" className="text-gray-400 hover:text-white">
                  Custom Designs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+27 69 238 9358</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@huggiedecking.co.za</span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Johannesburg, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Huggie Decking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

