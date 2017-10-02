export function getShortTimeString(
  startTime: Date | number,
  endTime: Date | number
): string {
  const s = new Date(String(startTime)).toTimeString().split(':');
  const e = new Date(String(endTime)).toTimeString().split(':');

  return `${s[0]}:${s[1]} - ${e[0]}:${e[1]}`;
}
