import '../styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
    return (
        <div>
            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo and Tagline on the Left */}
                    <div>
                        <h1 className="text-2xl font-bold">Khan Web Services</h1>
                        <p className="text-sm text-gray-300">Your trusted partner in web development</p>
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
                {/* Removed mt-4 to eliminate space */}
                <Component {...pageProps} />
            </main>
        </div>
    );
}
