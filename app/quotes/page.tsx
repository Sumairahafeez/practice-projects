'use client';
import { useState } from "react";
export default function QuoteGenerator() {
    const [quote, setQuote] = useState("");
    const [loading, setLoading] = useState(false);
    const generateQuote = () => {
        const quotes = [
            "The only limit to our realization of tomorrow is our doubts of today.",
            "The future belongs to those who believe in the beauty of their dreams.",
            "Do not wait to strike till the iron is hot, but make it hot by striking.",
            "Success usually comes to those who are too busy to be looking for it.",
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
    }
    const [randomQuote, setRandomQuote] = useState("Click the button to generate a quote!");
    const handleGenerateQuote = () => {
        // generateQuote();
        // setRandomQuote(quote);
        setLoading(true);
        fetchQuote();
    }
    async function fetchQuote() {
        const response = await fetch("https://api.quotable.io/random");
        if(!response.ok) {
            throw new Error("Failed to fetch quote");
        }
        const data = await response.json();
        setQuote(data.content);
        setRandomQuote(data.content);
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20">
            <h1 className="text-2xl font-bold mb-4">Random Quote</h1>
            <p className="text-lg italic">{randomQuote}</p>
            <button onClick={handleGenerateQuote} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Generate New Quote  
            </button>
            {loading && <p className="mt-2 text-gray-500">Loading...</p>}
        </div>
    );
}
