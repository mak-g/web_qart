import React from "react";
function AddPublisher() {
    return(
        <div className="Content">
            <div className="Apply">
                <br/><br/>
                <h2>Apply Publisher</h2><br/><br/>
                <form action="">
                    <label>Brand logo- <input type="file" /></label><br/><br/>
                    <label >Platform name- <input type="text" placeholder="Enter platform name..."/></label><br/><br/>
                    <label>Price- <input type="text" placeholder="Enter column price..."/></label><br/><br/>
                    <label> Status/Condition- <input type="text" placeholder="Enter conditions..."/></label><br/><br/>
                    <label>Description- <textarea placeholder="Enter description here..."></textarea></label>
                </form>
                <br/><br/><br/><br/>
            </div>
        </div>
    )
}
export default AddPublisher