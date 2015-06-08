var SearchApp = React.createClass({

    loadResultsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({searchresults: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
        return [];
    },
    getInitialState: function() {
        return {
            searchresults: [],
            suggestions: [],
            searchterm: false
        };
    },
    componentDidMount: function() {
        this.loadResultsFromServer();
        setInterval(this.loadResultsFromServer, this.props.pollInterval);
    },
    showSuggestions: function(e) {
        console.log('show');

        // Get Query String
        q = $(e.target).val();

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
                    suggestions = data[1];

                    console.log(this.state);

                    this.replaceState({
                        suggestions: suggestions
                    })

//                    this.props.onUpdate('suggestions', suggestions);

                    console.log(this.state);

                }.bind(this),
                dataType: 'jsonp'
            });
        }
    },
    clickSuggestion: function(e) {
        console.log('click');
    },
    render: function() {
        return (
            <div>
                <h1 className="title">What are you looking for..?</h1>
                <AutoComplete suggestions={this.state.suggestions} showSuggestions={this.showSuggestions} />
            </div>
        );
    }
});

React.render(
    <SearchApp url="library/products.php" pollInterval={1000} />,
    document.getElementById('content')
);