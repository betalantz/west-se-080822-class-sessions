import React, { useState } from "react";
import Header from './Header'
import HogList from './HogList'

import hogsData from "../porkers_data";

function App() {
	const [hogs, setHogs] = useState(hogsData)
	return (
		<div className="App">
			<Header />
			<HogList hogs={hogs} />
		</div>
	);
}

export default App;
