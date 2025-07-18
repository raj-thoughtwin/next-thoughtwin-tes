-- CreateEnum
CREATE TYPE "Service" AS ENUM ('CRM', 'WEB', 'ERP', 'IOT', 'UI_UX', 'MOBILE_APPS', 'PRODUCTS', 'OTHERS');

-- CreateTable
CREATE TABLE "ContactUs" (
    "id" SERIAL NOT NULL,
    "interested" TEXT[],
    "budget" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "fileUrl" TEXT,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactUs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "serviceForm" (
    "id" SERIAL NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT,
    "phone_number" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "serviceForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplyJob" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "currentLocation" TEXT NOT NULL,
    "relevantExperience" TEXT NOT NULL,
    "keySkills" TEXT NOT NULL,
    "noticePeriod" TEXT NOT NULL,
    "reasonForJobChange" TEXT,
    "resume" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApplyJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SoftwareDevelopmentStepper" (
    "id" SERIAL NOT NULL,
    "whatToDo" TEXT NOT NULL,
    "alreadyHave" TEXT NOT NULL,
    "platformType" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "industryDesc" TEXT,
    "solutionTypes" TEXT[],
    "solutionTypesDesc" TEXT,
    "projectDelivery" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "terms" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SoftwareDevelopmentStepper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'admin',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamExtensionStepper" (
    "id" SERIAL NOT NULL,
    "step1Technology" JSONB NOT NULL,
    "step2Specialist" JSONB NOT NULL,
    "step2SpecialistDesc" TEXT,
    "needExtension" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "terms" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TeamExtensionStepper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MvpDevelopmentStepper" (
    "id" SERIAL NOT NULL,
    "industry" TEXT NOT NULL,
    "industryDesc" TEXT,
    "businessGoal" TEXT NOT NULL,
    "releaseProjectDate" TEXT NOT NULL,
    "platformType" TEXT NOT NULL,
    "screenSize" TEXT NOT NULL,
    "customDesign" TEXT NOT NULL,
    "cloudPlateform" TEXT NOT NULL,
    "appFeature" TEXT[],
    "appFeatureDesc" TEXT,
    "additionalInfo" TEXT NOT NULL,
    "projectDelivery" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "term" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MvpDevelopmentStepper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Email" (
    "id" SERIAL NOT NULL,
    "formType" TEXT NOT NULL,
    "emails" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatBot" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatBot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "term" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "isManual" BOOLEAN NOT NULL DEFAULT false,
    "isApprove" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "introduction" TEXT,
    "technologyJustification" TEXT,
    "thoughtwinApproach" TEXT,
    "featureHighlights" JSONB,
    "caseStudy" TEXT,
    "faq" JSONB,
    "estimatedReadingTime" INTEGER,
    "imageName" TEXT,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_slug_key" ON "Blog"("slug");

-- CreateIndex
CREATE INDEX "Blog_isApprove_prefix_term_make_isManual_idx" ON "Blog"("isApprove", "prefix", "term", "make", "isManual");
