var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
            console.log();
    },

	decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },


    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.increment}, ' plus ' + this.state.counter),
            React.createElement('button', {onClick: this.decrement}, ' minus ' )
        );
    }
});



var element = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
)

ReactDOM.render(element, document.getElementById('app'));
