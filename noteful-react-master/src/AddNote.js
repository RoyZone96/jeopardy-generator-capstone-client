import React, { Component } from 'react'
import ApiContext from './ApiContext'
import NotefulForm from './NotefulForm'
import config from './config'
import ShowError from './ShowError';
import PropTypes from 'prop-types'

export default class AddNote extends Component {
  
  static contextType = ApiContext;
  

  state = {
    appError: null,
    formValid: false,
    errorCount: null,
    name: '',
    folderId: '',
    content: '',
    errors: {
      folderId: 'Please choose a folder',
      name: 'Please type a name for note',
      content: 'Please add content to note'
    }
}

updateErrors = () => {
  let errors = this.state.errors;
  let count = 0;

  Object.values(errors).forEach(val => {
    if (val.length > 0) {
      count ++;
    }
  });
  this.setState({ errorCount: count});
  let valid = count === 0 ? true : false;
  this.setState({ formValid: valid })
};
  
  static defualtProps = {
        history: {
            push: () => {}
        },
    }

  updateFolderId(folderId) {
    this.setState({ folderId: { value: folderId, touched: true} });
  }

  validateEntry = (name, value) => {
    let error = ''
    if (name === 'name') {
      if (value.length === 0) {
        return 'Name required.'
      }
      else if (name.length < 3) {
        return "Name must be longer than 3 characters"
      }
    }
    const { errors } = { ...this.state };
    errors[name] = error;
    this.setState({ errors });
  }

    handleChange = event => {
      const { name, value } = event.target;
      this.setState(
        { [name]: value.trim() },
      );
      this.validateEntry(name, value.trim());
      this.updateErrors();
    }
    


    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.errorCount > 0) return;

        const newNote = {
            name: event.target['note-name'].value,
            content: event.target['note-content'].value,
            folderId: event.target['note-folder-id'].value,
            modified: new Date(),
        }
        fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newNote)
        })
            .then(response => {
                if (!response.ok)
                    return response.json().then(event => Promise.reject(event))
                return response.json()
            })
            .then(note => {
                this.context.addNote(note)
                this.props.history.push(`/folder/${note.folderId}`)
            })
            .catch(error => console.log(error))
    }

    render() {
        const { errors } = this.state;
        const { folders=[] } = this.context
        if (this.state.appError) {
          return <p className="error">{this.state.appError}</p>
        }

        return (
          <section className='AddNote'>
            <h2>Create a note</h2>
            <NotefulForm onSubmit={this.handleSubmit}>
              <div className='field'>
                <label htmlFor='note-name-input'>
                  Name
                </label>
                <input type='text' id='note-name-input' name='note-name' required/>
                {errors.name.length > 0 && (
                  <ShowError message={errors.name} />)}
              </div>
              <div className='field'>
                <label htmlFor='note-content-input'>
                  Content
                </label>
                <textarea id='note-content-input' name='note-content' required/>
              </div>
              <div className='field'>
                <label htmlFor='note-folder-select'>
                  Folder
                </label>
                <select id='note-folder-select' name='note-folder-id'>
                  <option value={null}>...</option>
                  {folders.map(folder =>
                    <option key={folder.id} value={folder.id}>
                      {folder.name}
                    </option>
                  )}
                </select>
              </div>
              <div className='buttons'>
                <button type='submit'>
                  Add note
                </button>
                {this.state.errorCount !== null ? (
                  <p className="form-status">
                      Form is {this.state.formValid ? 'complete' : 'incomplete'}
                  </p>
                ) : null}
              </div>
            </NotefulForm>
          </section>
        )
      }
    }

    AddNote.propTypes = {
      name: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }