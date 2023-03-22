// import BackButton from '../Components/BackButton'
import Home from '../Components/Layout'
// 404 page in case if user enters the wrong route
function PageNotFound() {
  return (
    <Home>
      {/* <BackButton /> */}
      <div className="flex just-center ">
        <h1 className="text-teal text-xl ">404 Page Not Found</h1>
      </div>
    </Home>
  )
}

export default PageNotFound
