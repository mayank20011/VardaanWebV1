import Brief from '../Components/Brief'
import OurServices from '../Components/OurServices'
import Whyus from '../Components/Whyus'
import ChatwithUsbutton from '../Components/ChatwithUsbutton';
import Ourteam from '../Components/Ourteam';
function Home() {
  return (
    <>
    <div className="container mx-auto pt-32">
       <Brief/>
       <Whyus/>
       <OurServices/>
       <ChatwithUsbutton/>
       <Ourteam/>
    </div>
    </>
  )
}

export default Home