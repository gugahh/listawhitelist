import './OrgaoList.css';
import React from 'react';

const OrgaoList = props => {

    console.log(">> Observando o retorno");
    console.log(props.orgaoList);
    console.log("<< Observando o retorno");

    /*
    var orgaoListLocal = 
    [{
        id: 15,
        nome: 'Uma Promotoria',
        instancia: '1a instância'
    }];
    */

   var result;

   if (props.orgaoList.length === 0) {
        result = (
            <tr>
                <td colSpan="4" className="center aligned">
                    Nenhum resultado encontrado
                </td>
            </tr>
        );
   } else {
        result = props.orgaoList.map( ({id, nome, nomeAbreviado, instancia, municipio} ) => 
            <tr>
                <td className="one wide">{id}</td>
                <td className="four wide" title={nomeAbreviado}>{nome}</td>
                <td className="two wide">{municipio}</td>
                <td className="one wide">{instancia}</td>
            </tr>
        );
   };

    return (
        <table className="ui celled striped table">
            <thead>
                <tr>
                    <th colSpan="4">Órgãos</th>
                </tr>
                <tr>
                    <th>Id:</th>
                    <th>Nome</th>
                    <th>Município:</th>
                    <th>Instância:</th>
                </tr>

            </thead>
            <tbody>
                {result}
            </tbody>
        </table>
    );
};

export default OrgaoList;