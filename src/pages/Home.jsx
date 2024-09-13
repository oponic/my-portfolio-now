import Card from "../components/Card";

export default function Home() {
    return (
        <div class="container m-auto items-center">
            <div class="py-20">
                <h1 class="text-9xl text-blue-900">the renaissance man</h1>
                <h2 class="text-4xl text-blue-950">Interests and skills in a wide range of fields</h2>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <Card rounded= {true} flat= {false}>
                    <h1 class="text-3xl">About</h1>
                    <p>Hello there</p>
                </Card>

                <Card rounded= {true} flat= {false}>
                    <h1 class="text-3xl">About</h1>
                    <p>Hello there</p>
                </Card>
            </div>
        </div>
    )
}