
export function getCardsType(type) {
  if (type === "Task") {
    return { isChallenge: false };
  } else if (type === "Challenge") {
    return { isChallenge: true };
  }
}
