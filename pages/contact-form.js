import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: '',
    });
    const [mathQuestion, setMathQuestion] = useState({});
    const [userAnswer, setUserAnswer] = useState('');
    const [isMathValid, setIsMathValid] = useState(false);

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

    // Handle form submission
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

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Generate the first math question on component mount
    React.useEffect(() => {
        generateMathQuestion();
    }, []);

    return (
        <div>
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
                        rows="4"
                        required
                    ></textarea>
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
    );
}
