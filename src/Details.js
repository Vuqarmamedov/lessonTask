import React from 'react'

class Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            userId: props.match.params.id,
            user:''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts?id="+this.state.userId)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        user: result
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
        const {error,isLoaded,user} = this.state;
        let id = '';
        let title = '';
        let body = '';
        for (var i=0;i<user.length;i++){
            id=user[i].id;
            title=user[i].title;
            body=user[i].body
        }
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    <li key={id}>
                        <h3>{title}</h3>
                        {body}
                    </li>
                </ul>
            );
        }
    }
}

export default Details