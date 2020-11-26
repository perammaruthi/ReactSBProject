import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from "@material-ui/core/Button";

class LogoutPage extends React.Component {
    state = {
        navigate: false
    };
    logout = () => {
        localStorage.removeItem("token");
        localStorage.setItem("login", false);
        this.setState({navigate: true})
        localStorage.clear()
    }
    render() {
        const {navigate} = this.state
        if (navigate) {
            return <Redirect to="/" push="true" />;
        }
        return <Button onClick={this.logout}>Log Out;</Button>;
    }
    
}
 export default LogoutPage;