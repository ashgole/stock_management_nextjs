// components/ContactUs.js
import React from 'react';

const ContactUs = ({ onSubmit }) => {


    return (
        <div className="max-w-md mx-auto p-4 border rounded shadow">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <form  >
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                        Name
                    </label>
                    <input
                        value={'ashish gole'}
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        value={'ashishgole@gmail.com'}
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        value={'Our project is a comprehensive inventory management application designed to streamline product tracking, sales, and overall inventory control. It aims to simplify the process for businesses of all sizes, enabling them to manage their products efficiently and effectively.'}
                        name="message"
                        id="message"
                        required
                        rows="4"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
