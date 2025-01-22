"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchQuestionsRequest } from "../grpc/a_pb";
import { useEffect, useState } from "react";
import { QuestionServiceClient } from "../grpc/AServiceClientPb";
import Question from "@/components/Question";
import type { QuestionType } from "@/lib/types";
import { Loader2, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FilterTabs from "@/components/FilterTabs";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const rowsPerPage = 10;
  const [questionQuery, setQuestionQuery] = useState<string>("");
  const [questions, setQuestions] = useState<QuestionType[] | null>(null);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<string>("All");

  useEffect(() => {
    handleSearch();
  }, [startIndex, filterValue]);

  function handleSearch() {
    if (questionQuery === "") return;
    setIsFetching(true);
    const client = new QuestionServiceClient("http://localhost:8080");
    const req = new SearchQuestionsRequest();
    req.setTitle(questionQuery);
    req.setLimit(rowsPerPage);
    req.setSkip(startIndex);
    req.setType(filterValue);

    client.searchQuestionsByTitle(req, {}, (err, res) => {
      if (res == null) return;
      console.log(res.toObject());
      setQuestions(res.toObject()!.questionsList as unknown as QuestionType[]);
      setIsFetching(false);
    });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuestionQuery(e.target.value);
  }

  return (
    <div className="min-h-screen w-full p-4 md:p-10 bg-gradient-to-br from-background to-secondary/20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-7xl font-bold text-primary drop-shadow-lg font-sans tracking-tighter">
            Speak<span className="text-secondary text-orange-500">X</span>
          </h1>
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex w-full max-w-md items-center space-x-2"
          >
            <Input
              type="text"
              placeholder="Search questions..."
              value={questionQuery}
              onChange={handleInputChange}
              className="rounded-full bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary"
            />
            <Button
              type="submit"
              onClick={handleSearch}
              className="rounded-full"
              variant="default"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </motion.div>

          <AnimatePresence>
            {((questions && questions.length !== 0) ||
              questionQuery !== "") && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <FilterTabs
                  filterValue={filterValue}
                  setFilterValue={setFilterValue}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {isFetching ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex space-x-2 items-center"
            >
              <p className="font-semibold text-2xl">Loading</p>
              <Loader2 className="animate-spin" />
            </motion.div>
          ) : (
            <Question
              questions={questions}
              startIndex={startIndex}
              filterValue={filterValue}
              setFilterValue={setFilterValue}
            />
          )}

          {!questions && !isFetching && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-8 text-xl text-center text-muted-foreground max-w-2xl"
            >
              Search for a question to get started
            </motion.p>
          )}

          {questions && questions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center space-x-4 mt-8"
            >
              <Button
                variant="outline"
                onClick={() => {
                  setStartIndex(Math.max(0, startIndex - rowsPerPage));
                }}
                disabled={startIndex === 0}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setStartIndex(startIndex + rowsPerPage);
                }}
              >
                Next
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
