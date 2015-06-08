var AmazonSuggestion = React.createClass({
    render: function() {

        return (
            <li className="azonSuggests" key={this.props.key} keyword={this.props.word} onClick={this.props.suggestionWasClicked}>
                {this.props.word}
            </li>
        );
    }
});