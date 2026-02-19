# Simpme Secure Exam Portal

## Requirements Recap:

- Each student has a name.
- Each student has a private score (not accessible directly).

## Methods:

- submitAnswer(points) to add points to the score.
- getScore() to retrieve the current score.
- The score must NOT be accessible from outside (no direct property access).
- Each student has an independent score.
- There must be a global variable examTitle.
  Use block scope meaningfully somewhere (e.g., inside an if or loop).
- Demonstrate that the global variable can be accessed but cannot be overwritten
