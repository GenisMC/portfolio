import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa";
import { IconButton, useColorModeValue } from '@chakra-ui/react';
 
const BackButton = () => {
    const accentColor = useColorModeValue("#D40843", "#EA1552");
    let bgColor = useColorModeValue("#f2f2f2", "#232b3b");
    return (
                <Link href="/">
                <IconButton
                    icon={<FaArrowLeft />}
                    bg={bgColor}
                    size="lg"
                    aria-label="arrow-left"
                    variant="ghost"
                    color={accentColor}
                    position="fixed"
                    top={["90%", "5%"]}
                    left={["85%", "5%"]}
                    zIndex={1000}
                />
            </Link>
            );
}

export default BackButton;
