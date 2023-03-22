import React from 'react'
import { Layout } from 'antd'

const { Header } = Layout

type HomeProps = {
  children?: React.ReactNode
}

const Home = (props: HomeProps) => {
  return (
    <Layout className="bg-grey bd-box scroll view-w-100 view-h-100">
      <Header
        data-testid="layout-title"
        className="fontWeight bg-teal text-c text-l fontWeight-7"
      >
        MontyHall Game!
      </Header>
      <div className="flex align-center flex-d-col">{props.children}</div>
    </Layout>
  )
}

export default Home
