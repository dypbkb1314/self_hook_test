/*
 * @Author: your name
 * @Date: 2021-03-20 15:07:31
 * @LastEditTime: 2022-01-21 11:58:43
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /reactht/src/components/theme-app.tsx
 */
import React from 'react'

import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
interface IselfProps {}
interface IselfState{
  theme: any
}
interface toobar{
  changeTheme: void
}

// 一个使用 ThemedButton 的中间组件
function Toolbar(props: any) {
  return (
    // <ThemedButton onClick={props.changeTheme}>
    //   Change Theme
    // </ThemedButton>
    <div></div>
  );
}

export default class ThemeTestApp extends React.Component<IselfProps, IselfState> {
  constructor(props:IselfProps) {
    super(props);
    this.state = {
      theme: themes.light,
    };
  }
  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  };

  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={() => this.toggleTheme} />
        </ThemeContext.Provider>
          <ThemedButton />
      </div>
    );
  }
}