import React, {Component} from 'react';
import marked from 'marked';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

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

        this.state = {
            markdownString: ""
        };

        this.handleEditor = this.handleEditor.bind(this);
    }

    mark(string) {
        this.setState({markdownString: marked(string)});
    }

    handleEditor(event) {
        this.mark(event.target.value);
    }

    render() {
        return (
            <div className="App">
                <main>
                    <div>
                        <div className="Editor Floater">
                            <textarea className="Code-editor" cols="75" rows="27" spellCheck="true"
                                      autoFocus="true" onChange={this.handleEditor}/>
                        </div>
                        <div className="Editor Code-previewer"
                             dangerouslySetInnerHTML={{__html: this.state.markdownString}}>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="App-footer">
                        <small>powered by</small>
                        <img src={logo} className="App-logo" alt="logo"/></div>
                </footer>
            </div>
        );
    }
}

export default App;