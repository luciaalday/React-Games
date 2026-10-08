export default function TripPlanner() {
    return (
        <article>
            <h1>Trip Planner</h1>
            <h2>Packing List</h2>
            <h3>To Do</h3>
            <ul>
              <li><b>Big 5</b>: headlamp, turquoise backpack</li>
              <li><b>Safeway</b>: <a href="#food">food</a></li>
              <li><b>Bank</b>: get cash</li>
            </ul>
            <h3>Hiking</h3>
            <ul>
              <li><label><input type="checkbox" />Sunscreen</label></li>
              <li><label><input type="checkbox" />Sunglasses</label></li>
              <li><label><input type="checkbox" />Hat</label></li>
              <li><label><input type="checkbox" />First aid kit</label></li>
              <li><label><input type="checkbox" />Backpack</label></li>
              <li><label><input type="checkbox" />Binoculars</label></li>
            </ul>
            <h3>Painting</h3>
            <ul>
              <li><label><input type="checkbox" />Lap easel</label></li>
              <li><label><input type="checkbox" />Pencil/eraser</label></li>
              <li><label><input type="checkbox" />Ziploc bags for dirty supplies</label></li>
              <li><label><input type="checkbox" />Paint</label></li>
              <li><label><input type="checkbox" />Paint brushes</label></li>
              <li><label><input type="checkbox" />Paint water cup (sealable)</label></li>
              <li><label><input type="checkbox" />Canvas(es)</label></li>
              <li><label><input type="checkbox" />Paper towel</label></li>
              <li><label><input type="checkbox" />Paint rag</label></li>
            </ul>
            <h3>Navajo Nation State Fair</h3>
            <ul>
              <li><label><input type="checkbox" />Cash</label></li>
            </ul>
            <h3>Overnight</h3>
            <ul>
              <li><label><input type="checkbox" />Period products</label></li>
              <li><label><input type="checkbox" />Perfume</label></li>
              <li><label><input type="checkbox" />Small towel</label></li>
              <li><label><input type="checkbox" />Flip flops</label></li>
              <li><label><input type="checkbox" />Face wash</label></li>
              <li><label><input type="checkbox" />Comb</label></li>
              <li><label><input type="checkbox" />Claw clips/Hair stick</label></li>
              <li><label><input type="checkbox" />Toothpaste</label></li>
              <li><label><input type="checkbox" />Toothbrush</label></li>
              <li><label><input type="checkbox" />Sleeping mask</label></li>
            </ul>
            <h3>Shower</h3>
            <ul>
              <li><label><input type="checkbox" />Moisturizer</label></li>
              <li><label><input type="checkbox" />Big towel</label></li>
              <li><label><input type="checkbox" />Body wash</label></li>
              <li><label><input type="checkbox" />Soap</label></li>
              <li><label><input type="checkbox" />Exfoliating net</label></li>
              <li><label><input type="checkbox" />Deodorant</label></li>
              <li><label><input type="checkbox" />Shampoo</label></li>
              <li><label><input type="checkbox" />Conditioner</label></li>
            </ul>
            <h3>Essentials</h3>
            <ul>
                <li><label><input type="checkbox" />Phone</label></li>
                <li><label><input type="checkbox" />Wallet</label></li>
                <li><label><input type="checkbox" />Keys</label></li>
                <li><label><input type="checkbox" />Pocket knife</label></li>
                <li><label><input type="checkbox" />iPad</label></li>
                <li><label><input type="checkbox" />Headlamp</label></li>
                <li><label><input type="checkbox" />Flashlight</label></li>
                <li><label><input type="checkbox" />Red flashlight</label></li>
                <li><label><input type="checkbox" />Watch</label></li>
                <li><label><input type="checkbox" />Charging cables</label></li>
                <li><label><input type="checkbox" />Portable charger</label></li>
            </ul>
            <h3>For Rachel</h3>
            <ul>
              <li><label><input type="checkbox" />Gift*</label></li>
            </ul>
            <h3>Clothes</h3>
            <ul>
              <li><label><input type="checkbox" /><b>Friday</b>: Wear leggings and sporty top, bring hoodie and sweats</label></li>
              <li><label><input type="checkbox" /><b>Saturday</b>: Cute and comfortable</label></li>
              <li><label><input type="checkbox" /><b>Sunday</b>: Something to drive home in</label></li>
              <li><label><input type="checkbox" />PJs</label></li>
              <li><label><input type="checkbox" />Socks</label></li>
              <li><label><input type="checkbox" />Fuzzy socks</label></li>
              <li><label><input type="checkbox" />Bras</label></li>
              <li><label><input type="checkbox" />Underwear</label></li>
              <li><label><input type="checkbox" />Hiking shoes</label></li>
              <li><label><input type="checkbox" />Converse</label></li>
              <li><label><input type="checkbox" />Beanie</label></li>
              <li><label><input type="checkbox" />Dirty clothes bag</label></li>
            </ul>
            <h3>Camping</h3>
            <ul>
              <li><label><input type="checkbox" />Trash bags</label></li>
              <li><label><input type="checkbox" />Pillow</label></li>
              <li><label><input type="checkbox" />Blanket</label></li>
              <li><label><input type="checkbox" />Sleeping bag</label></li>
              <li><label><input type="checkbox" />Sleeping pad</label></li>
              <li><label><input type="checkbox" />Tent</label></li>
              <li><label><input type="checkbox" />Picnic blanket</label></li>
            </ul>
            <h3 id="food">Food</h3>
            <ul>
              <li><label><input type="checkbox" />Water (Entire case)</label></li>
              <li><label><input type="checkbox" />Monsters</label></li>
              <li><label><input type="checkbox" />Chewy bars</label></li>
              <li><label><input type="checkbox" />Liquid IV</label></li>
              <li><label><input type="checkbox" />Ice breakers</label></li>
              <li><label><input type="checkbox" />Dried fruit</label></li>
              <li><label><input type="checkbox" />Sweet snacks</label></li>
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
                        <td>Lunch and save leftovers for dinner</td>
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