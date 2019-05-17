import React, { Component } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import ImageResults from '../image-results/ImageResults'

export default class Search extends Component {
    state = {
        searchText: '',
        selectCount: 5,
        url: 'https://pixabay.com/api/',
        key: '12506000-3ac3a309a6ae0e9b62d8e4e01',
        images: []
    }

    onTextChange = (e) => {
        const value = e.target.value
        this.setState({[e.target.name]: value}, () => {
            if (!value) {
                this.setState({images: []})
            } else {
                const {searchText, selectCount, url, key} = this.state;
                axios.get(`${url}?key=${key}&q=${searchText}&image_type=photo&per_page=${selectCount}`)
                .then(res => this.setState({images: res.data.hits}))
            }
        })
    }

    onAmountChange = (e) => this.setState({selectCount: e.target.value})

  render() {
    //   console.log(this.state.images)
    return (
      <div 
        style={
            {
                padding: '20px'
            }
        }
      >
        <FormControl fullWidth>
            <TextField 
                name="searchText"
                value={this.state.searchText}
                onChange={this.onTextChange}
                autoFocus 
                label="Search for images"
                margin="normal"
            />
        </FormControl>
        <br/>
        <FormControl style={{width: '200px'}}>
            <InputLabel>Result Count</InputLabel>
            <br/>
            <Select
                name="selectCount"
                value={this.state.selectCount}
                onChange={this.onAmountChange}
            >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={50}>50</MenuItem>
            </Select>
        </FormControl>
      <ImageResults images={this.state.images} />
      </div>
    )
  }
}
