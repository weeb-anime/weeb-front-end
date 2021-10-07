import { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import George from './images/SXT39492.jpeg';
import Harvey from './images/placeholder.jpg';
import Jovincent from './images/placeholder.jpg';
import Roop from './images/placeholder.jpg';


export default class About extends Component {
  render() {
    return (
      <>
        <ListGroup className="about-background" >
          <h1 className="about-header">About the Weeb Team:</h1>
          <ul className="about-list">
            <ListGroup.Item style={{
              backgroundColor: '#C0C0C0',
              borderRadius: 10,
              margin: 5,
            }} >
              <h3>George Mead</h3>
              <img className="professional-photo" src={George} alt="George" />
              <p className="about-list-item">After dropping out of high school, I joined the Army. While serving active-duty, I obtained a bachelor's degree in business and then left the military to go to Boston College Law School. Working in Philadelphia's district attorney's office, I prosecuted felonies ranging from kidnappings and armed robberies to bar fights. I then worked for Boston College's Innocence Project representing a client who, at only eighteen, had been wrongfully incarcerated for three deaths, one of whom was his best friend. (While I've been at Code Fellows, the Project just filed his new trial motion!) Although I remain passionate about criminal justice, I realized I wanted a career that allowed me to be more creative while remaining intellectually engaging. So, I came to Code Fellows to become a software developer. Front-end design, especially making apps intuitive for casual users, attracts me the most to this career. I am experienced in HTML, CSS, and JavaScript, including React and Bootstrap.</p>
            </ListGroup.Item>
            <ListGroup.Item style={{
              backgroundColor: '#C0C0C0',
              borderRadius: 10,
              margin: 5,
            }}>
              <h3>Harvey Lucas</h3>
              <img className="professional-photo" src={Harvey} alt="Harvey" />
              <p className="about-list-item" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </ListGroup.Item>
            <ListGroup.Item style={{
              backgroundColor: '#C0C0C0',
              borderRadius: 10,
              margin: 5,
            }}>
              <h3>Jovincent Delmundo</h3>
              <img className="professional-photo" src={Jovincent} alt="Jovincent" />
              <p className="about-list-item" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </ListGroup.Item>
            <ListGroup.Item style={{
              backgroundColor: '#C0C0C0',
              borderRadius: 10,
              margin: 5,
            }}>
              <h3>Roop Hayer</h3>
              <img className="professional-photo" src={Roop} alt="Roop" />
              <p className="about-list-item" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </ListGroup.Item>
          </ul>
          </ListGroup>
      </>
    );
  }
}
