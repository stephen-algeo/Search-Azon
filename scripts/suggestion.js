var AmazonSuggestion = React.createClass({
    render: function() {

        return (
            <li key={this.props.index}>
                {this.props.word}
            </li>
        );
    }
});