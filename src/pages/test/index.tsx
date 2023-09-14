import { incre, store } from "@/redux/store";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Test() {
  let [num, setNum] = useState(0);

  // 加
  let add = () => {
    store.dispatch(incre(10));
    setNum(store.getState().value);
  };

  return (
    <div>
      我是测试组件
      <div>我是stroe中的数据{store.getState().value}</div>
      <button style={{ marginLeft: "20px" }} onClick={add}>
        我是按钮
      </button>
      <br />
      <button>我是按钮2</button>
    </div>
  );
}
