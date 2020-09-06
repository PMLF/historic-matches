import React from 'react';
import './App.scss';
import MatchThumbnail from './Components/MatchThumbnail/MatchThumbnail';
import SidebarArrow from './Components/SidebarArrow/SidebarArrow';
import MatchHeader from './Components/MatchHeader/MatchHeader';
import SquadList from './Components/SquadList/SquadList';
import ResultDisplay from './Components/ResultDisplay/ResultDisplay';

function App() {
  return (
    <div className="App">

      <div className="sidebar">
        <SidebarArrow />
        <div className="sidebar-main hideScrollBar">
          <MatchThumbnail/>
          <MatchThumbnail/>
          <MatchThumbnail/>
          <MatchThumbnail/>
          <MatchThumbnail/>
        </div>
        <SidebarArrow />
      </div>
      <div className="main">
        <MatchHeader />
        <SquadList />
        <ResultDisplay />
        <SquadList />

      </div>
    </div>
  );
}

export default App;
