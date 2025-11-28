import quotes from '../data/quotes.json';
import { useEffect, useState, useRef } from 'react';

export default function QuoteBox() {
    const [currentQuote, setCurrentQuote] = useState({ quote: '', author: '' });
    const [fade, setFade] = useState(true);

    // Keep a shuffled queue of indices
    const queueRef = useRef([]);

    // Shuffle function (Fisher-Yates)
    const shuffleArray = (array) => {
        const newArr = [...array];
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    };

    useEffect(() => {
        // Initialize queue
        queueRef.current = shuffleArray(quotes.map((_, i) => i));

        // Pick the first quote
        const nextIndex = queueRef.current.shift();
        setCurrentQuote(quotes[nextIndex]);

        const interval = setInterval(() => {
            setFade(false); // fade out

            setTimeout(() => {
                if (queueRef.current.length === 0) {
                    // Refill and reshuffle the queue when empty
                    queueRef.current = shuffleArray(quotes.map((_, i) => i));
                }

                const newIndex = queueRef.current.shift();
                setCurrentQuote(quotes[newIndex]);
                setFade(true); // fade in new quote
            }, 200); // match transition duration
        }, 60 * 1000); // change quote every 1 minute

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="quotebox">
            <div className="quotebox_container container">
                <div className={`box ${fade ? 'fade-in' : 'fade-out'}`}>
                    <blockquote className="heading3">{currentQuote.quote}</blockquote>
                    <p className="italic"> — {currentQuote.author} </p>
                </div>
            </div>
        </div>
    );
}