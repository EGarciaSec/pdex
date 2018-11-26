import React, { Component } from 'react';


class PokeTable extends Component {
    state = { 
        //Results obtained from JSON Fethc
        idResult: null,
        nameResult: null,
        typeResult: [],
        abilityResult: [],
        moveResult: [],
        picResult: null ,
        //Parameters for the Search
        searchType: "pokemon",
        searchParam: "0",
        urlForPokeSearch: "https://pokeapi.co/api/v2/pokemon/1/",
        //CSS Stylings
        colorStyle: {
            color: 'red'
        },
        borderStyle: {
            borderColor: 'white'
        }
    }

/*
//
//      Functions
//
*/

    //Function to UpperCase first Letter
    firstUpper(stringD) {
        return(
            stringD.charAt(0).toUpperCase() + stringD.slice(1)
        );
    }

    //Fetch Function
    pokeSearch() {
        fetch(this.state.urlForPokeSearch)
            //Return as JSON
            .then(d => d.json())
            .then(d => {
                this.setState({
                    idResult: "#" + d.id,
                    nameResult: d.name.charAt(0).toUpperCase() + d.name.slice(1),
                    moveResult: d.moves,
                    picResult: d.sprites.front_default,
                    abilityResult: d.abilities,
                    typeResult: d.types
                })
            })
            //Set Style Colors depending on Result Type
            .then(d => {
                var typeColor = null;
                //Check for Primary Type
                if(this.state.typeResult.length === 1) {
                    typeColor = this.state.typeResult[0].type.name;
                } else {
                    if (this.state.typeResult[1].type.name === 'fire') {
                        typeColor = this.state.typeResult[1].type.name;
                    } else if (this.state.typeResult[1].type.name === 'grass') {
                        typeColor = this.state.typeResult[1].type.name;
                    } else if (this.state.typeResult[1].type.name === 'electric') {
                        typeColor = this.state.typeResult[1].type.name;
                    } else if (this.state.typeResult[1].type.name === 'water') {
                        typeColor = this.state.typeResult[1].type.name;
                    } else if (this.state.typeResult[1].type.name === 'ice') {
                        typeColor = this.state.typeResult[1].type.name;
                    } else {
                        typeColor = this.state.typeResult[0].type.name;
                    }
                }
                //Color Sets
                if (typeColor === 'fire' || typeColor === 'dragon') {
                    this.setState({
                        borderStyle: {borderColor: 'red'}
                    })
                } else if(typeColor === 'water' || typeColor === 'ice') {
                    this.setState({
                        borderStyle: {borderColor: 'blue'}
                    })
                } else if(typeColor === 'electric') {
                    this.setState({
                        borderStyle: {borderColor: 'yellow'}
                    })
                } else if(typeColor === 'grass') {
                    this.setState({
                        borderStyle: {borderColor: 'green'}
                    })
                } else if(typeColor === 'poison') {
                    this.setState({
                        borderStyle: {borderColor: 'purple'}
                    })
                } else if(typeColor === 'ground' || typeColor === 'rock') {
                    this.setState({
                        borderStyle: {borderColor: 'brown'}
                    })
                }else {
                    this.setState({
                        borderStyle: {borderColor: 'white'}
                    })
                }
            })
    }

/*
//
//      Main
//
*/

    render() { 
        return (
            <React.Fragment>
                {/*Headers*/}
                <h1 style={this.state.colorStyle}>Pokedex</h1>
                <h2>{this.state.idResult} {this.state.nameResult}</h2>
                <img src={this.state.picResult}></img>
                <br></br>
                {/* Set API Url From Input */}
                <input style={this.state.borderStyle} defaultValue="Pokemon or ID..." onClick={ e =>
                    e.target.value = ''
                } onChange={ e => {
                    this.setState({
                        searchParam: (e.target.value).toLowerCase(),
                        urlForPokeSearch: "https://pokeapi.co/api/v2/pokemon/" + (e.target.value).toLowerCase() + "/"
                    })}
                }></input>
                {/* SearchButton */}
                <button style={this.state.borderStyle} onClick={ () => 
                    this.pokeSearch()
                }>Search</button>
                <br></br>
                <br></br>
                <div className="tableDiv">

                    <table id="abilityTable">
                        <tr>
                            <td style={this.state.borderStyle}>
                                <h3>Abilities:</h3>
                            </td>
                        </tr>
                        {Object.keys(this.state.abilityResult).map((abil) => {
                            return(
                                <tr>
                                    <td style={this.state.borderStyle}>{this.firstUpper(this.state.abilityResult[abil].ability.name)}</td>
                                </tr>
                            );
                        })}
                    </table>

                    <table id="typeTable">
                        <tr>
                            <td style={this.state.borderStyle}>
                                <h3>Types:</h3>
                            </td>
                        </tr>
                        {Object.keys(this.state.typeResult).map((typing) => {
                            return(
                                <tr>
                                    <td style={this.state.borderStyle}>{this.firstUpper(this.state.typeResult[typing].type.name)}</td>
                                </tr>
                            );
                        })}
                    </table>

                </div>
                <br></br>
                <h1>Moves:</h1>

                <table id="moveTable">
                    <tr>
                        <td style={this.state.borderStyle}> Move Name </td>
                        <td style={this.state.borderStyle}> Learned At </td>
                        <td style={this.state.borderStyle}> Learned By </td>
                    </tr>
                    {Object.keys(this.state.moveResult).map((move) => {
                        return(
                            <tr>
                                <td style={this.state.borderStyle}>{this.firstUpper(this.state.moveResult[move].move.name)}</td>
                                <td style={this.state.borderStyle}>{this.state.moveResult[move].version_group_details[this.state.moveResult[move].version_group_details.length -1].level_learned_at}</td>
                                <td style={this.state.borderStyle}>{this.firstUpper(this.state.moveResult[move].version_group_details[this.state.moveResult[move].version_group_details.length -1].move_learn_method.name)}</td>
                            </tr>
                        );
                    })}
                </table>

            </React.Fragment>
        );
    }
}
 
export default PokeTable;