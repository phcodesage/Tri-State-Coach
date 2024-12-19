
function News() {
  return (
    <div className="w-full">
  {/* First Row */}
  <div className="flex items-center justify-center mb-20">
  <div style={{ width: "92px", height: "0px", border: "3px solid #A13D3D" }}></div>
  <div className="flex flex-col items-center">
    <h2 className="text-3xl font-bold" style={{ fontFamily: "'Inter'", fontStyle: "normal", fontWeight: "700", fontSize: "48px", lineHeight: "58px", textAlign: "center", color: "#000000" }}>Our News</h2>
    <p className="text-gray-600" style={{ fontFamily: "'Inter'", fontStyle: "normal", fontWeight: "400", fontSize: "20px", lineHeight: "24px", textAlign: "center", color: "#7A7A7A" }}>Some of our news</p>
  </div>
</div>



  {/* Second Row */}
   <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Gallery Item 1 */}
    {/* Gallery Item 1 */}
    <div className="max-w-sm bg-white rounded-lg shadow" style={{"background":"#FCFCFC","boxShadow":"0px 5px 30px rgba(0, 0, 0, 0.17)","borderRadius":"10px"}}>
      <a href="#">
        <img className="rounded-t-lg" src="./s" alt="" style={{"width":"386px","height":"256px","background":"url(image.png)","borderRadius":"10px 10px 0px 0px"}}/>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{"width":"138px","height":"28px","left":"19px","top":"284px","fontFamily":"'Roboto'","fontStyle":"normal","fontWeight":"400","fontSize":"24px","lineHeight":"28px","color":"#000000"}}>
            New Buses
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{"width":"338px","height":"108px","left":"18px","top":"330px","fontFamily":"'Inter'","fontStyle":"normal","fontWeight":"400","fontSize":"16px","lineHeight":"19px","color":"#7A7A7A"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies at lectus at suscipit. In erat urna, varius eu orci sed, semper volutpat eros. Cras semper vitae metus nec feugiat.
        </p>
        <a
          href="#"
          className="w-full flex items-center justify-end px-8 py-8 rounded-lg focus:ring-4 focus:outline-none" style={{"height":"28px","fontFamily":"'Roboto'","fontStyle":"normal","fontWeight":"700","fontSize":"24px","lineHeight":"28px","textDecorationLine":"underline","color":"#A13D3D"}}
        >
          Read more
        </a>
      </div>
    </div>

    {/* Gallery Item 2 */}
    {/* Add similar JSX code for second gallery item */}
    <div className="max-w-sm bg-white rounded-lg shadow" style={{"background":"#FCFCFC","boxShadow":"0px 5px 30px rgba(0, 0, 0, 0.17)","borderRadius":"10px"}}>
      <a href="#">
        <img className="rounded-t-lg" src="./s" alt="" style={{"width":"386px","height":"256px","background":"url(image.png)","borderRadius":"10px 10px 0px 0px"}}/>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{"width":"138px","height":"28px","left":"19px","top":"284px","fontFamily":"'Roboto'","fontStyle":"normal","fontWeight":"400","fontSize":"24px","lineHeight":"28px","color":"#000000"}}>
            New Buses
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{"width":"338px","height":"108px","left":"18px","top":"330px","fontFamily":"'Inter'","fontStyle":"normal","fontWeight":"400","fontSize":"16px","lineHeight":"19px","color":"#7A7A7A"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies at lectus at suscipit. In erat urna, varius eu orci sed, semper volutpat eros. Cras semper vitae metus nec feugiat.
        </p>
        <a
          href="#"
          className="w-full flex items-center justify-end px-8 py-8 rounded-lg focus:ring-4 focus:outline-none" style={{"height":"28px","fontFamily":"'Roboto'","fontStyle":"normal","fontWeight":"700","fontSize":"24px","lineHeight":"28px","textDecorationLine":"underline","color":"#A13D3D"}}
        >
          Read more
        </a>
      </div>
    </div>
    {/* Gallery Item 3 */}
    {/* Add similar JSX code for third gallery item */}
    <div className="max-w-sm bg-white rounded-lg shadow" style={{"background":"#FCFCFC","boxShadow":"0px 5px 30px rgba(0, 0, 0, 0.17)","borderRadius":"10px"}}>
      <a href="#">
        <img className="rounded-t-lg" src="./s" alt="" style={{"width":"386px","height":"256px","background":"url(image.png)","borderRadius":"10px 10px 0px 0px"}}/>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{"width":"138px","height":"28px","left":"19px","top":"284px","fontFamily":"'Roboto'","fontStyle":"normal","fontWeight":"400","fontSize":"24px","lineHeight":"28px","color":"#000000"}}>
            New Buses
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{"width":"338px","height":"108px","left":"18px","top":"330px","fontFamily":"'Inter'","fontStyle":"normal","fontWeight":"400","fontSize":"16px","lineHeight":"19px","color":"#7A7A7A"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies at lectus at suscipit. In erat urna, varius eu orci sed, semper volutpat eros. Cras semper vitae metus nec feugiat.
        </p>
        <a
          href="#"
          className="w-full flex items-center justify-end px-8 py-8 rounded-lg focus:ring-4 focus:outline-none" style={{"height":"28px","fontFamily":"'Roboto'","fontStyle":"normal","fontWeight":"700","fontSize":"24px","lineHeight":"28px","textDecorationLine":"underline","color":"#A13D3D"}}
        >
          Read more
        </a>
      </div>
    </div>
  </div>
</div>

  )
}

export default News