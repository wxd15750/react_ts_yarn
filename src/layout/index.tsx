import { Layout } from 'antd'
import React from 'react'
import MenuList from './menulist'
import Tabbar from './tabbar'
import ShowContent from './content'

export default function Layouts() {
  return (
    <Layout style={{overflow:"hidden"}}>
      <MenuList></MenuList>

      <Layout>
        <Tabbar></Tabbar>

        <ShowContent></ShowContent>

      </Layout>
      
    </Layout>
  )
}
