import React from 'react';

const PageContext = React.createContext('Profile');
export const PageProvider = PageContext.Provider;
export const PageConsumer = PageContext.Consumer;
