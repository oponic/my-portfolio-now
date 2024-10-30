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
                        I don't update websites or anything often, so I refuse to state projects I may scrap here.
                    </p>
                </Card>

                <p class="text-sm">
                    All of my publicly-available projects can be found on my 
                    <A href="https://github.com/theluqmn/repositories" target="_blank" class="text-[rgb(93,173,226)]">
                        GitHub profile
                    </A>.
                </p>
            </div>
        </div>
    )
}
