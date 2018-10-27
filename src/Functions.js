// @flow
export const scrollIntoView = id => {
    const element = document.getElementById(id);
    if (element !== null) {
        element.scrollIntoView({behavior: 'smooth'})
    }
};