import React from 'react'
import { Route, Link } from 'react-router-dom'
import Details from "./Details";

class AllUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Link to='/post'>Add post</Link>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                <Link to={`/details/${item.id}`}>Title {item.id}: {item.title}</Link>
                                <br/>
                                Body: {item.body.slice(0, 100)}
                                <br/><br/>
                            </li>
                        ))}
                    </ul>
                    <Route path="/details/:id" component={Details}/>
                </div>
            )
        }
    }
}
export default AllUsers