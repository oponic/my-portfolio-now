import Top from "../components/Top";
import Card from "../components/Card";

import { A } from "@solidjs/router";

import PortfolioPicture from "../assets/portfolio.png"
import F35CPicture from "../assets/f-35c.png"

export default function Projects() {
    return (
        <div class="w-full lg:w-5/12 items-center mx-auto space-y-4">
            <Top page="projects"/>

            <div class="pb-32 space-y-4">
                <Card rounded={true}>
                    <p>
                        Here are some of my projects that I think
                        deserves to be shown at.
                    </p>
                </Card>

                <p class="text-sm">
                    All of my other publicly-available projects can be found on my 
                    <A href="https://github.com/theluqmn/repositories" target="_blank" class="text-[rgb(93,173,226)]">
                        GitHub profile
                    </A>.
                </p>
            </div>

            <div class="pb-32 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card rounded={true}>
                    <div class="space-y-4">
                        <h1 class="text-xl">
                            theluqmn.github.io
                        </h1>

                        <img src={PortfolioPicture} className="w-full h-26 rounded-md outline outline-[rgb(25,25,25)]"/>

                        <p>
                            My personal portfolio website made using Solidjs,
                            and hosted with GitHub Pages.
                        </p>
                    </div>
                </Card>

                <Card rounded={true}>
                    <div class="space-y-4">
                        <h1 class="text-xl">
                            F-35C
                        </h1>

                        <img src={F35CPicture} className="w-full h-26 rounded-md outline outline-[rgb(25,25,25)]"/>

                        <p>
                        Generic, multi-role open-source Discord bot
                        designed for you to self-host and use as a template.
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    )
}