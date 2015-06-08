var AutoComplete = React.createClass({

    getAutoComplete: function(item) {

        // Get Query String
        q = $(item).val();

        if (q.length > 2){
            jQuery.ajax('http://completion.amazon.com/search/complete', {
                cache: true,
                data: {
                    client: 'amazon-search-ui',
                    mkt: 1,
                    'search-alias': 'aps',
                    q: q
                },
                error: function () {
                    console.log('error on autocompletion');
                },
                success: function (data) {
                    console.log(data);

                    this.setState({data: data[1]});
                }.bind(this),
                dataType: 'jsonp'
            });
        }
    },
    getInitialState: function() {
//        console.log('Get Initial State');
        return {data: [] };
    },
    componentDidMount: function() {
//        console.log('Component did mount');
    },
//    handleKeyPress: function(e) {
    handleKeyUp: function(e) {
        this.getAutoComplete(e.target);
    },
    render: function() {

        var autocompleteNodes = this.state.data.map(function(word, index) {

            return (
                <AmazonSuggestion word={word} index={index} />
            );
        });

        return (
            <div>
                <input onKeyUp={this.handleKeyUp} type="text" id="searchBox" className="search-field" autoFocus />

                <ul id="searchResults" className="term-list">
                    {autocompleteNodes}
                </ul>
            </div>
        );
    }
});