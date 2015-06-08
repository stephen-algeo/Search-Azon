var AmazonResult = React.createClass({
    render: function() {

        return (
            <div className="amazon-result">

                <div>
                    {this.props.product.title}
                </div>
                <div>
                {this.props.product.salesrank}
                </div>
            </div>
        );
    }
});