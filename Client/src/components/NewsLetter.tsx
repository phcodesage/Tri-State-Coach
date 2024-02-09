function NewsLetter() {
  return (
    <div className="flex justify-center relative px-4 sm:px-6 md:px-8 lg:px-10" style={{"marginBottom":"-55px", "zIndex": "100"}}>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center w-full py-4 px-4 sm:px-6 md:px-8 lg:px-10" style={{"background":"#192636","borderRadius":"10px"}}>
        <div className="text-center sm:text-center md:text-left lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-2">Join Our Newsletter</h2>
          <p className="text-sm sm:text-base md:text-base lg:text-base font-bold text-white">Get notified about new tips</p>
        </div>
        <div className="mt-4 sm:mt-4 md:mt-0 lg:mt-0 text-center">
          <input type="email" name="" id="" className="w-full sm:w-full md:w-3/4 lg:w-3/4 h-10 px-4 mb-2" placeholder="Enter your email"/>
          <p className="text-sm sm:text-base md:text-base lg:text-base font-bold text-white">We do not share your email. Unsubscribe anytime.</p>
        </div>
        <button className="mt-4 sm:mt-4 md:mt-0 lg:mt-0 w-full sm:w-full md:w-1/4 lg:w-1/4 h-10 text-center text-white bg-yellow-500">Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter