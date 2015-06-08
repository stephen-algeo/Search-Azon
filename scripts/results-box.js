var ResultsBox = React.createClass({
    render: function() {

        var productNodes = this.props.data.map(function(product, index) {
            return (
                <AmazonResult product={product} key={index}>
                    {product}
                </AmazonResult>
            );
        });
        return (
            <div className="commentList">
                <span>{this.props.data.length}</span>
                {productNodes}
            </div>
        );
    }
});