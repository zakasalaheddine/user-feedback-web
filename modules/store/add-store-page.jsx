import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import AddStoreSidebar from 'modules/layout/components/add-store-sidebar'
import DashboardLayout from 'modules/layout/dashboard-layout'
import { DashboardContainer } from 'modules/layout/styled-elements'

export default function AddStorePage() {
  return (
    <DashboardLayout pageTitle="Add new store" sidebar={<AddStoreSidebar />}>
      <DashboardContainer>
        <FormControl id="name" mb="4">
          <FormLabel>Store Name</FormLabel>
          <Input type="name" placeholder="my awesome cafe" />
        </FormControl>
        <FormControl id="address" mb="4">
          <FormLabel>Store Address</FormLabel>
          <Textarea rows="2" placeholder="my awesome cafe address" />
        </FormControl>
        <FormControl id="phone" mb="4">
          <FormLabel>Store Phone</FormLabel>
          <Input type="tel" placeholder="+1234567890" />
        </FormControl>
        <FormControl id="logo" mb="4">
          <FormLabel>Store Logo</FormLabel>
          <Input type="file" />
        </FormControl>

        <Button variant="primary" width="full">Create My Store</Button>
      </DashboardContainer>
    </DashboardLayout>
  )
}
