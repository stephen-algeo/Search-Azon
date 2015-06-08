var ResultsBox = React.createClass({
    render: function() {

        var productNodes = this.props.searchresults.map(function(product, index) {
            return (
                <AmazonResult product={product} key={index}>

                </AmazonResult>
            );
        });
        return (
            <div id="searchresults" className="commentList">
                <span>{this.props.searchresults.length}</span>
                {productNodes}
            </div>
        );
    }
});