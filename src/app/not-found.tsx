// app/not-found.tsx
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Link from "next/link";
import { Container } from "react-bootstrap";

export default function NotFound() {
  return (
    <>
      <Header />
      <Container className="my-4">
        <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
          <h1 className="fw-bold mb-4 fs-1">404 - Page Not Found</h1>
          <p className="mb-6 text-gray-600">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="text-blue-500 hover:underline"
            aria-label="home"
          >
            Go back to Home
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
}
