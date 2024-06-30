import About from './Home/About'
import Faq from './Home/Faq'
import Highlight from './Home/Highlight'
import './Home/page.css'

function Page() {
    
  return (
    <div className="max-w-7xl my-0 mx-auto p-8 text-center">
      <div className="-mx-40 px-12"><About/></div>
      <Highlight/>
      <div className="-mx-40 px-40 py-12 text-left"><Faq /></div>
    </div>
  );
}

export default Page;
