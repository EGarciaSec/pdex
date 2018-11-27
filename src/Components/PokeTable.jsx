import React, { Component } from 'react';


class PokeTable extends Component {
    state = { 
        currentView: "PokeInfo",
        //Results obtained from JSON Fethc
        idResult: null,
        nameResult: null,
        specResult: null,
        typeResult: [],
        abilityResult: [],
        moveResult: [],
        picResult: null ,
        prevPic: null,
        prevID: null,
        prevName: null,
        //Parameters for the Search
        searchType: "pokemon",
        searchParam: "0",
        urlForPokeSearch: "https://pokeapi.co/api/v2/pokemon/1/",
        urlForMoveSearch: "https://pokeapi.co/api/v2/move/1/",
        //CSS Stylings
        colorStyle: {
            color: 'red'
        },
        borderStyle: {
            borderColor: 'white'
        },
        //Move States
        moveNameResult: null,
        idMv: null,
        moveEffectResult: null,
        movePowerResult: 0,
        moveAccuracyResult: 0,
        moveEffectChanceResult: 0,
        moveTypeResult: null,
        //Ability States
        abilityIdResult: 0,
        abilityNameResult: null,
        abilityEffectResult: null,
        //Type States
        typeIdResult: 0,
        typeNameResult: null,
        doubleDamageFrom: [],
        doubleDamageTo: [],
        halfDamageFrom: [],
        halfDamageTo: [],
        noDamageFrom: [],
        noDamageTo: [],
        //Evolution States
        speciesChain: null,
        evolutionChain: []
    }

/*
//
//      Functions
//
*/

    //Go Back to PokeInfo
    resetView() {
        this.setState({
            currentView: "PokeInfo",
            picResult: this.state.prevPic,
            idResult: this.state.prevID,
            nameResult: this.state.prevName
        })
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
                borderStyle: {borderColor: 'red'},
                colorStyle: {color: 'red'}
            })
        } else if(typeColor === 'water' || typeColor === 'ice') {
            this.setState({
                borderStyle: {borderColor: 'blue'},
                colorStyle: {color: 'blue'}
            })
        } else if(typeColor === 'electric') {
            this.setState({
                borderStyle: {borderColor: 'yellow'},
                colorStyle: {color: 'yellow'}
            })
        } else if(typeColor === 'grass') {
            this.setState({
                borderStyle: {borderColor: 'green'},
                colorStyle: {color: 'green'}
            })
        } else if(typeColor === 'poison') {
            this.setState({
                borderStyle: {borderColor: 'purple'},
                colorStyle: {color: 'purple'}
            })
        } else if(typeColor === 'ground' || typeColor === 'rock') {
            this.setState({
                borderStyle: {borderColor: 'brown'},
                colorStyle: {color: 'brown'}
            })
        }else {
            this.setState({
                borderStyle: {borderColor: 'white'},
                colorStyle: {color: 'gray'}
            })
        }
    }

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
                    prevID: "#" + d.id,
                    nameResult: d.name.charAt(0).toUpperCase() + d.name.slice(1),
                    prevName: d.name.charAt(0).toUpperCase() + d.name.slice(1),
                    specResult: "https://pokeapi.co/api/v2/pokemon-species/" + d.name + "/",
                    moveResult: d.moves,
                    picResult: d.sprites.front_default,
                    prevPic: d.sprites.front_default,
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
                        borderStyle: {borderColor: 'red'},
                        colorStyle: {color: 'red'}
                    })
                } else if(typeColor === 'water' || typeColor === 'ice') {
                    this.setState({
                        borderStyle: {borderColor: 'blue'},
                        colorStyle: {color: 'blue'}
                    })
                } else if(typeColor === 'electric') {
                    this.setState({
                        borderStyle: {borderColor: 'yellow'},
                        colorStyle: {color: 'yellow'}
                    })
                } else if(typeColor === 'grass') {
                    this.setState({
                        borderStyle: {borderColor: 'green'},
                        colorStyle: {color: 'green'}
                    })
                } else if(typeColor === 'poison') {
                    this.setState({
                        borderStyle: {borderColor: 'purple'},
                        colorStyle: {color: 'purple'}
                    })
                } else if(typeColor === 'ground' || typeColor === 'rock') {
                    this.setState({
                        borderStyle: {borderColor: 'brown'},
                        colorStyle: {color: 'brown'}
                    })
                }else {
                    this.setState({
                        borderStyle: {borderColor: 'white'},
                        colorStyle: {color: 'gray'}
                    })
                }
            })
            /*
            .then(d => {
                this.speciesSearch()
            })*/
    }

    speciesSearch() {
        fetch(this.state.specResult)
            .then(s => s.json())
            .then(s => {
                this.setState({
                    speciesChain: s.evolution_chain.url
                })
            })
            .then(s => {
                fetch(this.state.speciesChain)
                .then(c => c.json())
                .then(c => {
                    this.setState({
                        evolutionChain: c.chain
                    })
                })
            })
    }


    //Query API based on Move
    moveSearch(moveParam) {
        fetch(moveParam)
            //Return as JSON
            .then(m => m.json())
            .then(m => {
                this.setState({
                    idMv: "#" + m.id,
                    moveNameResult: m.name.charAt(0).toUpperCase() + m.name.slice(1),
                    moveEffectResult: m.effect_entries[m.effect_entries.length -1].short_effect,
                    movePowerResult: m.power,
                    moveAccuracyResult: m.accuracy,
                    moveEffectChanceResult: m.effect_chance,
                    moveTypeResult: m.type.name.charAt(0).toUpperCase() + m.type.name.slice(1),
                    currentView: "MoveInfo"
                });
            })
            .then(m => {
                var typeColor = null;
                //Check for Primary Type
                typeColor = this.state.moveTypeResult.toLowerCase();
                //Color Sets
                if (typeColor === 'fire' || typeColor === 'dragon') {
                    this.setState({
                        borderStyle: {borderColor: 'red'},
                        colorStyle: {color: 'red'}
                    })
                } else if(typeColor === 'water' || typeColor === 'ice') {
                    this.setState({
                        borderStyle: {borderColor: 'blue'},
                        colorStyle: {color: 'blue'}
                    })
                } else if(typeColor === 'electric') {
                    this.setState({
                        borderStyle: {borderColor: 'yellow'},
                        colorStyle: {color: 'yellow'}
                    })
                } else if(typeColor === 'grass') {
                    this.setState({
                        borderStyle: {borderColor: 'green'},
                        colorStyle: {color: 'green'}
                    })
                } else if(typeColor === 'poison') {
                    this.setState({
                        borderStyle: {borderColor: 'purple'},
                        colorStyle: {color: 'purple'}
                    })
                } else if(typeColor === 'ground' || typeColor === 'rock') {
                    this.setState({
                        borderStyle: {borderColor: 'brown'},
                        colorStyle: {color: 'brown'}
                    })
                }else {
                    this.setState({
                        borderStyle: {borderColor: 'white'},
                        colorStyle: {color: 'gray'}
                    })
                }
            })
    }

    //Query API based on Ability
    abilitySearch(abilParam){
        fetch(abilParam)
            //Return as JSON
            .then(b => b.json())
            .then(b => {
                this.setState({
                    abilityIdResult: "#" + b.id,
                    abilityNameResult: b.name.charAt(0).toUpperCase() + b.name.slice(1),
                    abilityEffectResult: b.effect_entries[b.effect_entries.length -1].short_effect,
                    currentView: "AbilityInfo"
                });
            })        
    }

    //Query API based on Type
    typeSearch(typeParam) {
        fetch(typeParam)
        //Return JSON
        .then( t => t.json())
        .then( t => {
            if (this.state.picResult != null) {
                this.setState({
                    typeIdResult: "#" + t.id,
                    typeNameResult: t.name.charAt(0).toUpperCase() + t.name.slice(1),
                    doubleDamageFrom: t.damage_relations.double_damage_from,
                    doubleDamageTo: t.damage_relations.double_damage_to,
                    halfDamageFrom: t.damage_relations.half_damage_from,
                    halfDamageTo: t.damage_relations.half_damage_to,
                    noDamageFrom: t.damage_relations.no_damage_from,
                    noDamageTo: t.damage_relations.no_damage_to,
                    prevPic: this.state.picResult,
                    picResult: null,
                    prevID: this.state.idResult,
                    prevName: this.state.nameResult,
                    nameResult: null,
                    idResult: null,
                    currentView: "TypeInfo"
                });
            } else {
                this.setState({
                    typeIdResult: "#" + t.id,
                    typeNameResult: t.name.charAt(0).toUpperCase() + t.name.slice(1),
                    doubleDamageFrom: t.damage_relations.double_damage_from,
                    doubleDamageTo: t.damage_relations.double_damage_to,
                    halfDamageFrom: t.damage_relations.half_damage_from,
                    halfDamageTo: t.damage_relations.half_damage_to,
                    noDamageFrom: t.damage_relations.no_damage_from,
                    noDamageTo: t.damage_relations.no_damage_to,
                    currentView: "TypeInfo"
                });
            }
        })
        .then(t => {
            var typeColor = null;
            //Check for Primary Type
            typeColor = this.state.typeNameResult.toLowerCase();
            //Color Sets
            if (typeColor === 'fire' || typeColor === 'dragon') {
                this.setState({
                    borderStyle: {borderColor: 'red'},
                    colorStyle: {color: 'red'}
                })
            } else if(typeColor === 'water' || typeColor === 'ice') {
                this.setState({
                    borderStyle: {borderColor: 'blue'},
                    colorStyle: {color: 'blue'}
                })
            } else if(typeColor === 'electric') {
                this.setState({
                    borderStyle: {borderColor: 'yellow'},
                    colorStyle: {color: 'yellow'}
                })
            } else if(typeColor === 'grass') {
                this.setState({
                    borderStyle: {borderColor: 'green'},
                    colorStyle: {color: 'green'}
                })
            } else if(typeColor === 'poison') {
                this.setState({
                    borderStyle: {borderColor: 'purple'},
                    colorStyle: {color: 'purple'}
                })
            } else if(typeColor === 'ground' || typeColor === 'rock') {
                this.setState({
                    borderStyle: {borderColor: 'brown'},
                    colorStyle: {color: 'brown'}
                })
            }else {
                this.setState({
                    borderStyle: {borderColor: 'white'},
                    colorStyle: {color: 'gray'}
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

        {(this.state.currentView === "PokeInfo") &&
        <div id="PokeINFO">
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

                <table>
                    <tr>
                    <td style={this.state.borderStyle}>
                    <table id="abilityTable">
                        <tr>
                            <td style={this.state.borderStyle}>
                                <h3>Abilities:</h3>
                            </td>
                        </tr>
                        {Object.keys(this.state.abilityResult).map((abil) => {
                            return(
                                <tr>
                                    <td style={this.state.borderStyle}>
                                        <a style={this.state.colorStyle} onClick={ ab => {
                                            this.abilitySearch("https://pokeapi.co/api/v2/ability/"+this.state.abilityResult[abil].ability.name+"/");
                                        }}>{this.firstUpper(this.state.abilityResult[abil].ability.name)}</a>
                                    </td>
                                </tr>
                            );
                        })}
                    </table>
                    </td>
                    <td style={this.state.borderStyle}>
                    <table id="typeTable">
                        <tr>
                            <td style={this.state.borderStyle}>
                                <h3>Types:</h3>
                            </td>
                        </tr>
                        {Object.keys(this.state.typeResult).map((typing) => {
                            return(
                                <tr>
                                    <td style={this.state.borderStyle}>
                                        <a style={this.state.colorStyle} onClick={ t => {
                                            this.typeSearch("https://pokeapi.co/api/v2/type/" + this.state.typeResult[typing].type.name + "/");
                                        }}>{this.firstUpper(this.state.typeResult[typing].type.name)}</a>
                                    </td>
                                </tr>
                            );
                        })}
                    </table>
                    </td>
                    </tr>
                </table>

                </div>
                <h2>Moves:</h2>

                <table id="moveTable">
                    <tr>
                        <td style={this.state.borderStyle}> Move Name </td>
                        <td style={this.state.borderStyle}> Learned At </td>
                        <td style={this.state.borderStyle}> Learned By </td>
                    </tr>
                    {Object.keys(this.state.moveResult).map((move) => {
                        return(
                            <tr>
                                <td style={this.state.borderStyle}>
                                <a style={this.state.colorStyle} onClick={ mv => {
                                    this.moveSearch("https://pokeapi.co/api/v2/move/"+this.state.moveResult[move].move.name+"/");
                                }}>{this.firstUpper(this.state.moveResult[move].move.name)}</a>
                                </td>
                                <td style={this.state.borderStyle}>{this.state.moveResult[move].version_group_details[this.state.moveResult[move].version_group_details.length -1].level_learned_at}</td>
                                <td style={this.state.borderStyle}>{this.firstUpper(this.state.moveResult[move].version_group_details[this.state.moveResult[move].version_group_details.length -1].move_learn_method.name)}</td>
                            </tr>
                        );
                    })}
                </table>
        </div>
        }

        {(this.state.currentView === "MoveInfo") &&
            <div id="MoveInfo">
                <table>
                    <tr>
                        <th style={this.state.borderStyle} colSpan="2">{this.state.moveNameResult}</th>
                    </tr>
                    <tr>
                        <td style={this.state.borderStyle}>ID</td>
                        <td style={this.state.borderStyle}>{this.state.idMv}</td>
                    </tr>
                    <tr>
                        <td style={this.state.borderStyle}>Type</td>
                        <td style={this.state.borderStyle}>{this.state.moveTypeResult}</td>
                    </tr>
                    <tr>
                        <td style={this.state.borderStyle}>Effect</td>
                        <td style={this.state.borderStyle}>{this.state.moveEffectResult}</td>
                    </tr>
                    <tr>
                        <td style={this.state.borderStyle}>Power</td>
                        <td style={this.state.borderStyle}>{this.state.movePowerResult}</td>
                    </tr>
                    <tr>
                        <td style={this.state.borderStyle}>Accuracy</td>
                        <td style={this.state.borderStyle}>{this.state.moveAccuracyResult}</td>
                    </tr>
                    <tr>
                        <td style={this.state.borderStyle}>Effect Chance</td>
                        <td style={this.state.borderStyle}>{this.state.moveEffectChanceResult}</td>
                    </tr>
                </table>
                <br></br>
                <button style={this.state.borderStyle} onClick={ r => {
                    this.resetView()
                }}>Reset</button>
            </div>
        }

        {(this.state.currentView === "AbilityInfo") && 
            <div id="AbilityInfo">
                <table>
                    <tr>
                        <th style={this.state.borderStyle} colSpan="2">{this.state.abilityNameResult}</th>
                    </tr>
                    <tr>
                        <td style={this.state.borderStyle}>ID</td>
                        <td style={this.state.borderStyle}>{this.state.abilityIdResult}</td>
                    </tr>
                    <tr>
                        <td style={this.state.borderStyle}>Effect</td>
                        <td style={this.state.borderStyle}>{this.state.abilityEffectResult}</td>
                    </tr>
                </table>
                <br></br>
                <button style={this.state.borderStyle} onClick={ r => {
                    this.resetView()
                }}>Reset</button>
            </div>
        }

        {(this.state.currentView === "TypeInfo") && 
            <div id="TypeInfo">
                <table>
                    <tr>
                        <th style={this.state.borderStyle} colSpan="2">{this.state.typeNameResult}</th>
                    </tr>
                    <tr>
                        <td style={this.state.borderStyle}>ID</td>
                        <td style={this.state.borderStyle}>{this.state.typeIdResult}</td>
                    </tr>
                    <tr>
                        <th rowSpan={this.state.doubleDamageFrom.length + 1} style={this.state.borderStyle}>Double Damage From</th>
                    </tr>
                        {Object.keys(this.state.doubleDamageFrom).map((typ) => {
                            return(
                                <tr><td style={this.state.borderStyle}>
                                <a onClick={ t => {
                                    this.typeSearch("https://pokeapi.co/api/v2/type/" + this.state.doubleDamageFrom[typ].name + "/");
                                }}>{this.firstUpper(this.state.doubleDamageFrom[typ].name)}</a>
                                </td></tr>
                            );
                        })}
                    <tr>
                        <th rowSpan={this.state.doubleDamageTo.length + 1} style={this.state.borderStyle}>Double Damage To</th>
                    </tr>
                        {Object.keys(this.state.doubleDamageTo).map((typ) => {
                            return(
                                <tr><td style={this.state.borderStyle}>
                                <a onClick={ t => {
                                    this.typeSearch("https://pokeapi.co/api/v2/type/" + this.state.doubleDamageTo[typ].name + "/");
                                }}>{this.firstUpper(this.state.doubleDamageTo[typ].name)}</a>
                                </td></tr>
                            );
                        })}
                    <tr>
                        <th rowSpan={this.state.halfDamageFrom.length + 1} style={this.state.borderStyle}>Half Damage From</th>
                    </tr>
                        {Object.keys(this.state.halfDamageFrom).map((typ) => {
                            return(
                                <tr><td style={this.state.borderStyle}>
                                <a onClick={ t => {
                                    this.typeSearch("https://pokeapi.co/api/v2/type/" + this.state.halfDamageFrom[typ].name + "/");
                                }}>{this.firstUpper(this.state.halfDamageFrom[typ].name)}</a>
                                </td></tr>
                            );
                        })}
                    <tr>
                        <th rowSpan={this.state.halfDamageTo.length + 1} style={this.state.borderStyle}>Half Damage To</th>
                    </tr>
                        {Object.keys(this.state.halfDamageTo).map((typ) => {
                            return(
                                <tr><td style={this.state.borderStyle}>
                                <a onClick={ t => {
                                    this.typeSearch("https://pokeapi.co/api/v2/type/" + this.state.halfDamageTo[typ].name + "/");
                                }}>{this.firstUpper(this.state.halfDamageTo[typ].name)}</a>
                                </td></tr>
                            );
                        })}
                    <tr>
                        <th rowSpan={this.state.noDamageFrom.length + 1} style={this.state.borderStyle}>No Damage From</th>
                    </tr>
                        {Object.keys(this.state.noDamageFrom).map((typ) => {
                            return(
                                <tr><td style={this.state.borderStyle}>
                                <a onClick={ t => {
                                    this.typeSearch("https://pokeapi.co/api/v2/type/" + this.state.noDamageFrom[typ].name + "/");
                                }}>{this.firstUpper(this.state.noDamageFrom[typ].name)}</a>
                                </td></tr>
                            );
                        })}
                    <tr>
                        <th rowSpan={this.state.noDamageTo.length + 1} style={this.state.borderStyle}>No Damage To</th>
                    </tr>
                        {Object.keys(this.state.noDamageTo).map((typ) => {
                            return(
                                <tr><td style={this.state.borderStyle}>
                                <a onClick={ t => {
                                    this.typeSearch("https://pokeapi.co/api/v2/type/" + this.state.noDamageTo[typ].name + "/");
                                }}>{this.firstUpper(this.state.noDamageTo[typ].name)}</a>
                                </td></tr>
                            );
                        })}
                </table>
                <br></br>
                <button style={this.state.borderStyle} onClick={ r => {
                    this.resetView()
                }}>Reset</button>
            </div>
        }
            </React.Fragment>
        );
    }
}
 
export default PokeTable;
