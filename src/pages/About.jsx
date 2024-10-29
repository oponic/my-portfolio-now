import Top from "../components/Top"
import Card from "../components/Card"

import { A } from "@solidjs/router"

export default function Home() {
    return (
        <div class="w-full lg:w-5/12 items-center mx-auto space-y-4">
            <Top page="about"/>

            <Card rounded={true}>
                <p class="pb-8">
                    ello there, im jack - also goes by opo,
                    a Filipino software engineer, and student.
                    Currently attending high school.
                </p>

                <p>
                    im an insane wrongful man, thats how I see myself. but im me
                </p>
            </Card>

            <div class="pb-32 grid grid-cols-2 gap-4">
                <Card rounded={true}>
                    <div class="text-left">
                        <p>
                            Currently based in
                        </p>

                        <h1 class="text-xl">
                            Bukidnon
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
                            AI
                        </p>
                    </div>

                    <div class="p-2 rounded-md text-xl outline outline-2 outline-[rgb(20,20,20)] hover:scale-105 duration-500">
                        <p class="text-[rgb(93,173,226)]">
                            Economics
                        </p>
                    </div>

                    <div class="p-2 rounded-md text-xl outline outline-2 outline-[rgb(20,20,20)] hover:scale-105 duration-500">
                        <p>
                            Gaming
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
                        Most of my skills are self-taught, assisted by online resources, and trial and error.
                        My skillset is designed to assist me with becoming a 
                        <u class="bg-gradient-to-r from-[rgb(93,173,226)] to-[rgb(195,155,211)] text-transparent bg-clip-text">important person</u>.
                    </p>
                </Card>

                <p>
                    Want to see the things I have worked on?
                    Check out my projects 
                    <A href="https://github.com/oponic?tab=repositories" target="_blank" class="text-[rgb(93,173,226)]">
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
                                To not have a care in life, to live without fear 
                            </p>

                            <p>
                                Get married, have kids, visit a couple countries, commit a couple of felonies, and befriend
                                some cool people that share similar goals to me.
                            </p>
                        </div>
                    </Card>

                    <Card rounded={true}>
                        <div class="text-left space-y-4 md:text-right">
                            <h1 class="text-[rgb(195,155,211)] text-xl">
                                Professional
                            </h1>

                            <p>
                                Have the ability to afford Apple products.
                            </p>
                            
                            <p>
                                Big company. Big rich. Important person.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>

        </div>
    )
}
