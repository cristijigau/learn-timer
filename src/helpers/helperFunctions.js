export function secToHMS(value) {
  const hours = parseInt(value / 3600);
  const minutes = parseInt((value % 3600) / 60);
  const seconds = parseInt((value % 3600) % 60);
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`;
}
