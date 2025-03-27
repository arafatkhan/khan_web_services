import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: '',
    });
    const [mathQuestion, setMathQuestion] = useState({});
    const [userAnswer, setUserAnswer] = useState('');
    const [isMathValid, setIsMathValid] = useState(false);

    const services = [
        "Graphics Design",
        "Digital Marketing",
        "Website Design & Development",
        "Domain & Hosting",
        "Software and Apps",
        "Content Creation",
        "Video & Animation",
        "Product Photography",
    ];

    // Generate a random math question
    const generateMathQuestion = () => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operator = Math.random() > 0.5 ? '+' : '-';
        const correctAnswer = operator === '+' ? num1 + num2 : num1 - num2;

        setMathQuestion({ num1, num2, operator, correctAnswer });
        setUserAnswer('');
        setIsMathValid(false);
    };

    // Validate the user's answer
    const validateMathAnswer = () => {
        if (parseInt(userAnswer, 10) === mathQuestion.correctAnswer) {
            setIsMathValid(true);
            alert('Math test passed!');
        } else {
            alert('Incorrect answer. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isMathValid) {
            alert('Please pass the math test before submitting the form.');
            return;
        }

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', service: '', message: '' });
                generateMathQuestion(); // Generate a new math question after submission
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred. Please try again.');
        }
    };

    // Generate the first math question on component mount
    React.useEffect(() => {
        generateMathQuestion();
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Address Cards and Service List */}
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                        <h2 className="text-2xl font-semibold mb-4">London Office</h2>
                        <p className="text-lg text-gray-700">
                            123 London Street, London, UK<br />
                            Phone: +44 20 7946 0958<br />
                            Email: london@khanwebservices.com
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                        <h2 className="text-2xl font-semibold mb-4">Bangladesh Office</h2>
                        <p className="text-lg text-gray-700">
                            Precadet School Market(1st Floor)<br />
                            Phone: 01776089944<br />
                            Email: arafatkhanju@gmail.com
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                        <ul className="list-disc list-inside text-lg text-gray-700">
                            {services.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                    <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="service" className="block text-lg font-medium text-gray-700">
                                Select Service
                            </label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            >
                                <option value="">Select a service</option>
                                <option value="Graphics Design">Graphics Design</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Website Design & Development">Website Design & Development</option>
                                <option value="Domain & Hosting">Domain & Hosting</option>
                                <option value="Software and Apps">Software and Apps</option>
                                <option value="Content Creation">Content Creation</option>
                                <option value="Video & Animation">Video & Animation</option>
                                <option value="Product Photography">Product Photography</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-medium text-gray-700">
                                Solve the Math Question: {mathQuestion.num1} {mathQuestion.operator} {mathQuestion.num2}
                            </label>
                            <input
                                type="number"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                            <button
                                type="button"
                                onClick={validateMathAnswer}
                                className="mt-2 w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
                            >
                                Validate Answer
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
                            disabled={!isMathValid}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
