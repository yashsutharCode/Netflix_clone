import React, { useState } from "react";
import "./Netflex.css";
import SignInForm from "./SignInForm";

const Header = ({ onSignInClick }) => (
  <div className="header">
    <nav>
      <img src="/logo.png" alt="Netflix Logo" className="logo" />
      <div>
        <button className="language-btn">
          English <img src="/down-icon.png" alt="Dropdown Icon" />
        </button>
        <button onClick={onSignInClick}>Sign In</button>
      </div>
    </nav>
    <div className="header-content">
      <h1>Unlimited movies, TV shows and more</h1>
      <h3>Watch anywhere. Cancel anytime.</h3>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <form className="email-signup">
        <input type="email" placeholder="Email address" />
        <button type="submit">Get started</button>
      </form>
    </div>
  </div>
);

const FeatureRow = ({ imgSrc, title, description, reverse }) => (
  <div className={`row ${reverse ? "reverse" : ""}`}>
    <div className="img-col">
      <img src={imgSrc} alt={title} />
    </div>
    <div className="text-col">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const Features = () => (
  <div className="features">
    <FeatureRow
      imgSrc="/feature-1.png"
      title="Enjoy on your TV."
      description="Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray player, and more."
    />
    <FeatureRow
      imgSrc="/feature-2.png"
      title="Download your shows to watch offline"
      description="Save your favourites easily and always have something to watch."
      reverse
    />
    <FeatureRow
      imgSrc="/feature-3.png"
      title="Watch everywhere"
      description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
    />
    <FeatureRow
      imgSrc="/feature-4.png"
      title="Create profiles for kids"
      description="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
      reverse
    />
  </div>
);

const FAQ = () => (
  <div className="faq">
    <h2>Frequently Asked Questions</h2>
    <ul className="accordion">
  {/* Static FAQ Questions */}
  <li>
    <input type="radio" name="accordion" id="faqNetflix1" />
    <label htmlFor="faqNetflix1">What is Netflix?</label>
    <div className="content">
      <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
    </div>
  </li>
  <li>
    <input type="radio" name="accordion" id="faqNetflix2" />
    <label htmlFor="faqNetflix2">How much does Netflix cost?</label>
    <div className="content">
      <p></p>
    </div>
  </li>

  <li>
    <input type="radio" name="accordion" id="faqNetflix3" />
    <label htmlFor="faqNetflix3">Where can i watch?</label>
    <div className="content">
      <p>Netflix features include personalized recommendations, offline downloads, multiple profiles, 4K streaming, and a vast library of content across various genres and languages.</p>
    </div>
  </li>
  <li>
    <input type="radio" name="accordion" id="faqNetflix4" />
    <label htmlFor="faqNetflix4">How do i cancel?</label>
    <div className="content">
      <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
    </div>
  </li>
  <li>
    <input type="radio" name="accordion" id="faqNetflix5" />
    <label htmlFor="faqNetflix5">What can i watch on Netflix?</label>
    <div className="content">
      <p>Netflix features include personalized recommendations, offline downloads, multiple profiles, 4K streaming, and a vast library of content across various genres and languages.</p>
    </div>
  </li>
  <li>
    <input type="radio" name="accordion" id="faqNetflix6" />
    <label htmlFor="faqNetflix6">Is Netflix good for kids?</label>
    <div className="content">
      <p>Netflix features include personalized recommendations, offline downloads, multiple profiles, 4K streaming, and a vast library of content across various genres and languages.</p>
    </div>
  </li>

  
  
</ul>


    <small>Ready to watch? Enter your email to create or restart your membership</small>
    <form className="email-signup">
      <input type="email" placeholder="Email address" />
      <button type="submit">Get started</button>
    </form>
  </div>
);

const TrendingNow = () => (
  <div className="trending-now">
    <h2>Trending Now</h2>
    <div className="imgs">
      <img src="/solo-2018.jpg" alt="Trending Item 1" />
      <img src="/OIP (4).jpg" alt="Trending Item 2" />
      <img src="/AAAABWIpJw3vxeta010nIpBcZ_Gyg9CMe3unyfixX942ht3rdrFBZV0di4ypqRsKNcKK-XOjP5PcgNgPjR02aoot9R_IaNAFYURTkzOyHzNT8OC3dyjKKBsqgRzRWiVQebCPgiK2-A.jpg" alt="Trending Item 3" />
      <img src="/bird-box-netflix-132390.jpg" alt="Trending Item 4" />
      <img src="/sacred_games_big_81618_700_1000.jpg" alt="Trending Item 5" />
      <img src="/the-prom-netflix-149579.jpg" alt="Trending Item 6" />
    </div>  
    <h2>Only on Netflix</h2>
    <div className="imgs">
      
      <img id="len" src="/wmcj8ml7wqh01.jpg" alt="Trending Item 2" />
      <img id="len" src="/22063604-standard.avif" alt="Trending Item 1" />
      <img id="len" src="/R (1).jpg" />
      <img id="len" src="/money-heist-netflix-144238.jpg" alt="Trending Item 4" />
      <img id="len" src="/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg" alt="Trending Item 6" />
      <img id="len" src="/93d330382e963458edb433ed100910d8.jpg" />
     
    </div>  
  </div>
  
);

const Footer = () => (
  <div className="footer">
    <h2>Questions? Call 000-800-919-1694</h2>
    <div className="footer-links">
      <ul>
        <li>FAQ</li>
        <li>Help Centre</li>
        <li>Account</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Ways to Watch</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
        <li>Speed Test</li>
        <li>Legal Notices</li>
        <li>Teams</li>
        <li>Only on Netflix</li>
      </ul>
    </div>
    <button className="language-btn">
      English <img src="/down-icon.png" alt="Dropdown Icon" />
    </button>
    <p className="copyright-txt">Netflix India</p>
  </div>
);

const App = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div>
      {!showSignIn ? (
        <>
          <Header onSignInClick={() => setShowSignIn(true)} />
          <TrendingNow /> {/* Added Trending Now */}
          <Features />
         
          <FAQ />
          <Footer />
        </>
      ) : (
        <SignInForm onClose={() => setShowSignIn(false)} />
      )}
    </div>
  );
};

export default App;
