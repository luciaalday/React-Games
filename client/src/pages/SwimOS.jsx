import Calendar from "../components/Calendar";

export default function SwimOS() {
    return (
        <article className="ios">
            <h1>Swim OS</h1>
            <h2>Swim Workout App Mockup</h2>
            <section>
                <div className="phone screen">
                    <h1>Welcome</h1>
                    <Calendar />
                </div>
                <div>
                    <h2>Dashboard</h2>
                </div>
            </section>
        </article>
    )
}