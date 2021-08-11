# Five Day ForeCast

> - 使用者輸入
> - 地區
> - 查詢所在地區的天氣預報

### 圖表顯示

- 最高溫度 (Bar Chart)
- 最低溫度 (Bar Chart)
- 五天的濕度(Pie Chart)

1. User enter Taipei
   1-1. User enter nothing or unknown location pop with error message 'Please enter correct location'
2. User press query
3. 顯示圖表

### Tech used

- axios
- useCustomHook -> Redux (redux, react-redux, redux-thunk)
- Emotion(styled component)

### 問題

1. 純 css 繪製 bar chart with animation
2. 純 css 繪製 pie chart with animation
3. multiple dispatch with async await
