
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() { // Method
    return `${this.name} has ${this.legCount} legs`
  }
}

