✨ Hackathon 6 - Build your own Codewars kata

# 📜 Mysterious Cipher

## 📖 Story

In the depths of a mysterious forest, you have uncovered an ancient tablet, it's contents obscured by a cryptic ciper. Legends spoke of a hidden code that held the key to unlocking secrets untold.

As a brave adventurer, it falls to you to decipher this cryptic tablet and reveal the message hidden upon it. To aid you in your quest, you decide to write a function called 'decodeCipher' that will decrypt the message using the provided cipher key.

Additional guidance: This function must possess the magic of case-insensitivity, deciphering both uppercase and lowercase glyphs. Fear not the numbers or punctuation, for they remain unchanged in the unveiled message.

Examples of expected output:

- decodeCipher('pwvvc rclvm!', key) should return 'hello world!'
- decodeCipher('jGnW dBnWbNdAdSw', key) should return 'cAsE iNsEnSiTiVe'
- decodeCipher('123', key) should return '123' as numbers are not encrypted by this cipher
- decodeCipher('?!', key) should return '?!' as punctuation is not encrypted by this cipher

The key will be provided for you in a variable called 'key'. You can use 'key' to access the cipher.

Good luck, brave adventurer! Venture forth and unlock the secrets of the ancient tablet!

## 💭 Reflections

What went well:

- Getting to 300 honour on Codewars
- Thorough brainstorming and planning
- Talking through our projects together as a group for ideas and support
- Hitting MVP targets and being able to work on stretch goals
- Open and honest communication within the team, everyone was lovely!

Where I could improve:

- Don't panic when something isn't working as expected, take a break and try again or ask my team to look with me
- Take more breaks, it's harder to enforce when working alone
- Increase the complexity of the initial kata

## 📝 Plan

🏁 Setup:

1. Use Disney Ideation to brainstorm some kata ideas
2. Decide on a kata to create that fits in the hackathon time constraints
3. Break this idea down into an MVP and add suitable stretch goals

🛠️ MVP:

1. Define a cipher text variable and create a key
2. Create a function skeleton in 'main.js' file
3. Write a plan for the code in comments within the skeleton function
4. Write tests based on these comments first
5. Go back and implement code to pass these tests- starting in the simplest form and making changes accordingly
6. Check that tests are working correctly with the solution to the kata
7. Remove solution code once tests are working
8. Push working tests with skeleton function

🚀 Stretch Goals:

1. Handle different cases
2. Publish to Codewars
3. Make harder versions of the kata to publish so that it addresses different skillsets
4. Translate it into languages other than JavaScript

### Desicions table testing

| Test Case | Cipher Text        | Expected Outcome   |
| --------- | ------------------ | ------------------ |
| 1         | "pwvvc"            | "hello"            |
| 2         | "pwvvc rclvm!"     | "hello world!"     |
| 3         | "?!"               | "?!"               |
| 4         | "123"              | "123"              |
| 5         | "jGnW dBnWbNdAdSw" | "cAsE iNsEnSiTiVe" |

### 🧠 Brainstorming

🏰 Disney Ideation:

🌟 The Dreamer

- A cryptographic challenge with cyphers
- Pixel art generator that can be scaled to different kyu
- Noughts and crosses game, Connect Four, chess or Go
- Puzzle solving like escape rooms and puzzle games
- Ensure kata is fun and engaging

🤔 The Realist

- Cryptographic challenges may need to be simplified within time constraint
- Pixel art may be difficult for some people to visualise
- Games with complicated rules would also take up a lot of planning time (e.g. escape rooms, chess etc)
- Keep in mind the time constraint and how complex the challenge is

🕵️‍♂️ The Critic

- Limited to my own understanding so can't create katas that are very complex
- Above point rules out advanced mathematical and scientific challenges (e.g. Fibonacci Spirals idea)
- I must be able to understand the kata inside and out in order to create it
