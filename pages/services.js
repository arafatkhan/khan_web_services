import React from 'react';

export default function Services() {
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
        <div className="p-8">
            <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
            
            {/* Grid Layout for Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                        <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                        <p className="text-lg text-gray-700">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
