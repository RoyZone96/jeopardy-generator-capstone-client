import React, { Component } from 'react'
import ApiContext from './ApiContext'
import NotefulForm from './NotefulForm'
import ShowError from './ShowError'
import config from './config'
import PropTypes from 'prop-types'; 


export default class AddFolder extends Component {
    static contextType = ApiContext;

    static defualtProps = {
        history: {
            push: () => { }
        },
    }


    state = {
        appError: null,
        formValid: false,
        errorCount: null,
        name: '',
        errors: {
            name: 'You must enter a folder title'
        }
    }

    updateErrors = () => {
        let errors = this.state.errors;
        let count = 0;

        Object.values(errors).forEach(val => {
            if (val.length > 0) {
                count++;
            }
        });
        this.setState({ errorCount: count });
        let valid = count === 0 ? true : false;
        this.setState({ formValid: valid })
        };

        validateEntry = (name, value) => {
            let err = '';

            if (name === 'name') {
                if (value.trim().length === 0) {
                    return 'Folder name is required.'
                } else if (name.length < 3) {
                    return "Name must be at least 3 characters long";
                }
            }
            const { errors } = { ...this.state };
            errors[name] = err;
            this.setState({ errors });
        }

        handleChange = event => {
            const { name, value } = event.target;
            this.setState({ [name]: value.trim() });
            this.validateEntry(name, value);
            this.updateErrorCount();
        }

        setFolderName = ({ target }) => {
            const { value: name } = target
            this.setState({
                folder: name
            })
        }



        handleSubmit = (event) => {
            event.preventDefault();
            console.log(event.target)
            const folder = {
                name: this.state.folder
            }
            fetch(`${config.API_ENDPOINT}/folders`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(folder)
            })
                .then(response => {
                    if (!response.ok)
                        return response.json().then(event => Promise.reject(event))
                    return response.json()
                })
                .then(folder => {
                    this.context.addFolder(folder)
                    this.props.history.push(`/folder/${folder.id}`)
                })
                .catch(error => console.log(error));
        };

        render() {
            const { errors }= this.state 
            
            return (
                <section className='AddFolder'>
                    <h2>Create a new Folder</h2>
                    <NotefulForm onSubmit={this.handleSubmit}>
                        <div className='field'>
                            <label htmlFor='folder-name-input'>
                                Folder Name
                        </label>
                            <input type="text" id='folder-name-input' name='folder-name' onChange={this.setFolderName} required/>
                            {errors.name.length > 0 && (
                                <ShowError message={errors.name} />)}
                            <div className='button'>
                                <button type='submit'>
                                    Add Folder
                            </button>
                                {this.state.errorCount !== null ? (
                                    <p className="form-status">
                                        Form is {this.state.formValid ? 'complete' : 'incomplete'}
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </NotefulForm>
                </section>
            );
        }
    }



    AddFolder.propTypes = {
        name: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }   