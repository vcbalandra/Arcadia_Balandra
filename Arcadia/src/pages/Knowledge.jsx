import React, { useState, useEffect }  from 'react';
import { redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Knowledge';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import customFetch from '../utils/customFetch';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import heroImage from '../assets/images/hero-img.jpg';

export const loader = async () => {
  try {
    const response = await fetch('/knowledge-hub');
    return response.data;
  } catch (error) {
   console.error(error);
    return redirect('/');
  }
};

const Knowledge = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false,
      slidesToScroll: 1,
      
      align: 'start', 
      draggable: true, 
      speed: 6,
     }, [Autoplay()])
  
    const [posts, setPosts] = useState([
      { id: 1, content: 'Events 1', heroImage },
      { id: 2, content: 'Events 2', heroImage },
      { id: 3, content: 'Events 3', heroImage },
      { id: 4, content: 'Events 4', heroImage },
    ]);
  
  
    useEffect(() => {
    }, []);

  return (
    <div>
      <Wrapper>
       <Navbar />
      <section id='section-hero' className='section-hero'>
      <div className="container">
      <h1 className='section-statement'>Your knowledge hub for<br/> waste manangement</h1>
      </div>
      </section>

      <section id='market-analysis' className='market-analysis'>
      <div className="market-container">
            <div className="row">
          <h2 className='market-title'>MARKET ANALYSIS</h2>
          <p className='market-message'><span className='arcadia-word'>Arcadia</span> conducts in-depth market analysis to provide businesses with a comprehensive understanding
            of the sustainability landscape. These analysis explore trends opportunities, challenges and key drivers in the transition
            to a circular economy. By delivering actionable insights, we enable companies to identify growth areas, anticipate market shifts,
            and shifts, and align their strategies with the evolving demands of sustainable practices and consumer preferences.
          </p>
          </div>
          <div className='image-container'>
            <img src={heroImage} alt="Hero Image" className='marketImg'/>
           </div>
          </div>
      </section>

      <section id='position-papers' className='position-papers'>
        <div className="papers-container">
           <div className='image-container'>
            <img src={heroImage} alt="Hero Image" className='papersImg'/>
            </div>
          <div className="row">
          <h3 className='papers-title'>POSITION PAPERS</h3>
          <p className='papers-message'><span className='arcadia-word'>Arcadia</span> develops position papers that outline informed perspectives on critical sustainability issues.
            These papers offer a deep dive into industry challenges, policy recommendations, and strategic actions that stakeholders should
            adopt to dive systematic change. Backed by data, case studies, and expert insights, our position papers serve as authoratative
            resources for guiding decision-makers in business, government, and civil society toward impactful, sustainability-focused
            policies and practices.
          </p>
          </div>
        </div>
      </section>

      <section id='reports-manifestos' className='reports-manifestos'>
      <div className="reports-container">
            <div className="row">
          <h4 className='reports-title'>REPORTS AND MANIFESTOS</h4>
          <p className='reports-message'>Our waste reports provide detailed assessments of current waste management practices, with a focus on
            gaps, inefficiencies, and opportunities for improvement. These reports highlight both local and global case studies, offering
            solutions and technologies that can optimize waste management processes. By addressing critical issues in post-consumer waste, our
            waste reports empower companies, municipalities, and policymakers to implement effective, sustainable, and circular waste
            management, our waste reports empower companies, municipalities, and policymakers to implement effective, sustainable, and circular
            waste management strategies.
          </p>
          </div>
          <div className='image-container'>
            <img src={heroImage} alt="Hero Image" className='reportsImg'/>
           </div>
          </div>
      </section>

      <section id='editorials' className='editorials'>
        <div className="editorials-container">
        <h5 className='editorials-title'>Opinion Editorials</h5>
         <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {posts.map((post) => (
                <div key={post.id} className="embla__slide">
                  <h2>{post.content}</h2> 
                  {post.heroImage && <img src={post.heroImage} alt="Hero" className='editorials-img'/>} 
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id='waste-reports' className='waste-reports'>
        <div className="waste-container">
          <h6 className='waste-title'>Published Waste Reports</h6>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {posts.map((post) => (
                <div key={post.id} className="embla__slide">
                  <h2>{post.content}</h2> 
                  {post.heroImage && <img src={post.heroImage} alt="Hero" className='editorials-img'/>} 
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </Wrapper>
      </div>
  )
}

export default Knowledge