import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import Home from '../Components/Layout'

// Spinner Components used when page loading and data loading is called
const antIcon = (
  <LoadingOutlined
    cols={8}
    style={{
      fontSize: 150,
      marginTop: '20vh',
    }}
    spin
  />
)

// Return value should be component
const CustomSpinner = () => (
  <Home>
    {' '}
    <Spin className="text-c" indicator={antIcon} />
  </Home>
)

export default CustomSpinner
