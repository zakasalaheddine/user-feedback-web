import { AccordionPanel } from '@chakra-ui/accordion'
import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'
import { Box } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import Image from 'next/image'
import React, { useState } from 'react'
import AddNewQuestionModal from './add-new-question-modal'

export default function StarsEditor() {
  const [questionTitle, setQuestionTitle] = useState('How was your visit ?')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  return (
    <AccordionPanel
      pb={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <QuestionTitle
        type="text"
        value={questionTitle}
        onChange={(e) => setQuestionTitle(e.target.value)}
      />
      <StarsContainer>
        <Image src="/images/star-empty.png" height={50} width={50} />
        <Image src="/images/star-empty.png" height={50} width={50} />
        <Image src="/images/star-empty.png" height={50} width={50} />
        <Image src="/images/star-empty.png" height={50} width={50} />
        <Image src="/images/star-empty.png" height={50} width={50} />
      </StarsContainer>

      <Button
        variant="primary"
        alignSelf="flex-end"
        ref={finalRef}
        onClick={onOpen}
      >
        Add New Question
      </Button>
      <AddNewQuestionModal
        initialRef={initialRef}
        finalRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      />
    </AccordionPanel>
  )
}

const QuestionTitle = styled(Input)`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  outline: none;
`

const StarsContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin: 20px auto 10px;
  background-color: #dfe6e9;
  padding: 10px 20px;
  border-radius: 20px;
`
