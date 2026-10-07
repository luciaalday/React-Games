export default function TripPlanner() {
    return (
        <article>
            <h1>Trip Planner</h1>
            <h2>Packing List</h2>
            <ul>
                <li>Hiking</li>
                <ul>
                    <li>Headlamp</li>
                    <li>Case of water</li>
                    <li>Snacks*</li>
                    <li>Backpack*</li>
                    <li>Good hiking shoes</li>
                    <li>Portable phone charger</li>
                </ul>
                <li>Painting</li>
                <ul>
                    <li>Lap easel</li>
                    <li>Paint</li>
                    <li>Paint brushes</li>
                    <li>Paint water cup (sealable)</li>
                    <li>Canvas(es)</li>
                    <li>Paper towel</li>
                    <li>Paint rag</li>
                </ul>
                <li>Stargazing</li>
                <ul>
                    <li>Binoculars</li>
                    <li>Camera</li>
                    <li>Tripod</li>
                </ul>
                <li>Navajo Nation State Fair</li>
                <ul>
                    <li>Cash?</li>
                </ul>
                <li>Overnight</li>
                <ul>
                    <li>Period products</li>
                    <li>PJs</li>
                    <li>Perfume</li>
                    <li>Deodorant</li>
                    <li>Shower stuff</li>
                    <li>Socks</li>
                    <li>Fuzzy socks</li>
                </ul>
                <li>For Rachel</li>
                <ul>
                    <li>Gift*</li>
                </ul>
                <li>Clothes</li>
                <ul>
                    <li><b>Friday</b>: Wear leggings and sporty top, bring hoodie and sweats</li>
                    <li><b>Saturday</b>: Cute and comfortable</li>
                    <li><b>Sunday</b>: Something to drive home in</li>
                </ul>
                <li>Camping</li>
                <ul>
                    <li>Trash bag</li>
                    <li>Pillow</li>
                    <li>Blanket</li>
                    <li>Sleeping bag</li>
                    <li>Sleeping pad*</li>
                    <li>Tent*</li>
                    <li>Picnic blanket*</li>
                </ul>
                <li>Food</li>
                <ul>
                    <li>Water (Entire case)</li>
                    <li>Granola bars</li>
                    <li>Liquid IV</li>
                    <li>Ice breakers</li>
                    <li>Sweet snacks</li>
                </ul>
            </ul>
            <p>*<i>need to buy</i></p>
            <h2>Itinerary</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>6</th>
                        <td rowSpan={6} className="drive">Drive to Grand Canyon</td>
                    </tr>
                    <tr>
                        <th>7</th>
                    </tr>
                    <tr>
                        <th>8</th>
                    </tr>
                    <tr>
                        <th>9</th>
                        <td rowSpan={8}>Hang out Rachel/Renee</td>
                        <td>Dutch Bros</td>
                    </tr>
                    <tr>
                        <th>10</th>
                    </tr>
                    <tr>
                        <th>11</th>
                        <td rowSpan={7} className="drive">Drive home and lunch</td>
                    </tr>
                    <tr>
                        <th>12</th>
                        <td>Lunch</td>
                    </tr>
                    <tr>
                        <th>1</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td rowSpan={5}>Hike/paint</td>
                    </tr>
                    <tr>
                        <th>3</th>
                    </tr>
                    <tr>
                        <th>4</th>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td rowSpan={6}>Navajo State Fair</td>
                    </tr>
                    <tr>
                        <th>6</th>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td rowSpan={3}>Night hike</td>
                    </tr>
                    <tr>
                        <th>8</th>
                    </tr>
                    <tr>
                        <th>9</th>
                    </tr>
                    <tr>
                        <th>10</th>
                        <td className="drive">Drive to Rachel</td>
                    </tr>
                </tbody>
            </table>
        </article>
    )
}