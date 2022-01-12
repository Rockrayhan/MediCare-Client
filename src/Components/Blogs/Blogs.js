import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Blogs = () => {
    return (
        <div>
            <Header> </Header>
            <h1 className="mt-5 mb-5 fw-bold">Welcome To Our Blog Section</h1>
            <small className="text-success">Thanks For Signing in</small>
            <div className="mt-4 mb-4 p-5"> <h3> University of Utah Health Care: “HealthFeed” </h3>
            <p>   University of Utah Health Care has staked its online claim to expertise on health topics ranging from the timely and lighthearted to the specific and serious. Whether a post is addressing common types of acne and their causes or the ins and outs of glaucoma, “HealthFeed” excels at being a trusted digital resource for patients and nonpatients alike.</p>
             </div>
            <div className="mt-4 mb-4 p-5"> <h3> Altru Medical System </h3>
            <p>   Saying Altru’s blog is comprehensive would be an understatement. From posts covering nutrition and patient stories to substance abuse prevention and joint care, their blog shows a true commitment to providing visitors with the guidance they need to make smart choices, both within a hospital system and outside of it.</p>
             </div>
            <div className="mt-4 mb-4 p-5"> <h3>  Children’s Hospitals and Clinics of Minnesota: “The Mighty Blog” </h3>
            <p>   Also known as Children’s Minnesota, the Children’s Hospitals and Clinics of Minnesota aim to keep parents informed when it comes to keeping kids healthy. “The Mighty Blog” knows its audience and speaks to them directly with posts written by previous patients,, updates on national trends from trusted professionals, and overviews of new developments on premises.</p>
             </div>
            <div className="mt-4 mb-4 p-5"> <h3> Emory Healthcare: “Advancing Your Health” </h3>
            <p>  Visitors to Emory Healthcare’s “Advancing Your Health” blog can read through articles written by physicians associated with the network’s multiple speciality centers, such as the Emory Brain Health Center and the Emory Eye Center. Additionally, the blog prominently features navigation tools that can do everything from taking visitors to healthy recipes to connecting them with doctors for scheduled chats.</p>
             </div>
            <div className="mt-4 mb-4 p-5"> <h3>The Brigham and Women's Hospital: "Brigham Health Hub" </h3>
            <p>   With a recently revamped blog, Brigham and Women’s Hospital has created an informative home for physicians to guest write useful content for visitors, whether they’re patients or not. By offering readers the option to subscribe for timely updates, Brigham and Women’s has established an online presence that complements their in-house care.</p>
             </div>
             <div className="container">
                 <Footer></Footer>
             </div>
            
        </div>
    );
};

export default Blogs;