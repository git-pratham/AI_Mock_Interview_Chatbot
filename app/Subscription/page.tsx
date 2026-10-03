"use client"

import React from 'react'
import { useState } from "react";


const Page = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="shadow-md rounded-lg w-full max-w-1/3">
                <h2 className="text-3xl font-semibold mb-6 text-center">Thank you🙏for your intrest</h2>
                <p className="mb-6 text-red-500 text-center leading-relaxed bg-blue-50 border border-blue-200 rounded px-4 py-3">
                    Unlock the full power of Prepmaster! Upgrade your account to get access to premium features, unlimited usage, and priority support.
                    Write to us for any subscription related queries.
                </p>
                {submitted ? (
                    <div className="text-center py-8">
                        <p className="text-green-600 text-lg font-semibold">Thank you for your query! We will get back to you soon.</p>
                    </div>
                ) : (
                    <form
                        action="https://formspree.io/f/xyzdyjrn"
                        method="POST"
                        className="flex flex-col gap-4"
                        // onSubmit={e => {
                        //     setSubmitted(true);
                        // }}
                    >
                        <label htmlFor="email" className="font-medium">
                            Your Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="you@example.com"
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <label htmlFor="message" className="font-medium">
                            Your Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Type your subscription query here..."
                            rows={4}
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />

                        <button
                            type="submit"
                            className="mt-4 bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
                        >
                            Send Query
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
    
}

export default Page
