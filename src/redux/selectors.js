
export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectLoading = state => state.card.loading;

export const selectCurrentToken = state => state.auth.token;



export const getAllCards = state => state.auth.user.cards;