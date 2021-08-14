import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

import './styles.css';

function Home() {
  return (
    <div className='home-container'>
      <Nav />
      <div className="banner-container">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Sed efficitur pellentesque gravida.
          Praesent fermentum lobortis auctor. Fusce id laoreet leo, vitae sollicitudin libero. Sed varius lobortis ipsum, eget ultricies lectus feugiat egestas. Maecenas dignissim elit ac consectetur accumsan. Morbi scelerisque tortor sit amet nisi pharetra tempus.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
