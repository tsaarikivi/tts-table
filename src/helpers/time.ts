export function getShortTimeString(startTime, endTime): string {
  const s = new Date(startTime).toTimeString().split(':');
  const e = new Date(endTime).toTimeString().split(':');
  return `${s[0]}:${s[1]} - ${e[0]}:${e[1]}`;
}
