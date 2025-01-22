"use client";

import type { QuestionType } from "@/lib/types";
import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Question({
  questions,
  startIndex,
  filterValue,
  setFilterValue,
}: {
  questions: Array<QuestionType> | null;
  startIndex: number;
  filterValue: string;
  setFilterValue: (value: string) => void;
}): React.JSX.Element {
  const filteredQuestions = questions?.filter(
    (question) => question.type === filterValue || filterValue === "All",
  );

  return (
    <div className="space-y-6 w-full max-w-3xl">
      {filteredQuestions?.length === 0 && (
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-2xl font-semibold">No Questions Found</h1>
          <Button onClick={() => setFilterValue("All")}>
            Show All Questions
          </Button>
        </div>
      )}
      {filteredQuestions?.map(
        (question, index) =>
          (question.type === filterValue || filterValue === "All") && (
            <QuestionCard
              key={index}
              question={question}
              index={startIndex + index}
            />
          ),
      )}
    </div>
  );
}

function QuestionCard({
  question,
  index,
}: {
  question: QuestionType;
  index: number;
}) {
  return (
    <div>
      <Card className="relative p-2 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg">
        <Badge className="absolute top-2 right-2" variant="secondary">
          {question.type}
        </Badge>
        <CardHeader>
          <CardTitle className="pr-16">
            {index + 1}. {question.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {question.type === "ANAGRAM" && (
              <AnagramContent question={question} />
            )}
            {question.type === "MCQ" && <MCQContent question={question} />}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function AnagramContent({ question }: { question: QuestionType }) {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {question.blocksList
          ?.sort(() => Math.random() - 0.5)
          .map((block, idx) => (
            <Badge key={idx} variant="outline" className="text-sm p-2">
              {block.text}
            </Badge>
          ))}
      </div>
      {question.solution && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Solution:</h3>
          <p>{question.solution}</p>
        </div>
      )}
    </div>
  );
}

function MCQContent({ question }: { question: QuestionType }) {
  return (
    <RadioGroup>
      {question.optionsList?.map((option, idx) => (
        <div key={idx} className="flex items-center space-x-2 mb-2">
          <RadioGroupItem value={option.text} id={`option-${idx}`} />
          <Label
            htmlFor={`option-${idx}`}
            className={option.iscorrectanswer ? "font-bold" : ""}
          >
            {option.text}
            {option.iscorrectanswer && (
              <Badge variant="default" className="ml-2">
                <Check className="h-3 w-3 mr-1 mt-1" /> Correct Answer
              </Badge>
            )}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
