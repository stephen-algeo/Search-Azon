var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var SearchApp = React.createClass({

    loadResultsFromServer: function() {

        if (this.state.searchterm) {
            $.ajax({
                url : "library/products.php",
                type: "POST",
                dataType: 'json',
                data : {searchterm:this.state.searchterm},
                cache: false,
                success: function(data, textStatus, jqXHR)
                {
                    //data - response from server
                    state = this.state;
                    state['searchresults'] = data;
                    this.setState(state);

                }.bind(this),
                error: function (jqXHR, textStatus, errorThrown)
                {
                    state = this.state;
                    state['searchresults'] = [];
                    this.setState(state);
                }
            });
        }
    },
    getInitialState: function() {
        return {
            searchresults: [],
            suggestions: [],
            searchterm: false,
            suggestionsenabled:true
        };
    },
    componentDidMount: function() {
        this.loadResultsFromServer();
//        console.clear();
        console.log(this.state);
        setInterval(this.loadResultsFromServer, this.props.pollInterval);
    },
    showSuggestions: function(e) {

        // Get Query String
        q = $(e.target).val();

        if(e.keyCode == 13){    // Enter Key

            $('#searchBox').blur();

            data = this.state;

            data["searchterm"] = q;
            data["suggestions"] = [];
            data["suggestionsenabled"] = false;

            this.setState(data);

            this.queryAmazonForTerm(e);
        }
        else {                  // other key
            if (q.length > 2){
                data = this.state;
                data["suggestionsenabled"] = true;
                this.setState(data);

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

                        if (this.state.suggestionsenabled){
                            suggestions = data[1];

                            data = this.state;
                            data["suggestions"] = suggestions;
                            this.setState(data);
                        }


                    }.bind(this),
                    dataType: 'jsonp'
                });
            }
        }
    },
    queryAmazonForTerm: function(e) {

        console.log('query amazon');

        $.ajax({
            url : "library/search.php",
            type: "POST",
            dataType: 'json',
            data : {searchterm:this.state.searchterm},
            cache: false,
            success: function(data, textStatus, jqXHR)
            {
                console.log(data);
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                console.log(textStatus);
            }
        });

    },
    loadSuggestion: function(e) {
        $('#searchBox').val($(e.target).text());

        data = this.state;
        data["searchterm"] = $(e.target).text();
        data["suggestions"] = [];

        this.setState(data);
        this.queryAmazonForTerm(e);
    },
    render: function() {
        return (
            <div id="searchapp">
                <h1 className="title">What are you looking for...</h1>

                <AutoComplete suggestions={this.state.suggestions} showSuggestions={this.showSuggestions} suggestionWasClicked={this.loadSuggestion} />

                <ResultsBox searchresults={this.state.searchresults} />
            </div>
        );
    }
});

React.render(
    <SearchApp url="library/products.php" pollInterval={1000} />,
    document.getElementById('content')
);