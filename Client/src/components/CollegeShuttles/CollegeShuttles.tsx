import TriStateCoachBus from '../../assets/img-1209-1@2x.png'
import { Link } from 'react-router-dom';


export default function CollegeShuttles() {
  return (
    <div className="my-52 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={TriStateCoachBus} className="grow w-full aspect-[1.37] max-md:mt-10 max-md:max-w-full" style={{"filter":"drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.25))","borderRadius":"20px"}}
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto font-bold max-md:mt-10 max-md:max-w-full">
            <h1 className="max-md:max-w-full max-md:text-4xl" style={{"fontFamily":"'Inter'","fontStyle":"normal","fontWeight":"700","fontSize":"48px","lineHeight":"58px","color":"#000000"}}>
              <br />
              College Shuttles
              <br />
              <br />
            </h1>
            <p className="mt-10 max-md:mt-10 max-md:max-w-full" style={{"fontFamily":"'Inter'","fontStyle":"normal","fontWeight":"400","fontSize":"20px","lineHeight":"24px","color":"#7A7A7A"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus ultricies at lectus at suscipit. In erat urna,
              varius eu orci sed, semper volutpat eros. Cras semper vitae metus
              nec feugiat.
              <br />
              <br />
            </p>
            <Link to="/"
              className="justify-center self-start px-14 py-6 mt-16 text-2xl text-center text-white rounded-xl max-md:px-5 max-md:mt-10"
              style={{"background":"#991616","borderRadius":"10px", "fontFamily":"'Inter'","fontStyle":"normal","fontWeight":"700","fontSize":"24px","lineHeight":"29px"}}
              aria-label="College Breaks"
            >
              College Breaks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}