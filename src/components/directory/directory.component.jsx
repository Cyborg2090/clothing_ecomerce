import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import  './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://media.gettyimages.com/photos/senior-africanamerican-woman-wearing-sunglasses-picture-id1128247699?k=6&m=1128247699&s=612x612&w=0&h=hNJhevjRY838ShPF0wl0lAWZ5rKNEwgWNIQHEi4oaTU=',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://media.gettyimages.com/photos/black-male-walking-in-moorland-picture-id492852721?k=6&m=492852721&s=612x612&w=0&h=uTHv0M_l_OruEogwvh7-4Ma0crsj4F6lyXfo9iuC6vY=',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://media.gettyimages.com/photos/close-up-shot-of-runners-shoes-picture-id1148822167?k=6&m=1148822167&s=612x612&w=0&h=8QIF8XmPZrVoIo8TiU31smtwVt2y2r5U3cuEegI6iLY=',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://media.gettyimages.com/photos/friends-make-the-world-a-happier-place-picture-id1137700343?k=6&m=1137700343&s=612x612&w=0&h=7zF6_1QM7exhsc4MoM6rs--QKMalT1nKxouNALkI1ts=',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://media.gettyimages.com/photos/take-a-moment-to-enjoy-the-streets-of-the-city-picture-id694450136?k=6&m=694450136&s=612x612&w=0&h=Mxhc-mey7pxHc-TAeBk8DKvrET0yj63zkDzKfUoPhmY=',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }]
        }
        

    }
    render(){
       return(
           <div className='directory-menu'>
             {
                 this.state.sections.map(({title,imageUrl,id,size}) => (
                     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                 ))
             }
           </div>
       ) 
    }
  }

export default Directory;