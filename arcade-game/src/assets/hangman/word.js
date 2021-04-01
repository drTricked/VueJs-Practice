const words = [
  "swim",
  "meat",
  "fizzy",
  "pneumonia",
  "topaz",
  "buffalo",
  "wimpy",
  "zephyr",
  "boxful",
  "boggle",
  "Strength",
  "subway",
];

export default function randomWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
