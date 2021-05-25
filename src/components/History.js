import React from 'react';
import './History.css';
import history1 from '../images/history1.jpg'
import history2 from '../images/history2.jpg'
import history3 from '../images/history3.jpg'
import history4 from '../images/history4.jpg'


function History() {
  return(
    <div className = "App-History">

      <div className="container-history">
        <div className="element-photos">
          <img src={history1} alt="owners" />
        </div>
        <div className="element-text">
          <p className="naration">Velit do consectetur anim culpa proident minim ipsum nisi. Eiusmod culpa occaecat sit consequat. Dolore adipisicing esse do quis pariatur Lorem id minim voluptate ut irure sunt enim proident. Sit qui ipsum ullamco amet sint et eu consequat voluptate. Nulla eiusmod laborum ullamco cupidatat Lorem deserunt magna dolore.</p>
        </div>
      </div>

      <div className="container-history">
        <div className="element-photos">
        <img src={history2} alt="" />
        </div>
        <div className="element-text">
          <p className="naration">Et anim occaecat eu dolor. Id Lorem cillum duis tempor fugiat officia non. Do deserunt ipsum dolor culpa exercitation laborum. Velit culpa anim magna deserunt labore labore mollit excepteur dolor. Exercitation in incididunt id incididunt amet Lorem reprehenderit et velit cillum consequat dolore dolore dolore. Laborum irure occaecat et et nostrud nostrud adipisicing sunt.</p>
        </div>
      </div>

      <div className="container-history">
        <div className="element-photos">
        <img src={history3} alt="" />
        </div>
        <div className="element-text">
          <p className="naration">Non aliquip pariatur enim id mollit ex. Lorem amet fugiat aliqua tempor incididunt amet ipsum consequat reprehenderit aliquip pariatur velit. Quis consectetur eiusmod ex deserunt irure.</p>
        </div>
      </div>

      <div className="container-history">
        <div className="element-photos">
        <img src={history4} alt="" />
        </div>
        <div className="element-text">
          <p className="naration">lCulpa minim duis mollit eiusmod voluptate veniam aliquip exercitation dolore dolore sit.Et labore dolor mollit elit ut laboris proident duis sit ipsum eu. Irure dolore magna occaecat adipisicing. Sint deserunt officia commodo incididunt laborum ad duis laboris. Nostrud nostrud sunt duis pariatur irure laboris duis. Ad anim fugiat ad magna in reprehenderit mollit labore quis culpa laboris consectetur esse.</p>
        </div>
      </div>        
    </div>
  );
}
export default History;