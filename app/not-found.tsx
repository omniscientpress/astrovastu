import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold text-accent-600">404</p>
      <h1 className="mt-2 text-3xl font-bold text-primary-900">Page not found</h1>
      <p className="mt-3 text-neutral-600">
        That page doesn&apos;t exist. Try the services hub or head home.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/" variant="primary">
          Home
        </Button>
        <Link href="/services/" className="text-sm font-semibold text-accent-700 underline-offset-4 hover:underline self-center">
          Services
        </Link>
      </div>
    </div>
  );
}
