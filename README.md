# 🧩 MathWizz

**MathWizz** is a basic arithmetic quiz game designed to test your mental math skills. The game presents you with random arithmetic expressions that you need to solve within a time limit. Sharpen your math abilities while having fun!

![Arithmetic Game](arithmetic-game-screenshot.png)

## 🧮 Game Description

In **MathWizz**, a random arithmetic expression is generated using two random operands and one of four arithmetic operators (+, -, *, /). Your challenge is to input the correct result of the expression within a certain time limit, which starts counting down from 30 seconds. The game provides instant feedback on your answers and keeps track of your score and tries.

## 🎮 How to Play

1. Start the game by clicking the "Start Game" button.
2. A random arithmetic expression will be displayed.
3. Input the correct result of the expression within the time limit.
4. If correct, your score increases by 2, and a new expression is generated.
5. If incorrect, the number of tries decreases by 1.
6. The game ends when you input 3 incorrect results or the time runs out.
7. Your score, remaining tries, and high score are displayed.

## ⏱️ Time Challenge

Arithmetic Game tests your mental math skills under time pressure. Can you solve the expressions before the clock runs out?

## 🚀 Try the Game

You can try **MathWizz** JS Version by visiting: [https://mathwizz.netlify.app/](https://mathwizz.netlify.app/)

## ⭐ Features

- Random arithmetic expressions to challenge your math skills.
- The time limit to keeping the game fast-paced and exciting.
- Instant feedback on correct and incorrect answers.
- Score tracking and high score display.
- Tries tracking to make the game challenging.

## ⚛️ Technologies Used

- **React**: The main library used for building the user interface and managing the game state.
- **Netlify**: The platform used for deploying and hosting the game.

## 🌟 Credits

**Arithmetic Game** was created by Highbeek. I hope you enjoy testing your math abilities with our game!

## 📝 Feedback and Contributions

We welcome feedback and suggestions to improve the game. If you'd like to contribute to the project, feel free to create an issue or submit a pull request. Have fun playing!

**Note:** This game is meant for entertainment and educational purposes. It is not affiliated with any official math education programs.


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
