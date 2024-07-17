// you are asked to write an algorithm that read a sentence, which ends with a point, character by character, and to determine:


// Instructions

// The length of the sentence (the number of characters).
// The number of words in the sentence (assuming that the words are separated by a single space).
// The number of vowels in the sentence.
// You have to keep in mind that: 

// Each character will be treated separately.
// The last character is the point.
// Use three variables as counters.

// Solution

// Initialize Counters: Create three variables to count the length of the sentence, the number of words, and the number of vowels.
// Iterate Through Each Character: Loop through each character in the sentence.
// Update Counters: Update the length counter for each character, check for vowels to update the vowel counter, and check for spaces to update the word counter.
// Handle Edge Cases: Make sure to handle cases where there are no words or where the input might be an empty string.


function analyzeSentence(sentence) {
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;
    const vowels = "aeiouAEIOU";

    let inWord = false;

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        lengthCounter++;

        if (vowels.includes(char)) {
            vowelCounter++;
        }

        if (char.match(/[a-zA-Z]/)) {
            if (!inWord) {
                wordCounter++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }

    // Output the results
    console.log("Length of the sentence:", lengthCounter);
    console.log("Number of words:", wordCounter);
    console.log("Number of vowels:", vowelCounter);
}

// Example usage
const sentence = "This is a test sentence.";
analyzeSentence(sentence);
