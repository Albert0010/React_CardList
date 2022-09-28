import {Component} from "react";

export default class Table extends Component{
    render() {
        const {handleReportClick,isReportClicked,cards} = this.props
        return (
            <>
                {isReportClicked
                    ?
                    <div>
                        <button onClick={handleReportClick}>Back</button>
                        <table>
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>unMountingCount</th>
                            </tr>
                            </thead>
                            {cards.map((val)=>{
                                const {name,unMountingCount,title} = val;
                                return (
                                    <tbody key={title}>
                                    <tr>
                                        <td>{name}</td>
                                        <td>{unMountingCount}</td>
                                    </tr>
                                    </tbody>
                                )
                            })}
                        </table>
                    </div>
                    :
                    <button onClick={handleReportClick}>Report</button>}
            </>

        )
    }

}