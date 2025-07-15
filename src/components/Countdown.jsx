import { useState, useEffect } from 'react';
import { Flex, Heading, Center, Spinner } from "@chakra-ui/react";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

const CountdownTimer = () => {
    dayjs.extend(relativeTime);
    const eventDate = dayjs('2025-07-22 12:00');
    const now = dayjs();
    const [currentDays, setCurrentDays] = useState(null);
    const [currentHours, setCurrentHours] = useState(null);
    const [currentMins, setCurrentMins] = useState(null);
    const [currentSeconds, setCurrentSeconds] = useState(null);


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

                setCurrentDays(dayDiff);
                setCurrentHours(hourDiff);
                setCurrentMins(minuteDiff);
                setCurrentSeconds(secondDiff);
            }, 1000);

            return () => clearInterval(countdownInterval);
        }
    }, [eventDate]);

    return (
        <Flex flexDirection="column" gap="2em" lg={{ flexDirection: "row", gap: '4rem' }} marginTop="3rem">
            <Center display="flex" flexDirection="column">
                <Heading size="5xl" lg={{ size: "6xl" }}>
                    { currentDays !== null ? currentDays : <Spinner /> } 
                </Heading>
                <Heading>days</Heading>
            </Center>
            <Center display="flex" flexDirection="column">
                <Heading size="5xl" lg={{ size: "6xl" }}>
                    { currentHours !== null ? currentHours : <Spinner /> }
                </Heading>
                <Heading>hours</Heading>
            </Center>
            <Center display="flex" flexDirection="column">
                <Heading size="5xl" lg={{ size: "6xl" }}>
                    { currentMins !== null ? currentMins : <Spinner /> }
                </Heading>
                <Heading>minutes</Heading>
            </Center>
            <Center display="flex" flexDirection="column">
                <Heading size="5xl" lg={{ size: "6xl" }}>
                    { currentSeconds !== null ? currentSeconds : <Spinner /> } 
                </Heading>
                <Heading>seconds</Heading>
            </Center>
        </Flex>
    );
};

export default CountdownTimer;