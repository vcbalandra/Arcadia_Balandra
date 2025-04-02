import React, { useState, useEffect }  from 'react';
import { redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Events';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import heroImage from '../assets/images/hero-img.jpg';


export const loader = async () => {
  try {
    const response = await fetch('/events-collaboration');
    return response.data;
  } catch (error) {
   alert(error);
    return redirect('/');
  }
};

const Events = () => {
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
        <section id="section-hero" className="section-hero">
          <div className="container">
          <h1 className='section-statement'>Foster discourse and drive <br/> actionable sustainability solutions</h1>
          </div>
        </section>

        <section id="dialogues" className="dialogues">
          <div className="dialogues-container">
            <div className="row">
          <h2 className='dialogues-title'>DEEP DIVE DIALOUGES</h2>
          <p className='dialogues-message'>Our Deep Dive Dialogue sessions are structured discussions designed to encourage stakeholders
            to share their insights and experience on the challenges and opportunities in sustainability. The sessions will be focus on
            sharing on the ground challenges, case studies, good and bad practices, as well as solutions, technologies, and best practices
            adopted by other countries.
          </p>
          <p className='dialogues-sessions'>Forums, Panel Discussions, Fireside Chats, Summits</p>
          </div>
          <div className='image-container'>
            <img src={heroImage} alt="Hero Image" className='dialogueImg'/>
            </div>
          </div>
        </section>

        <section id="campaigns" className="campaigns">
          <div className="campaigns-container">
          <div className='image-container'>
            <img src={heroImage} alt="Hero Image" className='campaignImg'/>
            </div>
            <div className="row">
          <h3 className='campaigns-title'>HACKATHONS AND CAMPAIGNS</h3>
          <p className='campaigns-message'><span className='arcadia-word'>Arcadia</span> organizes hackathons and campaign-driven events designed to bring together innovative
            minds and passionate advocates to solve real-world sustainability challenges. These immversive, hands-on sessions invite companies,
            young leaders, and experts to collaborate in developing creative solutions, while aligning with corporate sustainability goals and advocacy
            efforts. Through these events, we foster the rapid prototyping of ideas, accelerate problem-solving, and drive the development 
            of actionable strategies for environmental and social impact.
          </p>
          <p className='campaign-activities'>Hackathons, Workshops and Trainings</p>
          </div>
          </div>
        </section>

        <section id="upcoming" className="upcoming">
          <div className="upcoming-container">
          <h4 className='upcoming-title'>Upcoming Events</h4>
          <div className="embla" ref={emblaRef}>
    <div className="embla__container">
      {posts.map((post) => (
        <div key={post.id} className="embla__slide">
          <h2>{post.content}</h2> 
          {post.heroImage && <img src={post.heroImage} alt="Hero" className='upcoming-img'/>} 
        </div>
      ))}
    </div>
  </div>
          </div>
        </section>

        <section id="previous" className="previous">
        <div className="previous-container">
          <h5 className='previous-title'>Previous Events</h5>
          <div className="embla" ref={emblaRef}>
    <div className="embla__container">
      {posts.map((post) => (
        <div key={post.id} className="embla__slide">
          <h2>{post.content}</h2> 
          {post.heroImage && <img src={post.heroImage} alt="Hero" className='upcoming-img'/>} 
        </div>
      ))}
    </div>
  </div>
          </div>
        </section>
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Events;