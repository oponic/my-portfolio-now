import Top from "../components/Top"
import Card from "../components/Card"

import { A } from "@solidjs/router"

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


            <div class="pb-32 space-y-4">
                <h1 class="text-3xl">
                    Interests and Skills
                </h1>

                <p>Loads of things!</p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:text-center">
                    <div class="p-2 rounded-md text-xl outline outline-2 outline-[rgb(20,20,20)] hover:scale-105 duration-500">
                        <p class="text-[rgb(244,208,63)]">
                            Programming
                        </p>
                    </div>

                    <div class="p-2 rounded-md text-xl outline outline-2 outline-[rgb(20,20,20)] hover:scale-105 duration-500">
                        <p class="text-[rgb(175,122,197)]">
                            Data Analysis
                        </p>
                    </div>

                    <div class="p-2 rounded-md text-xl outline outline-2 outline-[rgb(20,20,20)] hover:scale-105 duration-500">
                        <p class="text-[rgb(93,173,226)]">
                            Economics
                        </p>
                    </div>

                    <div class="p-2 rounded-md text-xl outline outline-2 outline-[rgb(20,20,20)] hover:scale-105 duration-500">
                        <p>
                            Semiconductors
                        </p>
                    </div>

                    <div class="p-2 rounded-md text-xl outline outline-2 outline-[rgb(20,20,20)] hover:scale-105 duration-500">
                        <p class="text-[rgb(88,214,141)]">
                            Finance
                        </p>
                    </div>

                    <div class="p-2 rounded-md text-xl outline outline-2 outline-[rgb(20,20,20)] hover:scale-105 duration-500">
                        <p class="text-[rgb(236,112,99)]">
                            Startup Development
                        </p>
                    </div>
                </div>

                <Card rounded={true}>
                    <p class="pb-8">
                        Programming is a passion of mine, but not something I would do for a living.
                        My interests are more towards the entrepreneurial and finance side of things, but
                        programming has indeed helped me to get to where I am today.
                    </p>

                    <p>
                        Most of my skills are self-taught, assisted by online resources and a few contacts.
                        My skillset is designed to assist me with becoming a 
                        <u class="bg-gradient-to-r from-[rgb(93,173,226)] to-[rgb(195,155,211)] text-transparent bg-clip-text">different-breed of entrepreneur</u>.
                    </p>
                </Card>

                <p>
                    Want to see the things I have worked on?
                    Check out my projects 
                    <A href="https://github.com/theluqmn/theluqmn.github.io" target="_blank" class="text-[rgb(93,173,226)]">
                        here
                    </A>.
                </p>
            </div>

            <div class="pb-36 space-y-4">
                <h1 class="text-3xl">
                    Goals
                </h1>

                <p>
                    Some of my goals.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card rounded={true}>
                        <div class="text-left space-y-4">
                            <h1 class="text-[rgb(93,173,226)] text-xl">
                                Personal
                            </h1>

                            <p>
                                To love, beloved, always be the best version of myself,
                                and <b>serve god</b>. Live in the moment.
                            </p>

                            <p>
                                Get married, have kids, visit a couple countries, befriend
                                some cool and inspiring people that I stumble along the way!
                            </p>
                        </div>
                    </Card>

                    <Card rounded={true}>
                        <div class="text-left space-y-4 md:text-right">
                            <h1 class="text-[rgb(195,155,211)] text-xl">
                                Professional
                            </h1>

                            <p>
                                Locate opportunities and problems, solve them, make some money, repeat.
                            </p>
                            
                            <p>
                                Start a few companies that is listed in the Fortune 500.
                                Get on the top 10 of the world's richest people. Countless of people
                                wants to be rich, but I want to be rich and have a purpose.
                                Be resourceful so I can help out others.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>

        </div>
    )
}