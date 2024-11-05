# Memory Game

## Description
The Memory Game is a simple but engaging game where players test their memory by matching hidden cards on a 4x4 grid. The game is implemented using a grid of indexed values from 0 to 15, with players selecting cards and revealing their values to find matching pairs.

## Features
- 4x4 grid layout using normal playing cards
- 4 wrong chances
- Score based on corrected matches
- Cards have a boolean state called "hidden" (if hidden, the card value will be revealed)
- After clicking 2 cards, the game checks if they match
  - If they match, both cards are removed
  - If they don't match, the cards are hidden again
- Game loop continues until all cards are found
- Provides options to print the score, restart the game, and handle time limit exceeded scenarios

## Implementation Details
1. The game creates a 4x4 grid indexed from 0 to 15.
2. The game selects 8 cards and places them in random order (twice) to fill the grid.
3. Each card has a boolean "hidden" state, which determines whether the card value is revealed or hidden.
4. The game loop continues until all cards are found or the time limit is exceeded.
5. The game provides options to print the score, restart the game, and handle time limit exceeded scenarios.