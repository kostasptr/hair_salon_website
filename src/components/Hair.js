import React from 'react';
import './Hair.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import test1 from '../images/test1.jpg';
import test2 from '../images/test2.jpg';
import test3 from '../images/test3.jpg';
import test4 from '../images/test4.jpeg';
import test5 from '../images/test5.jpeg';
import test6 from '../images/test6.jpeg';
import test7 from '../images/test7.jpeg';
import test8 from '../images/test8.jpeg';
import test9a from '../images/test9a.jpeg';
import test9b from '../images/test9b.jpeg';
import test9c from '../images/test9c.jpg';
import test9d from '../images/test9d.jpeg';
import test9e from '../images/test9e.jpg';
import test9f from '../images/test9f.jpg';
import test9g from '../images/test9g.jpg';
import test9h from '../images/test9h.jpeg';
import test9i from '../images/test9i.jpg';
import test9j from '../images/test9j.jpg';
import test9k from '../images/test9k.jpg';
import test10 from '../images/test10.jpg';
import test11 from '../images/test11.jpg';
import test12 from '../images/test12.jpg';

function Hair() {


  return (
    <div className="App-Hair pattern2">

      <div className="clearfix"></div>

      <div className="haircut-div">
        <p className="haircut-div-title">
          Haircuts
          </p>
        In Amadeus we see each face as a piece of art ready to be presented to the world. And what a beautiful art piece would be without a great frame? Hairstyle can transform a face and enhance its uniqueness. For this reason, we offer a wide variety of haircut options adjusted to any face shape and character. From classic haircuts to big fancy 80’s hair we are here to embrace your style.
      </div>

      <div className="flex-hair">
        <div className="responsive">
          <a target="_blank" href={test1} rel="noreferrer">
            <img src={test1} alt="man among flowers" className="image-zoom" />
          </a>
        </div>

        <div className="responsive">
          <a target="_blank" href={test2} rel="noreferrer">
            <img src={test2} alt="" className="image-zoom sat" />
          </a>
        </div>

        <div className="responsive">
          <a target="_blank" href={test3} rel="noreferrer">
            <img src={test3} alt="" className="image-zoom" />
          </a>
        </div>

        <div className="responsive">
          <a target="_blank" href={test4} rel="noreferrer">
            <img src={test4} alt="" className="image-zoom" />
          </a>
        </div>
      </div>


      <div className="clearfix"></div>


      <div className="styling-div">
        <p className="styling-div-title">Hair styling</p>
            We can fulfill any wish! Your imagination is our limit. From smooth and flat hair styles to edgy and eccentric haircuts we can help you find the perfect look for you. We love getting creative!
      </div>

      <div className="flex-styl">
        <div className="responsive">
          <a target="_blank" href={test5} rel="noreferrer">
            <img src={test5} alt="" className="image-zoom" />
          </a>
        </div>

        <div className="responsive">
          <a target="_blank" href={test6} rel="noreferrer">
            <img src={test6} alt="" className="image-zoom" />
          </a>
        </div>

        <div className="responsive">
          <a target="_blank" href={test7} rel="noreferrer">
            <img src={test7} alt="" className="image-zoom" />
          </a>
        </div>

        <div className="responsive">
          <a target="_blank" href={test8} rel="noreferrer">
            <img src={test8} alt="" className="image-zoom" />
          </a>
        </div>
      </div>


      <div className="clearfix"></div>


      <div className="coloring-div">
        <p className="coloring-div-title">Hair coloring</p>
      In our salon you will discover the perfect hair color based on your skin tone and face features. However what is more authentic to you is always the right choice.
      </div>


      <div className="slider">

        <AliceCarousel autoPlay autoPlayInterval="2000" autoPlayStrategy="default" disableButtonsControls="false" infinite="default" >
          <div className="slider-img-container">
            <a href={test9a} target="blank">
              <img src={test9a} className="slider-img" alt="woman in purple hair" />
            </a>
            <div className="overlay">Photo by on</div>
          </div>

          <div className="slider-img-container">
            <a href={test9b} target="blank">
              <img src={test9b} className="slider-img" alt="woman with orange-red hair in front of blue car" />
            </a>
            <div className="overlay">Photo by George Gvasalia on Unsplash</div>
          </div>

          <div className="slider-img-container">
            <a href={test9c} target="blank">
              <img src={test9c} className="slider-img " alt="woman with orange in pink hair in blue background" />
            </a>
            <div className="overlay">Photo by Victoria Borodinova from Pexels</div>
          </div>

          <div className="slider-img-container">
            <a href={test9d} target="blank">
              <img src={test9d} className="slider-img " alt="woman with pink hair in grey background" />
            </a>
            <div className="overlay">Photo by Anastasiya Lobanovskaya from Pexels</div>
          </div>

          <div className="slider-img-container">
            <a href={test9e} target="blank">
              <img src={test9e} className="slider-img " alt="woman with half blonde half orange-red hair" />
            </a>
            <div className="overlay">Photo by Chloe from Pexels</div>
          </div>

          <div className="slider-img-container">
            <a href={test9f} target="blank">
              <img src={test9f} className="slider-img " alt="woman with curly blonde hair" />
            </a>
            <div className="overlay">photo by izusek from istockphoto</div>
          </div>

          <div className="slider-img-container">
            <a href={test9g} target="blank">
              <img src={test9g} className="slider-img " alt="teenagers in pink background" />
            </a>
            <div className="overlay">Photo by Anna Shvets from Pexels</div>
          </div>

          <div className="slider-img-container">
            <a href={test9h} target="blank">
              <img src={test9h} className="slider-img " alt="woman with brown afro hair in white background" />
            </a>
            <div className="overlay">photo by Audrey Fretz from Unsplash</div>
          </div>

          <div className="slider-img-container">
            <a href={test9i} target="blank">
              <img src={test9i} className="slider-img " alt="woman with dark-blue short hair" />
            </a>
            <div className="overlay">Photo by Rachel Claire from Pexels</div>
          </div>

          <div className="slider-img-container">
            <a href={test9j} target="blank">
              <img src={test9j} className="slider-img " alt="black man with blond short hair" />
            </a>
            <div className="overlay">Photo by cottonbro from Pexels</div>
          </div>

          <div className="slider-img-container">
            <a href={test9k} target="blank">
              <img src={test9k} className="slider-img " alt="woman with blonde long hair" />
            </a>
            <div className="overlay">Photo by Ali Pazani from Pexels</div>
          </div>
          <div className="alice-carousel__prev-btn"></div>
        </AliceCarousel>

      </div>


      <div className="clearfix"></div>


      <div className="treatment-div">
        <p className="treatment-div-title">Hair treatment</p>
        Transcend time and space! We invite everyone to experience a customized royal treatment that will restore and deeply condition any hair type.
      </div>

      <div className="responsive-treat">
        <a href="Products" className="no-decoration">
          <div className="product_image">
            <img src={test10} alt="hair detox" className="image-zoom" />
          </div>
          <div className="container-treatment-textbox">
            <p className="bold-title">Hair detox</p>
            <p>An essential process that deeply cleanses the scalp and rebalances the pH of the skin in order to create a better environment for healthy hair. </p>
          </div>
        </a>
      </div>

      <div className="clearfix"></div>

      <div className="responsive-treat">
        <a href="Products" className="no-decoration">
          <div className="product_image">
            <img src={test11} alt="hair glossing" className="image-zoom" />
          </div>
          <div className="container-treatment-textbox">
            <p className="bold-title">Hair glossing</p>
            <p>The ultimate solution for frizzy or dull hair or for hair that just need their shine back! This treatment will improve the condition of your hair, will enhance it’s texture and boost the natural shine and color. The result. Super smoothy and shiny hair.</p>
          </div>
        </a>
      </div>

      <div className="clearfix"></div>

      <div className="responsive-treat3">
        <a href="Products" className="no-decoration">
          <div className="product_image">
            <img src={test12} alt="caviar hair" className="image-zoom" />
          </div>
          <div className="container-treatment-textbox">
            <p className="bold-title">Caviar hair</p>
            <p>Cillum in nulla sunt exercitation tempor nisi proident ex.Et veniam laborum sit laborum amet aliqua mollit laborum aute reprehenderit ipsum excepteur aliqua veniam.</p>
          </div>
        </a>
      </div>

      <div className="clearfix"></div>

    </div>
  );
}
export default Hair;