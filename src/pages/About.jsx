import Top from "../components/Top"
import Card from "../components/Card"

export default function Home() {
    return (
        <div class="w-full lg:w-5/12 items-center mx-auto space-y-4">
            <Top />

            <Card rounded={true}>
                <p class="pb-8">
                    Howdy, I am Luqman - also goes by Luq,
                    a Malaysian software engineer, business analyst, and student.
                    Currently attending high school.
                </p>

                <p>
                    The Renaissance Man? That is how I describe myself.
                </p>
            </Card>

            <div class="pb-32 grid grid-cols-2 gap-4">
                <Card rounded={true}>
                    <div class="text-left">
                        <p>
                            Currently based in
                        </p>

                        <h1 class="text-xl">
                            Kuala Lumpur
                        </h1>
                    </div>
                </Card>

                <Card rounded={true}>
                    <div class="text-right">
                        <p>
                            Living as a
                        </p>

                        <h1 class="text-xl">
                            Student
                        </h1>
                    </div>
                </Card>
            </div>


            <div class="space-y-4">
                <h1 class="text-3xl">
                    Interests
                </h1>

                <p>Loads of things!</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:text-center">
                    <div class="p-2 rounded-md text-xl outline outline-2 outline-[rgb(20,20,20)]">
                        <p>Data Analysis</p>
                    </div>

                    <div class="p-2 rounded-md text-xl outline outline-2 outline-[rgb(20,20,20)]">
                        <p>Economics</p>
                    </div>

                    <div class="p-2 rounded-md text-xl outline outline-2 outline-[rgb(20,20,20)]">
                        <p>Semiconductors</p>
                    </div>

                    <div class="p-2 rounded-md text-xl outline outline-2 outline-[rgb(20,20,20)]">
                        <p class="text-[rgb(249,231,159)]">
                            Programming
                        </p>
                    </div>

                    <div class="p-2 rounded-md text-xl outline outline-2 outline-[rgb(20,20,20)]">
                        <p>Finance</p>
                    </div>

                    <div class="p-2 rounded-md text-xl outline outline-2 outline-[rgb(20,20,20)]">
                        <p>Startup Development</p>
                    </div>
                </div>
            </div>
        </div>
    )
}