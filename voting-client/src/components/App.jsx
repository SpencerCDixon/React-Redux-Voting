import React from 'react';
import {RouteHandler} from 'react-router';
import {List, Map} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later':4});

export default React.createClass({
  render: function() {
    // job is to designate the place in this component where the router will
    // plug in the handler component of whatever the current route happens to be
    return <RouteHandler pair={pair}
                         tally={tally} />
  }
});
