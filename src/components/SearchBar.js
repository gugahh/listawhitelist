import React from 'react';

class SearchBar extends React.Component {

    state = { term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term); // Metodo de Calback
    }

    onFocus = () => {
        /*
        if (this.state.term === '') {
            this.setState({term: ''});
        }
        */
    }

    render() {
        return (
            <div className="ui">
                <h2 style={{color: 'navy', paddingTop: '20px'}}>Busca na Whitelist do Integra Judicial</h2>
                <div className="ui segment" style={{backgroundColor: 'lightblue'}}>
                    <form className="ui form" onSubmit={this.onFormSubmit}>

                        <div className="ui fluid search" style={{
                                    display: 'grid',
                                    alignItems: 'center', 
                                    placeItems: 'center center'}}>
                            <div className="ui icon input" 
                                style={{width: '90%'}}>
                                <input className="prompt" 
                                    type="text" 
                                    onFocus={this.onFocus}
                                    onChange={(e) => this.setState({term: e.target.value})}
                                    value={this.state.term}
                                    placeholder="Digite parte do nome do órgão" />
                                    <i className="search icon" onClick={this.onFormSubmit} />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }

}

export default SearchBar;