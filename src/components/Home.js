/* eslint-disable no-template-curly-in-string */
import React from 'react';
import PageBlock from './PageBlock';


function Home() {
  return (
    <div className="App-Home pattern1">

      <PageBlock
        title={'Hair'}
        semantic={'woman with curly hair in front of α trumpet vine fence'}
        description={'In Amadeus we see each face as a piece of art ready to be presented to the world'}
      />

      <PageBlock
        title={'Products'}
        semantic={'products we use'}
        description={'cccccccccccccccccccccccc'}
      />

      <PageBlock
        title={'Cafe'}
        semantic={'Music and coffee'}
        description={'For our friends and guests that want to feel a taste of 80’s in their coffee'}
      />

      <PageBlock
        title={'History'}
        semantic={'our history'}
        description={'eeeeeeeeeee'}
      />

      <PageBlock
        title={'Book'}
        semantic={'book online'}
        description={'ddddddddddddddd'}
      />

      <PageBlock
        title={'Contact'}
        semantic={'fffffffffff'}
        description={'fffffffffff'}
      />

    </div>
  );
}
export default Home;