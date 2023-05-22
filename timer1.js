const times = process.argv;

for (let i = 2; i < times.length; i++) {
  if (times[i] > 0 || Number.isInteger(times[i])) {
    setTimeout(() => {
      console.log(`${times[i]} second alarm: Beep Beep Beep`)
    }, times[i] * 1000);
  }
}
