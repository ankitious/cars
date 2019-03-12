import React from 'react';
import {DropdownContainer, Option, OptionsContainer, Select} from "./style";
import sortUp from '../../../assets/images/sort-up.png';
import sortDown from '../../../assets/images/sort-down.png';
class Dropdown extends React.Component {

    constructor() {
        super();
        this.state = { isOpen: false, selectedItem : '' };
        this.onToggle = this.onToggle.bind(this);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleDocumentClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleDocumentClick, false);
    }

    onToggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleDocumentClick(e) {
        if (!this.node.contains(e.target)) {
            this.setState({isOpen: false});
        }
    }

    onSelect(e) {
        this.setState({ selectedItem : e.target.textContent});
        this.props.selection(e.target.textContent);
        this.onToggle();
    }

    render() {
          const { name, list, placeholder } = this.props;
          const { isOpen, selectedItem } = this.state;
          return (
                <div ref={node => this.node = node} style={{margin: "10px 0px"}}>
                        <div>{name}</div>
                        <DropdownContainer>
                          <Select
                              onClick={this.onToggle}
                          >
                              {!!selectedItem ? selectedItem : placeholder}
                              { isOpen ?
                                  <img src={sortUp}
                                       style={{opacity: '0.5'}}
                                       alt={"sort up icon"}
                                  />:
                                  <img src={sortDown}
                                       style={{opacity: '0.5'}}
                                       alt={"sort down icon"}
                                  />
                              }
                          </Select>
                            {   isOpen &&
                                <OptionsContainer>
                                   {
                                       list.map((item,index) =>
                                           <Option key={index}
                                               onClick={this.onSelect}
                                           >
                                               {item}
                                           </Option>)
                                   }
                                </OptionsContainer>
                            }
                        </DropdownContainer>
                </div>
          )
      }
};
export default Dropdown;
