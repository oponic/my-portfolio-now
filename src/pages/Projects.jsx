import Top from "../components/Top";
import Card from "../components/Card";

import { A } from "@solidjs/router";

import PortfolioPicture from "../assets/portfolio.png"

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

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card rounded={true}>
                    <div class="space-y-4">
                        <h1 class="text-xl">
                            theluqmn.github.io
                        </h1>

                        <img src={PortfolioPicture} class="w-full h-26 rounded-md"/>

                        <p>
                            My personal portfolio website made using Solidjs,
                            and hosted with GitHub Pages.
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    )
}