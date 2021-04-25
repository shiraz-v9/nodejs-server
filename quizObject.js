const obj = [
  {
    quizName: "Quiz 1 (level 1)",

    question: [
      {
        question: "What does HTML stand for?",
        option: [
          { answer: "Hyper Text Machine Language", isCorrect: false },
          { answer: "Home Tool Markup Language", isCorrect: false },
          { answer: "Hyper Text Markup Language", isCorrect: true },
          { answer: "Hyper Translator Machine Language", isCorrect: false },
        ],
      },
      {
        question: "How many tags are in a regular element?",
        option: [
          { answer: "1", isCorrect: false },
          { answer: "2", isCorrect: true },
          { answer: "3", isCorrect: false },
          { answer: "none", isCorrect: false },
        ],
      },
      {
        question: "what is the difference in an opening tag and a closing tag?",
        option: [
          { answer: "Closing tag has a / in front", isCorrect: true },
          { answer: "There is no difference ", isCorrect: false },
          { answer: "Opening tag has a / in front ", isCorrect: false },
          { answer: "Both tags have / in front", isCorrect: false },
        ],
      },
      {
        question: "< body > Is this an opening tag or a closing tag?",
        option: [
          { answer: "both", isCorrect: false },
          { answer: "self closing", isCorrect: false },
          { answer: "closing", isCorrect: false },
          { answer: "Opening", isCorrect: true },
        ],
      },
      {
        question: "Explain the < br  / > tag",
        option: [
          { answer: "it's deprecated", isCorrect: false },
          { answer: "bold text", isCorrect: false },
          {
            answer: "not in use anymore replace with /n newline",
            isCorrect: false,
          },
          {
            answer: "it's called break tag and it will give you a new line",
            isCorrect: true,
          },
        ],
      },
    ],
  },

  {
    quizName: "Quiz 2 (level 2)",

    question: [
      {
        question: "How is document type initialized in HTML5.?",
        option: [
          { answer: "</DOCTYPE>", isCorrect: false },
          { answer: "</DOCTYPE HTML>", isCorrect: false },
          { answer: "<!DOCTYPE HTML>", isCorrect: true },
          { answer: "</DOCTYPE html>", isCorrect: false },
        ],
      },
      {
        question:
          "Which of the following HTML Elements is used for making any text bold ?",
        option: [
          { answer: "<p>", isCorrect: false },
          { answer: "<b>", isCorrect: true },
          { answer: "<strong>", isCorrect: false },
          { answer: "<a>", isCorrect: false },
        ],
      },
      {
        question: "what is the difference in an opening tag and a closing tag?",
        option: [
          { answer: "Closing tag has a / in front", isCorrect: true },
          { answer: "There is no difference ", isCorrect: false },
          { answer: "Opening tag has a / in front ", isCorrect: false },
          { answer: "Both tags have / in front", isCorrect: false },
        ],
      },
      {
        question:
          "Which of the following HTML element is used for creating an unordered list?",
        option: [
          { answer: "<ui>", isCorrect: false },
          { answer: "<i>", isCorrect: false },
          { answer: "<em>", isCorrect: false },
          { answer: "<ul>", isCorrect: true },
        ],
      },
      {
        question:
          "Which of the following attributes is used to add link to any element?",
        option: [
          { answer: "src", isCorrect: false },
          { answer: "link", isCorrect: false },
          {
            answer: "ref",
            isCorrect: false,
          },
          {
            answer: "href",
            isCorrect: true,
          },
        ],
      },
    ],
  },
  {
  quizName: "Quiz 3 (level 3)",

  question: [
    {
      question: "Who is making the Web standards?",
      option: [
        { answer: "Google", isCorrect: false },
        { answer: "Mozilla", isCorrect: false },
        { answer: "The World Wide Web Consortium", isCorrect: true },
        { answer: "W3 Schools", isCorrect: false },
      ],
    },
    {
      question: "Choose the correct HTML element for the largest heading:",
      option: [
        { answer: "<h6>", isCorrect: false },
        { answer: "<strong>", isCorrect: false },
        { answer: "<heading>", isCorrect: false },
        { answer: "<h1>", isCorrect: true },
      ],
    },
    {
      question: "What is the correct HTML for adding a background color?",
      option: [
        {
          answer: "<body style='background-color:yellow;'>",
          isCorrect: true,
        },
        { answer: "<background>yellow</background>", isCorrect: false },
        { answer: "<body bg='yellow'>", isCorrect: false },
        { answer: "setColor:yellow", isCorrect: false },
      ],
    },
    {
      question: "Choose the correct HTML element to define emphasized text",
      option: [
        { answer: "<ui>", isCorrect: false },
        { answer: "<i>", isCorrect: false },
        { answer: "<italic>", isCorrect: false },
        { answer: "<em>", isCorrect: true },
      ],
    },
    {
      question: "Which of these elements are all <table> elements?",
      option: [
        { answer: "<thead><body><tr>", isCorrect: false },
        { answer: "<table><tr><tt>", isCorrect: false },
        {
          answer: "<table><head><tfoot>",
          isCorrect: false,
        },
        {
          answer: "<table><tr><td>",
          isCorrect: true,
        },
      ],
    },
  ],
},
{
  quizName: "Quiz 4 (level 4)",

  question: [
    {
      question: "How can you make a numbered list?",
      option: [
        { answer: "<ul>", isCorrect: false },
        { answer: "<ol>", isCorrect: true },
        { answer: "<dl>", isCorrect: false },
        { answer: "<list>", isCorrect: false },
      ],
    },
    {
      question: "Choose the correct HTML element for the largest heading:",
      option: [
        { answer: "<h1>", isCorrect: true },
        { answer: "<h6>", isCorrect: false },
        { answer: "<strong>", isCorrect: false },
        { answer: "<heading>", isCorrect: false },
      ],
    },
    {
      question: "How can you make a bulleted list?",
      option: [
        {
          answer: "<ul>",
          isCorrect: true,
        },
        { answer: "<dl>", isCorrect: false },
        { answer: "<ol>", isCorrect: false },
        { answer: "<list>", isCorrect: false },
      ],
    },
    {
      question: "What is the correct HTML for making a checkbox?",
      option: [
        { answer: "<check>", isCorrect: false },
        { answer: "<checkbox>", isCorrect: false },
        { answer: "<input type='check'>", isCorrect: false },
        { answer: "<input type='checkbox'>", isCorrect: true },
      ],
    },
    {
      question: "What is the correct HTML for making a text input field?",
      option: [
        { answer: "<input type='textfield'>", isCorrect: false },
        { answer: "<textfield>", isCorrect: false },
        {
          answer: "<textinput type='text'>",
          isCorrect: false,
        },
        {
          answer: "<input type='text'>",
          isCorrect: true,
        },
      ],
    },
  ],
},
{
  quizName: "Quiz 5 (level 5)",

  question: [
    {
      question: "What is the correct HTML for making a drop-down list?",
      option: [
        { answer: "<select>", isCorrect: true },
        { answer: "<input type='list'>", isCorrect: false },
        { answer: "<input type='dropdown'>", isCorrect: false },
        { answer: "<list>", isCorrect: false },
      ],
    },
    {
      question: "What is the correct HTML for making a text area?",
      option: [
        { answer: "<input type='textarea'>", isCorrect: false },
        { answer: "<input type='textbox'>", isCorrect: false },
        { answer: "<textarea>", isCorrect: true },
        { answer: "<heading>", isCorrect: false },
      ],
    },
    {
      question:
        "An <iframe> is used to display a web page within a web page.",
      option: [
        {
          answer: "true",
          isCorrect: true,
        },
        { answer: "false", isCorrect: false },
        { answer: "No such thing", isCorrect: false },
        { answer: "it is not supported anymore", isCorrect: false },
      ],
    },
    {
      question: "HTML comments start with <!-- and end with -->",
      option: [
        { answer: "replaced with <comment>", isCorrect: false },
        { answer: "no such thing", isCorrect: false },
        { answer: "false", isCorrect: false },
        { answer: "true", isCorrect: true },
      ],
    },
    {
      question:
        "Which HTML element is used to specify a footer for a document or section?",
      option: [
        { answer: "<div>", isCorrect: false },
        { answer: "<bottom>", isCorrect: false },
        {
          answer: "<section>",
          isCorrect: false,
        },
        {
          answer: "<footer>",
          isCorrect: true,
        },
      ],
    },
  ],
},
];

module.exports = obj;
