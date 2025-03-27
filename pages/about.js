import React from 'react';

export default function About() {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-center mb-8 ">About Khan Web Services</h1>
            
            {/* Grid Layout for Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Who We Are */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                    <h2 className="text-2xl font-semibold mb-4 animate-pulse">Who We Are</h2>
                    <p className="text-lg text-gray-700">
                        Khan Web Services is a leading provider of web development solutions. We specialize in creating
                        innovative, scalable, and user-friendly websites tailored to meet the unique needs of our clients.
                    </p>
                </div>

                {/* Our Mission */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-700">
                        Our mission is to empower businesses by delivering high-quality web solutions that drive growth,
                        enhance user engagement, and create lasting value.
                    </p>
                </div>

                {/* Our Vision */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                    <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                    <p className="text-lg text-gray-700">
                        We envision a world where every business, regardless of size, has access to cutting-edge web
                        technologies that enable them to thrive in the digital age.
                    </p>
                </div>
            </div>
        </div>
    );
}
