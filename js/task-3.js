const profile = {
  username: "Jacob",
  changeUsername(newName) {
    this.username = newName;
  },
  playTime: 300,
  updatePlayTime(hours) {
    this.playTime = this.playTime + hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
