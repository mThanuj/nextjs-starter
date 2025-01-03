import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="text-muted-foreground container flex flex-col items-center justify-between gap-x-3 gap-y-1 text-center text-sm sm:flex-row">
        <p>Next Clerk &copy;{new Date().getFullYear()}. All rights reserved.</p>
        <p className="text-xs">
          Developed by{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent-foreground transition-colors"
            href="https://github.com/mThanuj"
          >
            mThanuj
          </Link>
        </p>
      </div>
    </footer>
  );
}
