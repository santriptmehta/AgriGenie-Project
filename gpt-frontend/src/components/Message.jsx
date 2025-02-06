import { motion } from "framer-motion";

export default function Message({ text, sender }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`p-3 rounded-lg max-w-lg ${
        sender === "user" ? "bg-blue-600 self-end" : "bg-gray-700 self-start"
      }`}
    >
      {text}
    </motion.div>
  );
}
