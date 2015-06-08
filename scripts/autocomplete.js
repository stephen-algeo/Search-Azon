var AutoComplete = React.createClass({

    render: function() {

        var autocompleteNodes = this.props.suggestions.map(function(word, index) {

            return (
                <AmazonSuggestion word={word} index={index} />
            );
        });

        var classes = 'term-list';
        classes += autocompleteNodes.length == 0 ? ' hidden' : '' ;

        return (
            <div>
                <input onKeyUp={this.props.showSuggestions} type="text" id="searchBox" className="search-field" autoFocus />

                <ul id="searchResults" className={classes}>
                    {autocompleteNodes}
                </ul>
            </div>
        );
    }
});