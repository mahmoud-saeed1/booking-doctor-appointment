import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface EmptyStateProps {
  message: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  path?: string;
  useLinks?: boolean;
  href?: string;
}

/*~~~~~~~~$ EmptyState Component $~~~~~~~~*/
const EmptyState: React.FC<EmptyStateProps> = ({
  message,
  buttonLabel,
  onButtonClick,
  path = "/",
  useLinks = false,
  href = "#",
}) => {
  return (
    <motion.div
      className="empty-state flex flex-col items-center justify-center space-y-6 text-center py-16 px-4 bg-white rounded-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Creative Illustration */}
      <motion.div
        className="illustration mb-4"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "backOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-20 w-20 text-primary"
        >
          <path
            fillRule="evenodd"
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm.75 7.75a.75.75 0 10-1.5 0v3.5a.75.75 0 001.5 0v-3.5zm-.75 7.25a.75.75 0 110-1.5h.007a.75.75 0 010 1.5H12z"
            clipRule="evenodd"
          />
        </svg>
      </motion.div>

      {/* Message */}
      <p className="text-xl font-semibold text-gray-700">{message}</p>

      {/* Optional Button */}
      {onButtonClick ? (
        <Button
          onClick={onButtonClick}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold tracking-wider hover:bg-blue-700 transition-all ease-in-out duration-300 shadow-md"
        >
          {buttonLabel}
        </Button>
      ) : useLinks ? (
        <a
          href={href}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold tracking-wider hover:bg-blue-700 transition-all ease-in-out duration-300 shadow-md"
        >
          {buttonLabel}
        </a>
      ) : (
        <Link
          href={path}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold tracking-wider hover:bg-blue-700 transition-all ease-in-out duration-300 shadow-md"
        >
          {buttonLabel}
        </Link>
      )}
    </motion.div>
  );
};

export default EmptyState;
