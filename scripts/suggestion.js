var AmazonSuggestion = React.createClass({
    render: function() {

        return (
            <li className="azonSuggests" key={this.props.index} keyword={this.props.word} onClick={this.props.suggestionWasClicked}>
                {this.props.word}
            </li>
        );
    }
});