import { useState, useEffect } from "react";

const CountdownTimer = () => {
    const eventDate = new Date(2025, 7, 15, 12, 0, 0);
    const [eventName, setEventName] = useState("");
    const [countdownStarted, setCountdownStarted] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = eventDate.getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
            remainingTime = 0;
            clearInterval(countdownInterval);
            alert("Countdown complete!");
        }

        setTimeRemaining(remainingTime);
        }, 1000);
    })

    return (
        <div className="countdown-timer-container">

        </div>
    );
};

export default CountdownTimer;