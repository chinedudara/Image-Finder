import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import ZoomIn from '@material-ui/icons/ZoomIn'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

class ImageResults extends Component {
state = {
    open: false,
    currentImage: ''
}

handleDialogOpen = (e, imageUrl) => {
    this.setState({
        open: true,
        currentImage: imageUrl
    })
}

handleDialogClose = () => {
    this.setState({
        open: false,
        currentImage: ''
    })
}

  render() {
    const { images } = this.props;
    let imageGrid;
    if (images.length > 0) {
        imageGrid = (
          <GridList cols={3} cellHeight={180}>
            <GridListTile key="Subheader" cols={3} style={{height: 'auto'}}>
                <ListSubheader component="div">Search Results</ListSubheader>
            </GridListTile>
            {images.map(image => (
                <GridListTile key={image.id}>
                    <img src={image.largeImageURL} alt={image.tags} />
                    <GridListTileBar
                        title={image.tags}
                        subtitle={
                            <span>
                                <strong>Downloaded {image.downloads} times</strong>
                            </span>}
                        actionIcon={
                            <IconButton onClick={(e) => this.handleDialogOpen(e, image.largeImageURL)}>
                                <ZoomIn color="Primary" fontSize="large" />
                            </IconButton>
                        }/>
                </GridListTile>
            ))}
          </GridList>)
    } else {
        imageGrid = null;
    }
    return (
        <div>
            {imageGrid}
            <Dialog 
                open={this.state.open}
                onClose={this.handleDialogClose}
                fullWidth
            >
                <DialogContent>
                    <img src={this.state.currentImage} alt="" style={{width: '100%', height: 'auto'}} />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={this.handleDialogClose} autoFocus>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
  }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults;