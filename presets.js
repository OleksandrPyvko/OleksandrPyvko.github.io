'use strict';


export class Presets {
  constructor(startingDate, endingDate, presetSelector) {
    this.startingDate = startingDate;
    this.endingDate = endingDate;
    this.presetSelector = presetSelector;
  }

  week() {
    const inputDate = new Date(this.startingDate.value);
    const weekLater = new Date(inputDate.getTime() + 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .substring(0, 10);
    return weekLater;
  }

  month() {
    const inputDate = new Date(this.startingDate.value);
    const monthLater = new Date(
      inputDate.getFullYear(),
      inputDate.getMonth() + 1,
      inputDate.getDate()
    );
    const formattedDate = monthLater.toISOString().substring(0, 10);
    return formattedDate;
  }
}
