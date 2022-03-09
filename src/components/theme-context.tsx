import React from 'react'

export const themes = {
    light: {
      color: '#000000',
      background: '#fff',
    },
    dark: {
      color: '#ffffff',
      background: 'aqua',
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.dark // 默认值
  );