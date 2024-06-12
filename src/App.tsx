import { useState } from "react";
import Question from "./components/Question";
import Answer from "./components/Answer";
import Score from "./components/Score";
import "./App.css";

const App: React.FC = () => {
  const questions = [
    {
      question: "What is the capital of Italy?",
      answers: ["Paris", "Rome", "London", "Berlin"],
      correct: "Rome",
    },
    {
      question: "What planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: "Mars",
    },
    {
      question: "Who painted the Mona Lisa?",
      answers: [
        "Vincent van Gogh",
        "Claude Monet",
        "Leonardo da Vinci",
        "Pablo Picasso",
      ],
      correct: "Leonardo da Vinci",
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      correct: "Pacific Ocean",
    },
    {
      question: 'Who wrote "Harry Potter"?',
      answers: [
        "J.R.R. Tolkien",
        "Stephen King",
        "George R.R. Martin",
        "J.K. Rowling",
      ],
      correct: "J.K. Rowling",
    },
    {
      question: "What is the chemical symbol for water?",
      answers: ["CO2", "H2O", "O2", "N2"],
      correct: "H2O",
    },
    {
      question: "In which country is the Great Pyramid of Giza located?",
      answers: ["Mexico", "China", "India", "Egypt"],
      correct: "Egypt",
    },
    {
      question: "How many continents are there?",
      answers: ["6", "5", "8", "7"],
      correct: "7",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      answers: ["Gold", "Iron", "Diamond", "Silver"],
      correct: "Diamond",
    },
    {
      question: 'Who is the author of "To Kill a Mockingbird"?',
      answers: [
        "Mark Twain",
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
        "Harper Lee",
      ],
      correct: "Harper Lee",
    },
    {
      question: "What is the largest mammal in the world?",
      answers: ["Elephant", "Giraffe", "Great White Shark", "Blue Whale"],
      correct: "Blue Whale",
    },
    {
      question: "What is the smallest planet in our solar system?",
      answers: ["Venus", "Mars", "Mercury", "Pluto"],
      correct: "Mercury",
    },
    {
      question: "Who was the first President of the United States?",
      answers: [
        "Thomas Jefferson",
        "George Washington",
        "Abraham Lincoln",
        "John Adams",
      ],
      correct: "George Washington",
    },
    {
      question: "What is the main ingredient in guacamole?",
      answers: ["Tomato", "Onion", "Garlic", "Avocado"],
      correct: "Avocado",
    },
    {
      question: "What is the capital of Japan?",
      answers: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      correct: "Tokyo",
    },
    {
      question: "How many legs does a spider have?",
      answers: ["6", "8", "10", "12"],
      correct: "8",
    },
    {
      question: "Who developed the theory of relativity?",
      answers: [
        "Isaac Newton",
        "Galileo Galilei",
        "Nikola Tesla",
        "Albert Einstein",
      ],
      correct: "Albert Einstein",
    },
    {
      question: "What is the tallest mountain in the world?",
      answers: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
      correct: "Mount Everest",
    },
    {
      question: "What is the primary language spoken in Brazil?",
      answers: ["Spanish", "English", "French", "Portuguese"],
      correct: "Portuguese",
    },
    {
      question: "What is the largest desert in the world?",
      answers: ["Arabian", "Gobi", "Kalahari", "Sahara"],
      correct: "Sahara",
    },
  ];






