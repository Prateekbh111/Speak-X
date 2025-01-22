import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const filterOptions = ["All", "MCQ", "ANAGRAM", "CONTENT_ONLY", "READ_ALONG"];

export default function FilterTabs({
  filterValue,
  setFilterValue,
}: {
  filterValue: string;
  setFilterValue: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {filterOptions.map((option) => (
        <motion.div
          key={option}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={filterValue === option ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterValue(option)}
            className="rounded-full"
          >
            {option}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
