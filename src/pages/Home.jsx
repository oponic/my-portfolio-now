import Card from "../components/Card";
import pfp from "../assets/pfp.jpg";

export default function Home() {
    const [show, setShow] = createSignal("interests")

    return (
        <div className="w-full lg:w-1/2 items-center mx-auto space-y-4">
            {/* About card */}
            <Card rounded={true} flat={false}>
                <h1 class="text-3xl pb-4 font-mono">about</h1>

                <p class="pb-12">
                    A 15 year old student with big ambitions (execution is still a work-in-progress).
                    Born and raised in Malaysia, by a tech entpreneur dad and computer science mom.
                </p>

                <div class="flex space-x-4 font-mono-[rgb(25,25,25)]">
                </div>
            </Card>

            <Card rounded={true} flat={false}>
                <h1 class="text-2xl pb-4 font-mono">projects</h1>
            </Card>
        </div>
    )
}