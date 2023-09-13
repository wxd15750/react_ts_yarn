import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Test() {
  // const count = useSelector((state)=>state.count.value)
  const dispatch = useDispatch();
  return <div>我是测试组件 </div>;
}
