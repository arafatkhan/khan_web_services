import React, { useState } from 'react';
import ContactForm from './contact-form'; // Import the ContactForm component

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const services = [
        { title: "Graphics Design", description: "Creative and professional graphic design services to bring your ideas to life." },
        { title: "Digital Marketing", description: "Boost your online presence with our expert digital marketing strategies." },
        { title: "Website Design & Development", description: "Custom website design and development tailored to your business needs." },
        { title: "Domain & Hosting", description: "Reliable domain registration and hosting services for your website." },
        { title: "Software and Apps", description: "Innovative software and app development solutions for your business." },
        { title: "Content Creation", description: "Engaging and high-quality content creation for your brand." },
        { title: "Video & Animation", description: "Professional video production and animation services to captivate your audience." },
        { title: "Product Photography", description: "High-quality product photography to showcase your products effectively." },
    ];

    return (
        <div>
            <div
                className="h-screen bg-cover bg-center relative flex items-center justify-center text-white"
                style={{ backgroundImage: "url('/images/banner.jpg')" }} // Use the banner image as a background
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 text-center font-pattanakaran uppercase">
                    <h1 className="text-6xl animate-bounce">Khan Web Services</h1>
                    <div className="mt-4">
                        <p className="text-lg">Your trusted partner in web development.</p>
                        <p className="text-lg">Delivering quality solutions for your business.</p>
                        <button
                            onClick={toggleModal}
                            className="mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 max-h-screen overflow-y-auto">
                        <button
                            onClick={toggleModal}
                            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
                        >
                            ✖
                        </button>
                        <ContactForm /> {/* Render only the form */}
                    </div>
                </div>
            )}

            {/* Services Section */}
            <div className="p-8 bg-gray-100">
                <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                            <p className="text-lg text-gray-700">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
