import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header>
     
      <div className='buy'>
     <a className='buynow' href='Buy now'>Buy now</a>
      </div>
     </header>

     <section className='first'>
    
      <div className='navbarimg'>
     <img src='https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2018/02/logo.svg'></img>
     </div>
     <div className='content'>
     <h5 className='h5'>ACTION, ADVENTURE, FANTASY</h5>
        <h1 className='h1'>Up in smoke:The remake</h1>
        <p className='p2'>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
       <h3 >PG</h3>
      </div>
      <div className='navbar' >
      <a className='linknavbar' href="navbar">Home</a>
      <a className='linknavbar' href="navbar">Whats'on</a>
      <a className='linknavbar' href="navbar">News</a>
      <a className='linknavbar'href="navbar">Shortcodes</a>
      <a className='linknavbar' href="navbar">Contact us</a>
    
      </div>
     
     
     </section>
     <section className='second'>
      <div className='news'>
        <p className='newsp'>NEW IN</p>
      </div>

      <div className='threeimg'>
        <img src="https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/11/thumb1-270x340.jpg"></img>
       <img src="https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/07/movie-7-270x340.jpg"></img>
       <img src="https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/11/thumb2-270x340.jpg"></img>
      </div>
     </section>

     <section className='sixth'>
      <p>Need help? Contact our support team on</p>
      <h2>0330 123 4567</h2>
     </section>
     <section className='last'>
      <div className='footer'>
        <div className='get'>
          <h5>Get IN TOUCH</h5>
          <a href="#">FAQs</a>
          <a href="#">Give us feedback</a>
          <a href="#">Contact us</a>
        </div>
        <div className='get'>
          <h5>ABOUT MOVIE STAR</h5>
          <a href="#">FAQs</a>
          <a href="#">Give us feedback</a>
          <a href="#">Contact us</a>
        </div>
        <div className='get'>
          <h5>LEGAL STUFF</h5>
          <a href="#">FAQs</a>
          <a href="#">Give us feedback</a>
          <a href="#">Contact us</a>
        </div>
        <div className='gets'>
          <h5>CONNECT WITH US</h5>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">Google+</a>
        </div>

      </div>
      <div className='copywrite'>
        <p>2020 © Specto.  All rights reserved.</p>
      </div>
     </section>
     
  


  </> 
  );
}
export default App;