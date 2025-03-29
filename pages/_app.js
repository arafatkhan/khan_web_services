import '../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

export default function App({ Component, pageProps }) {
    return (
        <div className="overflow-x-hidden">
            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo on the Left */}
                    <div className="flex items-center">
                        <Image
                            src="/images/khan-web-service-logo.png" // Path to your logo
                            alt="Khan Web Services Logo"
                            width={50}
                            height={50}
                            className="mr-2"
                        />
                        <h1 className="text-2xl font-bold hidden md:block">
                            {/* Hide this text on mobile */}
                            Khan Web Services
                        </h1>
                    </div>

                    {/* Menu on the Right */}
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:text-gray-400">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-400">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-gray-400">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-gray-400">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-gray-400">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <Component {...pageProps} />
            </main>
        </div>
    );
}
