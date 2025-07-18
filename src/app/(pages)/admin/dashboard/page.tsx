import { PrismaClient } from "@prisma/client"
import Dashboard from "../../../../components/Dashboard"
export const dynamic = "force-dynamic"; 
const prisma = new PrismaClient()

export default async function DashboardPage() {
  const applyJobData = await prisma.applyJob.findMany()
  const contactUsData = await prisma.contactUs.findMany()
  const serviceFormData = await prisma.serviceForm.findMany()
  const chatBotData = await prisma.chatBot.findMany()
  const TeamExtensionCalculatorData = await prisma.teamExtensionStepper.findMany()
  const softwareDevelopmentCalculatorData = await prisma.softwareDevelopmentStepper.findMany()
  const MVPDevelopmentCalculatorData = await prisma.mvpDevelopmentStepper.findMany()
  const blogsData = await prisma.blog.findMany()

  return (
    <Dashboard
      applyJobData={applyJobData}
      contactUsData={contactUsData}
      serviceFormData={serviceFormData}
      chatBotData={chatBotData}
      TeamExtensionCalculatorData={TeamExtensionCalculatorData}
      softwareDevelopmentCalculatorData={softwareDevelopmentCalculatorData}
      MVPDevelopmentCalculatorData={MVPDevelopmentCalculatorData}
      blogsData={blogsData}
    />
  )
}
