import { Component } from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

class App extends Component {
    render() {
        return (
            <LanguageStore>
                <div className="ui container">
                    <LanguageSelector />
                    <UserCreate />
                </div>
            </LanguageStore>
        );
    }
}

export default App;