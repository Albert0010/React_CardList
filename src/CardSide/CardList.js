import {Component} from "react";

export default class CardList extends Component{
    constructor(props) {
        super(props);
        const {isClicked,unMountingCount} = this.props;
        this.state = {
            isClicked:isClicked,
            unMountingCount:unMountingCount
        }
    }
    componentWillUnmount() {
        this.props.handleUnmountingCount(this.props.title);
    }

    handleClick = ()=>{
        this.setState({isClicked:!this.state.isClicked})
        this.props.handleClick(this.props.title);
    }



    render() {
        const {handleClick,state:{isClicked},props:{title}} = this;
        return(
            !isClicked ?<div className={"card"}>
                <button className={"number"}>{title}</button>
                <button className={"btn"} onClick={handleClick}>Hide</button>
            </div>:null
        )
    }
}