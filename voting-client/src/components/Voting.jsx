import React from 'react/addons';
import Vote from './Vote';
import Winner from './Winner';

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});
