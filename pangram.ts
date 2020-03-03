class Pangram {
  sentence: string;

  constructor(sentence: string) {
    this.sentence = sentence;
  }

  static chars = (): number[] => {
    //ASCII chars a-z: 97-122
    let arr: number[] = [];
    let count = 97;

    while (count < 123) {
      arr = [...arr, count];
      count++;
    }
    return arr;
  };

  isPangram = (): boolean => {
    const chars = new Set(Pangram.chars());
    this.sentence
      .replace(/\s/g, "")
      .toLowerCase()
      .split("")
      .forEach(letter => {
        const code = letter.charCodeAt(0);
        if (chars.has(code)) {
          chars.delete(code);
        }
      });

    if (!chars.size) return true;
    return false;
  };
}

export default Pangram;
