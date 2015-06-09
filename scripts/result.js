var AmazonResult = React.createClass({
    render: function() {

        return (
            <div className="amazon-result">

                <img src={this.props.product.image} />
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