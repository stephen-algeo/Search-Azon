var AutoComplete = React.createClass({

    render: function() {

        fn = this.props.suggestionWasClicked;

        var autocompleteNodes = this.props.suggestions.map(function(word, index) {

            return (
                <AmazonSuggestion word={word} index={index} suggestionWasClicked={fn} />
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