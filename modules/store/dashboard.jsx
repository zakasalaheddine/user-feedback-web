import Sidebar from 'modules/layout/components/sidebar'
import DashboardLayout from 'modules/layout/dashboard-layout'

export default function StoreDashboard() {
  return (
    <DashboardLayout pageTitle="Dashboard" sidebar={<Sidebar />}>
      Test
    </DashboardLayout>
  )
}
