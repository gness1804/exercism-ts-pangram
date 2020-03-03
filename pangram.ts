class Pangram {
  sentence: string;

  constructor(sentence: string) {
    this.sentence = sentence;
  }

  static chars = (): number[] => {
    // ASCII chars A-Z: 65-90
    //ASCII chars a-z: 97-122
    let arr: number[] = [];
    let count = 65;

    while (count < 123) {
      if (count <= 90 || count >= 97) arr = [...arr, count];
      count++;
    }
    return arr;
  };

  isPangram = (): boolean => {
    const chars = Pangram.chars();

    return true;
  };
}

export default Pangram;
