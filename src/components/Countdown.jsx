import { useState, useEffect } from 'react';
import { Flex, Heading, Center } from "@chakra-ui/react";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

const CountdownTimer = () => {
    dayjs.extend(relativeTime);
    const eventDate = dayjs('2025-07-15 12:00');
    const now = dayjs();
    const [currentDays, setCurrentDays] = useState(0);
    const [currentHours, setCurrentHours] = useState(0);
    const [currentMins, setCurrentMins] = useState(0);
    const [currentSeconds, setCurrentSeconds] = useState(0);


    useEffect(() => {
        if(eventDate) {
            const countdownInterval = setInterval(() => {
            const dayDiff = eventDate.diff(now, 'day')
            let hourDiff = eventDate.diff(now, 'hour')
            hourDiff = hourDiff % 24
            let minuteDiff = eventDate.diff(now, 'm')
            minuteDiff = minuteDiff % 60
            let secondDiff = eventDate.diff(now, 's')
            secondDiff = secondDiff % 60

            if (dayDiff <= 0) {
                clearInterval(countdownInterval);
                alert("Countdown complete!");
            }

                setCurrentDays(dayDiff);
                setCurrentHours(hourDiff);
                setCurrentMins(minuteDiff);
                setCurrentSeconds(secondDiff);
            }, 1000);

            return () => clearInterval(countdownInterval);
        }
    }, [eventDate]);

    return (
        <Flex marginTop="3rem" gap="4em">
            <Center display="flex" flexDirection="column">
                <Heading size="6xl">
                    { currentDays } 
                </Heading>
                <Heading marginTop="1rem">days</Heading>
            </Center>
            <Center display="flex" flexDirection="column">
                <Heading size="6xl">
                    { currentHours }
                </Heading>
                <Heading marginTop="1rem">hours</Heading>
            </Center>
            <Center display="flex" flexDirection="column">
                <Heading size="6xl">
                    { currentMins }
                </Heading>
                <Heading marginTop="1rem">minutes</Heading>
            </Center>
            <Center display="flex" flexDirection="column">
                <Heading size="6xl">
                    { currentSeconds } 
                </Heading>
                <Heading marginTop="1rem">seconds</Heading>
            </Center>
        </Flex>
    );
};

export default CountdownTimer;