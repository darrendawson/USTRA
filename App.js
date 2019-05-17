import React, { Component } from 'react';
import './App.css';

// Ustra
import Ustra from './Ustra';


// =============================================================================
// Ustra
// =============================================================================

// DATA DECLARATION ------------------------------------------------------------
// - Declaring what data is gonna look like for Ustra


// path tags are unique IDs for values in your App.state
var PT_search_parameters = 'search_parameters';
var PT_about_streamers = "about_streamers";
var PT_followers = "followers";
var PT_max_followers = "max_followers";
var PT_min_followers = "min_followers";
var PT_views = "views";
var PT_min_views = "min_views";
var PT_max_views = "max_views";
var PT_about_game = "about_game";
var PT_similar_games = "similar_games";


// This is what App.state will look like
let data_skeleton = {
  [PT_search_parameters]: {
    [PT_about_streamers]: {
      [PT_followers]: {
        [PT_max_followers]: 0,
        [PT_min_followers]: 0
      },
      [PT_views]: {
        [PT_min_views]: 0,
        [PT_max_views]: 0
      }
    },

    [PT_about_game]: {
      [PT_similar_games]: []
    }

  }

}

// ininitialize USTRA
var ustra = new Ustra(data_skeleton)


// =============================================================================
// <App/>
// =============================================================================

class App extends Component {

  constructor() {
    super();
    this.state = {
      truth: ustra.get_truth()
    };
  }

  // Update --------------------------------------------------------------------
  /*
    Functions for updating information
      -> pass updates to ustra, use results to update app.state
  */

  update = (value, path_tag) => {
    let new_state = ustra.update(value, path_tag);
    this.setState({
      truth: new_state
    });
  }


  // Render --------------------------------------------------------------------

  render() {

    let truth = this.state.truth;

    return (
      <div className="App">

        {/* If Component wants to update searchParameters, it'll call this.props.update(newParameters, this.props.searchParametersTag)*/}
        <Component
          searchParameters={truth[PT_search_parameters]}
          searchParametersTag={PT_search_parameters}
          update={this.update}
        />
      </div>
    );
  }
}

export default App;
