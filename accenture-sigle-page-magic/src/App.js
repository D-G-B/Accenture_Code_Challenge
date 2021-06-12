import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (

    // want a header or navbar here, fancy scroller?

    <div className= "BigMommaDiv">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>

      </Router>

      <h1>🌟So it Begins🌟</h1>
      <h2>About Us📖</h2>
      <p>We create value in all ⬆️➡️directions.⬇️⬅️</p>

      <p>Working with us, change becomes the most
        dynamic, powerful source of progress you have.</p>

      <p>We bring together leaders in strategy, industry experts,
        eterprise fuction practitioners, business inelligence specialitsts,
        designers, data scientists, and many other specialized skills to 
        drive new value that goes in a multitude of directions</p>

      <p>Across 200 cities and 19 industries,
        we work as one team with a common goal—to create
        🔄360°🔄 value by embracing change.</p>
      
      <h5>Strategy & Consulting</h5> {/* link to https://www.accenture.com/us-en/about/consulting-index  */} 
      <p>Envision and execute change at speed and scale.</p>

      <h5>Interactive</h5> {/* https://www.accenture.com/us-en/about/accenture-interactive-index */}
      <p>Design, build, communicate and run meaningful experiences at the intersection of purpose and innovation.</p>

      <h5>Technology</h5> {/* https://www.accenture.com/us-en/about/technology-index */}
      <p>Accelerate change across your enterprise to create lasting value.</p>

      <h5>Operations</h5> {/* https://www.accenture.com/us-en/about/operations-index */}
      <p>Create intelligent new ways to harness change and grow.</p>

      <h6>Innovation architecture</h6>
      <p>With our global network of over 100 innovation hubs around the world, we apply industry expertise, diverse skill sets and next-generation technology to each business challenge.</p>
      <p>🤓7900🤓</p> {/* Make this into a sexy counter button? 'pump it up!' */}
      <p>Patents pending worldwide</p> 
      
      <h5>Our powerful partner 🌳ecosystem🌳</h5>
      <p>With these partners and an ecosystem of 180 more, we extend our full-service technology and business capabilities.
        Our aim is to harness the potential of these platforms at the greatest speed in the market,
        accelerating the path to value in all directions for our clients.</p>
        <ul>
          <li>AWS</li>
          <li>Google</li>
          <li>Microsoft</li>
          <li>DgB is ME Fullsack Prodictions</li>
          <li>ORACLE</li>
          <li>SAP</li>
          <li>Adobe</li>
          <li>salesforce</li>
          <li>workday</li>
        </ul>

      <h2>🏳️‍🌈Our core Values🏳️‍🌈</h2>
      {/* link to https://www.accenture.com/us-en/about/company/business-ethics */}

      <h5>Client value creation</h5>
      <p>Enabling clients to become high-performance businesses and creating long-term relationships by being responsive and relevant by consistently delivering value.</p>
      <h5>One global network</h5>
      <p>Leveraging the power of global insight, relationships, collaboration and learning to deliver exceptional service to clients wherever they do business.</p>
      <h5>Respect for the individual </h5>
      <p>Valuing diversity and unique contributions, fostering a trusting, open and inclusive environment and treating each person in a manner that reflects Accenture's values.</p>
      <h5>Best Humans</h5>
      <p>Attracting, developing and retaining the best talent for our business, challenging our people, demonstrating a "can-do" attitude and fostering a collaborative and supportive environment.</p>
      <h5>Integrity</h5>
      <p>Being ethically unyielding and honest and inspiring trust by saying what we mean, matching our behaviors to our words and taking responsibility for our actions.</p>
      <h5>Stewardship</h5>
      <p>Fulfilling our obligation of building a better, stronger and more durable company for future generations by protecting the Accenture brand, meeting our commitment to stakeholders, acting with an owner mentality, developing our people and helping improve communities and the global environment.</p>

    </div>


  );
}

export default App;
