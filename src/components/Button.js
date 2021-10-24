import { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
    renderButton({ language }) {
        const text = language === 'english' ? 'Submit' : 'Gonder';
        return (
            <button className="ui button primary">
                {text}
            </button>
        );
    }

    render() {
        return (
            <LanguageContext.Consumer>
                { this.renderButton }
            </LanguageContext.Consumer>
        );
    }
}

export default Button;