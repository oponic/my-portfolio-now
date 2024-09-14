import Card from "../components/Card";
import pfp from "../assets/pfp.jpg";

export default function Home() {
    return (
        <div className="w-full lg:w-1/2 items-center mx-auto">
            <Card rounded={true} flat={false}>
                <h1 class="text-3xl pb-4">About me</h1>

                <p>
                    A 15 year old Malaysian currently based in Kuala Lumpur, Malaysia.
                    Raised by a tech entpreneur dad and computer science mom.
                </p>
            </Card>

            <Card rounded={true} flat={false}>
                <h2 class="text-2xl pb-4">Projects</h2>
                <p>
                    I have worked on countless projects
                </p>
            </Card>
        </div>
    )
}