import NavBar from "./NavBar";
import './SchoolAcad.css'
import Footer from "./footer/Footer"

export default function schoolprofile(){

    return <div className='main'>
        <div> <NavBar/> </div>
        <div className="info">
          <div className='years'>
            <text className='heading'>Early Years</text>
            <text className='text'>
            In the Early Years, children enjoy a caring environment that fosters positive feelings of self-worth and respect. Personal, social, emotional, physical and intellectual development take place through opportunities to engage in free and carefully structured play. With listening and reciprocity as our pedagogical belief, adults and children are seen as learning partners. Relationships, sense of community, valuing of ideas by adults and peers, freedom of expression and the development of multiple literacies are at the heart of the learning experience.
            In order to ensure the child’s holistic development, the Beaconhouse Early Years has replaced subject titles with ‘Areas of Experience’ that are all equally important and interrelated. The areas also facilitate effective assessment of learning and development. The six areas of experience are:
            <br/>1- Communication, Language and Literacy (English and Urdu)
            <br/>2- Mathematical Development
            <br/>3- Knowledge and Understanding of the World
            <br/>4- Personal, Social, Health Education (PSHE)
            <br/>5- Physical Development
            <br/>6- Creative Development (Art and Music)
            </text>
          </div>
          <div className='years'>
            <text className='heading'>Primary</text>
            <text className='text'>
            The Beaconhouse Primary and Middle School curriculum is modelled after the Scottish Curriculum and the UK National Curriculum and covers Classes I to VIII. The international curriculum has been contextualised and adapted to local needs. It is taught in English with the exception of language classes and strives to develop knowledge, skills, values and cultural understanding. Select Beaconhouse schools are also authorised to offer the IB Primary Years Programme for students 3-11 years of age.

            <br/>Our middle school programme includes the best aspects of teaching and learning and is designed keeping CIE expectations in mind. Subject selection at this level is crucial in shaping future pathways and links between school, further study and the world of work. We are committed to embracing the cross curriculum priorities and general capabilities of the CIE curriculum.

            <br/>Supported by strong co-curricular programmes students are encouraged to become lifelong learners who can solve problems, think creatively and critically, communicate effectively and act ethically.
            </text>
          </div>
          <div className='years'>
            <text className='heading'>Higher School</text>
            <text className='text'>
            Beaconhouse students have consistently produced outstanding Matriculation results with numerous position-holders over the years. Matriculation is a two-year programme culminating in the Class X examination. The curriculum and examination is administered by Pakistani federal and provincial education boards. Most students who pass this examination are 16 years old.
            </text>
          </div>
          <div className='years'>
            <text className='heading'>O level & IGCSE</text>
            <text className='text'>
            Students continue with the Beaconhouse in-house curriculum till Class VIII, after which most students enrol in the British O Level examinations. Beaconhouse students take these exams through the Cambridge International Examinations (CIE) administered by the University of Cambridge Local Examinations Syndicate.
            O Levels are a standard UK qualification, usually taken at the age of 16, available in a wide range of subjects. Most students take between seven and 10 O Level subjects and study for two to three years. Beaconhouse students have consistently performed well in the O Level examinations, with 19 students receiving distinctions across Pakistan in 2016.
            IGCSE is a curriculum developed by Cambridge for 14 to 16 year olds and is the international equivalent of the Cambridge O Level. Even though just a few of our schools offer IGCSE as an option, students perform well in the examinations and results remain above average.
            </text>
          </div>
        </div>
        <div className="footer"><Footer /></div>   
    </div>
}