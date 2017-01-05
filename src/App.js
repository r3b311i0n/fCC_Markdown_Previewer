import React, {Component} from 'react';
import marked from 'marked';
//noinspection JSUnresolvedVariable
import logo from './logo.svg';
import './App.css';

function mark(text) {
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
    });
    return marked(text);
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <div className="App-header">
                        <h1>Markdown Previewer</h1>
                    </div>
                </header>
                <main>
                </main>
                <footer>
                    <div className="App-footer"><small>powered by </small><img src={logo} className="App-logo" alt="logo"/></div>
                </footer>
            </div>
        );
    }
}

export default App;
