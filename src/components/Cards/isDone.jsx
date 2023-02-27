export function getCardsStatus(status) {
  if (status === "Incomplete") {
    return { isDone: false };
  } else if (status === "Complete") {
    return { isDone: true };
  }
}