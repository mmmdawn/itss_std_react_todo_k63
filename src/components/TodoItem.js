import React from 'react'
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem(props) {
  const [state,setState] =React.useState(false);
  const getClickBox = () => {
    setState(!state);
  }
  
  return (
    <label className= {state ? "panel-block has-text-grey-light" : "panel-block"}>
    <input type = "checkbox" onClick={() => getClickBox()} />
    {props.item.text}
    </label>
  );
}

export default TodoItem;