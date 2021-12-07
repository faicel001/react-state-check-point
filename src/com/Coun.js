import { Component } from 'react';
class Coun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            j: 0,
            c: 0,
        }
    }
    componentDidMount() {
        this.nj = setInterval(() => {
            this.setState(prevState => {
                return {
                    j: prevState.j + 1,
                };
            });

        }, 1000);
    }
    componentWillUnmount() { clearInterval(this.nj) }
    render() {
        return (
            <div>
                <h2>{this.state.j}</h2>
            </div>
        );
    }
}
export default Coun;