import React from 'react';
import PageBlock from './PageBlock';


function Home() {
  return (
    <div className="App-Home pattern1">
      <div className="flex-Home">
        <div className="flex-pageblock">
          <PageBlock
            title={'Hair'}
            semantic={'woman with curly hair in front of α trumpet vine fence'}
            description={'In Amadeus we see each face as a piece of art ready to be presented to the world'}
          />
        </div>

        <div className="flex-pageblock">
          <PageBlock
            title={'Products'}
            semantic={'Products we use'}
            description={'We think...green'}
          />
        </div>

        <div className="flex-pageblock">
          <PageBlock
            title={'Cafe'}
            semantic={'Music and coffee'}
            description={'For our friends and guests that want to feel a taste of 80’s in their coffee'}
          />
        </div>

        <div className="flex-pageblock">
          <PageBlock
            title={'History'}
            semantic={'our history'}
            description={'A vision becomes reality'}
          />  
        </div>

        <div className="flex-pageblock">
          <PageBlock
            title={'Book'}
            semantic={'book online'}
            description={'Pick up the date, time and the hairdresser of your choice'}
          />
        </div>

        <div className="flex-pageblock">
          <PageBlock
            title={'Contact'}
            semantic={'contact details'}
            description={'Ask us, anything you want'}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;