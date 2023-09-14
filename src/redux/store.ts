//1. 导入创建切片对象 配置容器的
import {createSlice, configureStore} from '@reduxjs/toolkit'

//2. 创建 slice 对象
export const countSlice = createSlice({
    //设置别名
    name: 'count',
    //初始化值
    initialState:{
      value: 10,
      isShow:true
    },
    //配置 reducer 的功能
    reducers: {
        // action  {type: 'xxx', payload: 10}
        // state 相当于initialState
        incre: (state, action) => {
          //直接修改 state 对象的值, 不建议返回新对象
          state.value += action.payload
        },
        showall: (state, action) => {
          state.isShow = !action.payload
        }
      }
  })

//3. 创建 store 对象
export let store = configureStore({
    reducer: countSlice.reducer
});

//4. 提取 action 对象的函数
export let {incre, showall} = countSlice.actions;



// //5-1 修改状态
// store.dispatch(incre(10));
// store.dispatch(decre(10));

console.log(store.getState());
