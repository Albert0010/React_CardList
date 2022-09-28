import {Component} from "react";
import CardList from "../CardSide/CardList.js";
import Table from "../Table/Table.js";

const cardsDefault = [
    {name:"number0",title:0,unMountingCount:0,isClicked:false},
    {name:"number1",title:1,unMountingCount:0,isClicked:false},
    {name:"number2",title:2,unMountingCount:0,isClicked:false},
    {name:"number3",title:3,unMountingCount:0,isClicked:false},
    {name:"number4",title:4,unMountingCount:0,isClicked:false},
    {name:"number5",title:5,unMountingCount:0,isClicked:false}
]
export default class ShowHide extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cards:cardsDefault,
            isReportClicked:false
        }
    }
    handleClick = (title)=>{
        this.setState({cards:this.state.cards.map((val)=> {
                if(val.title === title){
                    val.isClicked = true;
                    return val;
                }
                return val;
            })})
    }
    handleShowClick = (e)=>{
        this.setState({cards:this.state.cards.map((val,index)=>{
                if(index === +(e.target.id)){
                    val.isClicked = false;
                    return val;
                }
                return val;
            })})
    }
    handleReportClick = ()=>{
        this.setState({isReportClicked:!this.state.isReportClicked})
    }
    handleUnmountingCount = (title)=>{
        this.setState({cards:this.state.cards.map((val)=>{
                if(val.title === title){
                    val.unMountingCount = val.unMountingCount + 1;
                    return val;
                }
                return val;
            })}
        )
    }


    render() {
        const {handleClick,handleShowClick,handleUnmountingCount,handleReportClick} = this
        const {isReportClicked,cards} = this.state;
        return(
            <div>
                <div className={"container"}>
                {cards.map((val,index)=> {
                    const {isClicked,title,unMountingCount} = val;
                    return (
                        !(isClicked)
                            ?
                            (<div key={index}  >
                                { <CardList
                                        title = {title}
                                        isClicked = {isClicked}
                                        unMountedCount = {unMountingCount}
                                        handleClick = {handleClick}
                                        handleUnmountingCount = {handleUnmountingCount}
                                    />}
                            </div>)
                            :
                            <div key={title}
                                 className={"CardCarcas"}>
                                <button id={title}
                                        onClick={handleShowClick}>Show
                                </button>
                            </div>


                    )
                })}
            </div>
                <Table isReportClicked = {isReportClicked}
                       handleReportClick = {handleReportClick}
                       cards = {cards}/>
            </div>
        )
    }
}