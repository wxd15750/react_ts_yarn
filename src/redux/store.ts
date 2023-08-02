//1. 导入创建切片对象 配置容器的
import {createSlice, configureStore} from '@reduxjs/toolkit'

//2. 创建 slice 对象
export const countSlice = createSlice({
    //设置别名
    name: 'counter',
    //初始化值
    initialState:{value: 10},
    //配置 reducer 的功能
    reducers: {
        // action  {type: 'xxx', payload: 10}
        incre: (state, action) => {
          //直接修改 state 对象的值, 不建议返回新对象
          state.value += action.payload
        },
        decre: (state, action) => {
          state.value -= action.payload
        }
      }
  })

//3. 配置 store 对象
export let store = configureStore({
    reducer: countSlice.reducer
});

//4. 获得创建 action 对象的函数
let {incre, decre} = countSlice.actions;



//5-1 修改状态
store.dispatch(incre(10));
store.dispatch(decre(10));

console.log(store.getState());
