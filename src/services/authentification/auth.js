export const authService = {
    saveInLocalStorage:  (user) => {localStorage.setItem('currentUser', JSON.stringify(user)); },
    deleteFromLocalStorage: () => {localStorage.removeItem('currentUser');},
    getCurrentUser: () => { return localStorage.getItem('currentUser')},
}

