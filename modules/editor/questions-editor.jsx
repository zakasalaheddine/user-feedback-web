import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel
} from '@chakra-ui/accordion'
import { Button } from '@chakra-ui/button'
import { Box, Text } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import Sidebar from 'modules/layout/components/sidebar'
import DashboardLayout from 'modules/layout/dashboard-layout'
import { useSelector } from 'react-redux'
import EmojisEditor from './components/emoji-editor'
import StarsEditor from './components/stars-editor'

export default function QuestionEditor() {
  const { questions } = useSelector((state) => state.editor)
  console.log(questions)
  return (
    <DashboardLayout pageTitle="Questions Editor" sidebar={<Sidebar />}>
      <EditorContainer>
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Rate Your Visit
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <EmojisEditor />
          </AccordionItem>
        </Accordion>
      </EditorContainer>
    </DashboardLayout>
  )
}

const EditorContainer = styled(Box)`
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 7px 14px 0 rgb(59 65 94 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%);
`
