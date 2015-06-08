var AmazonSuggestion = React.createClass({
    itemClicked: function(e) {

        searchterm = $(e.target).text();

        this.replaceState({
            searchterm: searchterm
        })
    },
    render: function() {

        return (
            <li className="azonSuggests" key={this.props.index} onClick={this.onClick}>
                {this.props.word}
            </li>
        );
    }
});