import React from 'react';
import SearchBar from './SearchBar';
import OrgaoList from './OrgaoList';
import listaorgaos from '../api/listaorgaos';

class App extends React.Component {

    state = { orgaoList: [] };

    onSearchSubmit = async (term) => {
        //console.log('>>> App: ' + text);
        const response = await listaorgaos.get('',
        {
            params: {
                orgao: term
            }
        });
        console.log(this);
        console.log(">> Response:");
        console.log(response);
        console.log("<< Response:");
        this.setState( {orgaoList: response.data} );
    }

    render () {
        return (
            <div className="ui container" style={{marginTop: '15px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <OrgaoList orgaoList={this.state.orgaoList}/>
            </div>
        );
    }
}

export default App;