import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  blocks: [
    {
      text: String,
      showInOption: Boolean,
      isAnswer: Boolean,
    },
  ],
  options: [
    {
      text: String,
      isCorrectAnswer: Boolean,
    },
  ],
  solution: String,
  anagramType: String,
  siblingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
});

export const Question = mongoose.model("Question", questionSchema);

// {
//     "_id": {
//       "$oid": "6654d0bc8571bf23e1bef300"
//     },
//     "type": "ANAGRAM",
//     "anagramType": "SENTENCE",
//     "blocks": [
//       {
//         "text": "I started learning",
//         "showInOption": true,
//         "isAnswer": true
//       },
//       {
//         "text": "to play the guitar",
//         "showInOption": true,
//         "isAnswer": true
//       },
//       {
//         "text": "because",
//         "showInOption": true,
//         "isAnswer": true
//       },
//       {
//         "text": "I dream of forming a band",
//         "showInOption": true,
//         "isAnswer": true
//       },
//       {
//         "text": "and playing",
//         "showInOption": true,
//         "isAnswer": true
//       },
//       {
//         "text": "in concerts.",
//         "showInOption": true,
//         "isAnswer": true
//       }
//     ],
//     "siblingId": {
//       "$oid": "6654bf1de7b8dd361ba05bf3"
//     },
//     "solution": "I started learning to play the guitar because I dream of forming a band and playing in concerts.",
//     "title": "Rearrange the words to form a sentence"
//   },
//   {
//     "_id": {
//       "$oid": "6655b1c5d3d666003d3b1d83"
//     },
//     "type": "MCQ",
//     "options": [
//       {
//         "text": "under",
//         "isCorrectAnswer": true
//       },
//       {
//         "text": "below",
//         "isCorrectAnswer": false
//       },
//       {
//         "text": "above",
//         "isCorrectAnswer": false
//       },
//       {
//         "text": "over",
//         "isCorrectAnswer": false
//       }
//     ],
//     "siblingId": {
//       "$oid": "66554e47c59979a52d16b1e9"
//     },
//     "title": "In my previous job, I often had to complete tasks ______ tight deadlines."
//   },
//   {
//     "_id": {
//       "$oid": "6655681ac59979a52d1756d4"
//     },
//     "type": "READ_ALONG",
//     "siblingId": {
//       "$oid": "66556815ac3f6205c943a36d"
//     },
//     "title": "In my previous role, I honed an adeptness at navigating through the intricacies of complex legal documents, effortlessly pinpointing pivotal issues and strategizing potential legal solutions."
//   },
//   {
//     "_id": {
//       "$oid": "66041de011b1ef9f2e24fd45"
//     },
//     "type": "CONTENT_ONLY",
//     "siblingId": {
//       "$oid": "66041de011b1ef9f2e24fd43"
//     },
//     "title": "Have you noticed how unpredictable the weather has been lately?"
//   },
