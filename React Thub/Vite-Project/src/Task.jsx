import React from "react";
import { useState } from "react";
function Task() {
    const [Data, setData] = useState({
        name: "",
        brand: "",
        size: "",
        Price: "",
        image: null,
    })

    const Handlesubmit = (e) => {
        console.log("Details:", Data)
    }
    // const HandleChange
    return (
        <form>
            <div>
                <h2>Product Details</h2>
                <label>
                    Name : <input type="text" name="name" onChange={HandleChange} />
                </label><br /><br />
                <label>
                    Brand : <input type="text" name="Brand" onChange={HandleChange} />
                </label><br /><br />
                <label>
                    Size  :  <input type="text" name="Size" onChange={HandleChange} />
                </label>
                <br /><br />
                <label>
                    Price : <input type="number" name="Price" onChange={HandleChangenpm} />
                </label>
                <br /><br />
                <label>
                    Choose Image : <input type="file" />
                </label>
                <br /><br />
                <button onClick={Handlesubmit}>Submit</button>
                <button>Reset</button>
            </div>
        </form>
    );
}
export default Task;