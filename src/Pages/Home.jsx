import Brief from '../Components/Brief'
import OurServices from '../Components/OurServices'
import Whyus from '../Components/Whyus'
function Home() {
  return (
    <>
    <div className="container mx-auto pt-32">
       <Brief/>
       <Whyus/>
       <OurServices/>
    </div>
    </>
  )
}

export default Home