var SearchApp = React.createClass({

    loadResultsFromServer: function() {
//        $.ajax({
//            url: this.props.url,
//            dataType: 'json',
//            cache: false,
//            success: function(data) {
//                this.setState({data: data});
//            }.bind(this),
//            error: function(xhr, status, err) {
//                console.error(this.props.url, status, err.toString());
//            }.bind(this)
//        });
        return [];
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadResultsFromServer();
        setInterval(this.loadResultsFromServer, this.props.pollInterval);
    },
    render: function() {

        return (
            <div>
                <h1 className="title">AutoComplete Me</h1>
                <AutoComplete data={this.state.data} />
            </div>
        );
    }
});

React.render(
    <SearchApp url="library/products.php" pollInterval={1000} />,
    document.getElementById('content')
);