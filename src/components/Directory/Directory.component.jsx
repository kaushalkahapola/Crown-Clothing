import React from "react";
import { MenuItem } from "../MenuItem/MenuItem.component";
import "./Directory.styles.scss";
import hats from '../../assets/images/hats.png'
import jackets from '../../assets/images/jackets.png'
import sneakers from '../../assets/images/sneakers.png'
import womens from '../../assets/images/womens.png'
import men from '../../assets/images/men.png'

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections: [
                {
                  title: 'Hats',
                  imageUrl: hats,
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'Jackets',
                  imageUrl: jackets,
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'Sneakers',
                  imageUrl: sneakers,
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'Womens',
                  imageUrl: womens,
                  size: 'large',
                  id: 4,
                  linkUrl: ''
                },
                {
                  title: 'Mens',
                  imageUrl: men,
                  size: 'large',
                  id: 5,
                  linkUrl: ''
                }
              ]
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionprops}) => (
                        <MenuItem key={id} {...otherSectionprops} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;