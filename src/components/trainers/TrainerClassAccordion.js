import React from 'react'

import {
    Box,
    Flex,
    Center,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button
  } from "@chakra-ui/react"

function TrainerClassAccordionItem(props) {
    return (
        <AccordionItem>
            <AccordionButton>
                <Box flex="1" textAlign="left">
                    <strong>{props.data.class_name}</strong>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} bgColor="gainsboro">
                <Flex flexDirection="row" wrap justifyContent="space-around">
                <Box width="120px">Name: <strong>{props.data.class_name}</strong></Box>
                    <Box width="120px">Location: <strong>{props.data.location}</strong></Box>
                    <Box width="120px">Cancelled: <strong>{props.data.cancelled === 0 ? "No" : "Yes"}</strong></Box>
                    <Box width="120px">Duration Hour: <strong>{props.data.duration_hour}</strong></Box>
                    <Box width="120px">Intensity Level: <strong>{props.data.intensity_level}</strong></Box>
                    <Box width="120px">Registered Attendees: <strong>{props.data.attendees_amt}</strong></Box>
                    <Box width="120px">Maximum Size: <strong>{props.data.max_class_size}</strong></Box>
                </Flex>
                {props.onEdit &&
                    <Center>
                        <Button>Edit</Button>
                    </Center>
                }
            </AccordionPanel>
        </AccordionItem>
    )
}

export default TrainerClassAccordionItem
