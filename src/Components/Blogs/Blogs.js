import React from 'react';
import {  Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';


const Blogs = () => {
    return (
        <div>
          <div className='container'>
            
            <h1 className="mt-5  fw-bold">Welcome To Our Blogs </h1>
            <hr className="hr-width mb-5" />
            
  

<div className='row justify-content-evenly mb-5'>


<Card border="primary" className="text-center col-lg-4">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title> University of Utah Health Care: “HealthFeed” </Card.Title>
    <Card.Text>
    University of Utah Health Care has staked its online claim to expertise on health topics ranging from the timely and lighthearted to the specific and serious. Whether a post is addressing common types of acne and their causes or the ins and outs of glaucoma, “HealthFeed” excels at being a trusted digital resource for patients and nonpatients alike. <br />
    Also known as Children’s Minnesota, the Children’s Hospitals and Clinics of Minnesota aim to keep parents informed when it comes to keeping kids healthy. “The Mighty Blog” knows its audience and speaks to them directly with posts written by previous patients,, updates on national trends from trusted professionals, and overviews of new developments on premises.
    </Card.Text>
    
  </Card.Body>
  <Card.Footer className="text-muted">Recently posted</Card.Footer>
</Card>

<Card border="primary" className="text-center  col-lg-4">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Altru Medical System  </Card.Title>
    <Card.Text>
    <p>   Saying Altru’s blog is comprehensive would be an understatement. From posts covering nutrition and patient stories to substance abuse prevention and joint care, their blog shows a true commitment to providing visitors with the guidance they need to make smart choices, both within a hospital system and outside of it.</p>
    With a recently revamped blog, Brigham and Women’s Hospital has created an informative home for physicians to guest write useful content for visitors, whether they’re patients or not. By offering readers the option to subscribe for timely updates, Brigham and Women’s has established an online presence that complements their in-house care.
    </Card.Text>
    
  </Card.Body>
  <Card.Footer className="text-muted">7 days ago</Card.Footer>
</Card>


</div>





<div className='row justify-content-evenly mb-5'>


<Card border="primary" className="text-center col-lg-4">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title> Children’s Hospitals and Clinics of Minnesota: “The Mighty Blog” </Card.Title>
    <Card.Text>
    <p>   Also known as Children’s Minnesota, the Children’s Hospitals and Clinics of Minnesota aim to keep parents informed when it comes to keeping kids healthy. “The Mighty Blog” knows its audience and speaks to them directly with posts written by previous patients,, updates on national trends from trusted professionals, and overviews of new developments on premises.</p>
    Visitors to Emory Healthcare’s “Advancing Your Health” blog can read through articles written by physicians associated with the network’s multiple speciality centers, such as the Emory Brain Health Center and the Emory Eye Center. Additionally, the blog prominently features navigation tools that can do everything from taking visitors to healthy recipes to connecting them with doctors for scheduled chats.
    </Card.Text>
    
  </Card.Body>
  <Card.Footer className="text-muted">11 days ago</Card.Footer>
</Card>

<Card border="primary" className="text-center  col-lg-4">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title> Emory Healthcare: “Advancing Your Health”</Card.Title>
    <Card.Text>
    Visitors to Emory Healthcare’s “Advancing Your Health” blog can read through articles written by physicians associated with the network’s multiple speciality centers, such as the Emory Brain Health Center and the Emory Eye Center. Additionally, the blog prominently features navigation tools that can do everything from taking visitors to healthy recipes to connecting them with doctors for scheduled chats.  <br />
    University of Utah Health Care has staked its online claim to expertise on health topics ranging from the timely and lighthearted to the specific and serious. Whether a post is addressing common types of acne and their causes or the ins and outs of glaucoma, “HealthFeed” excels at being a trusted digital resource for patients and nonpatients alike.

    </Card.Text>
    
  </Card.Body>
  <Card.Footer className="text-muted">12 days ago</Card.Footer>
</Card>

</div>




<div className='row justify-content-evenly mb-5'>

<Card border="primary" className="text-center col-lg-4">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>The Brigham and Women's Hospital: "Brigham Health Hub"</Card.Title>
    <Card.Text>
    <p>   With a recently revamped blog, Brigham and Women’s Hospital has created an informative home for physicians to guest write useful content for visitors, whether they’re patients or not. By offering readers the option to subscribe for timely updates, Brigham and Women’s has established an online presence that complements their in-house care.</p>
    </Card.Text>
    
  </Card.Body>
  <Card.Footer className="text-muted">18 days ago</Card.Footer>
</Card>



<Card border="primary" className="text-center col-lg-4">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title> Children’s Hospitals and Clinics of Minnesota: “The Mighty Blog” </Card.Title>
    <Card.Text>
    <p>   Also known as Children’s Minnesota, the Children’s Hospitals and Clinics of Minnesota aim to keep parents informed when it comes to keeping kids healthy. “The Mighty Blog” knows its audience and speaks to them directly with posts written by previous patients,, updates on national trends from trusted professionals, and overviews of new developments on premises.</p>
    Visitors to Emory Healthcare’s “Advancing Your Health” blog can read through articles written by physicians associated with the network’s multiple speciality centers, such as the Emory Brain Health Center and the Emory Eye Center. Additionally, the blog prominently features navigation tools that can do everything from taking visitors to healthy recipes to connecting them with doctors for scheduled chats.
    </Card.Text>
    
  </Card.Body>
  <Card.Footer className="text-muted">11 days ago</Card.Footer>
</Card>

</div>
          
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Blogs;