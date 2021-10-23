import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/modal'
import { Select } from '@chakra-ui/select'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addNewQuestion } from '../editorSlice'

export default function AddNewQuestionModal({
  initialRef,
  finalRef,
  isOpen,
  onClose
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()
  const dispatch = useDispatch()
  const handleAddNewQuestion = (data) => {
    dispatch(addNewQuestion(data))
    reset()
    onClose()
  }
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new question</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Question title</FormLabel>
            <Input
              isInvalid={errors.title}
              ref={initialRef}
              placeholder="Question Title"
              {...register('question', { required: true })}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Question Type</FormLabel>
            <Select {...register('type', { required: true, value: 'emojis' })}>
              <option value="stars">Stars</option>
              <option value="emojis">Emojis</option>
              <option value="multi-text">
                Multiple Choices Text (Single Choice)
              </option>
              <option value="multi-image">
                Multiple Choices Images (Single Choice)
              </option>
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            variant="primary"
            mr={3}
            onClick={handleSubmit(handleAddNewQuestion)}
          >
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
