import React from "react"
import Store from "./Store"

function StoreList({ stores }) {

    const storeRows = stores.map(store => <Store key={store.id} store={store}/>)

    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {storeRows}
            </tbody>
        
        </table>
    );
}

export default StoreList;