import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

    class UserForm extends React.Component {
      constructor() {
        super();
        this.state = {
          description: '',
          selectedFile: '',
        };
      }

      onChange = (e) => {
        console.log(e.target.files[0])

        switch (e.target.name) {
          case 'selectedFile':
            this.setState({ selectedFile: e.target.files[0] });
            break;
          default:
            this.setState({ [e.target.name]: e.target.value });
        }
      }

      onSubmit = (e) => {
        e.preventDefault();
        const { description, selectedFile } = this.state;
        let formData = new FormData();
  
        formData.append('description', description);
        formData.append('selectedFile', selectedFile);
        console.log(this.state.description , 'lets see ', this.state.selectedFile.name)
        // axios.post('http://localhost:3010/', formData)
        //   .then((result) => {
        //     // access results...
        //   });
      }

      render() {
        const { description, selectedFile } = this.state;
        return (
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.onChange}
            />
            <input
              type="file"
              name="selectedFile"
              onChange={this.onChange}
            />
            <button type="submit">Submit</button>
          </form>
        );
      }
    }

ReactDOM.render(<UserForm />, document.getElementById('root'));
