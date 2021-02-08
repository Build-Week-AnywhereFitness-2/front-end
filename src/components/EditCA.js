import React from 'react'

import {
    Input,
    Flex,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button,
    Box
} from "@chakra-ui/react"


function EditCA(props) {
    return (
        <AccordionItem>
            <AccordionButton>
                <Input flex="1" textAlign="left" placeholder={`${props.data.name}`} >

                </Input>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} bgColor="gainsboro">
                <Flex flexDirection="row" wrap justifyContent="space-around">
                </Flex>
                <Flex justifyContent="space-evenly" >
                    <Input size="md" placeholder={`Location:${props.data.location}  `}></Input>
                    <Input size="md" placeholder={`Cancelled:${props.data.cancelled === 0 ? "No" : "Yes"}  `}></Input>
                    <Input size="md" placeholder={`Duration Hour:${props.data.duration_hour}  `}></Input>
                    <Input size="md" placeholder={`Intensity Level:${props.data.intensity_level} `}></Input>
                    <Input  size="md" placeholder={`Attendees:${props.data.attendees_amt}  `}></Input>
                    <Input size="md" placeholder={`Maximum Size:${props.data.max_class_size}  `}></Input>
                </Flex>
            </AccordionPanel>
        </AccordionItem>
    )
}

export default EditCA
