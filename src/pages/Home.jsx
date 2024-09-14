import Card from "../components/Card";
import { createSignal } from "solid-js";
import pfp from "../assets/pfp.jpg";

import f35cIcon from "../assets/icons/f35-c.png"

export default function Home() {
    const [show, setShow] = createSignal("interests")

    const interests = () => {
        console.log("interests")
        setShow("interests")
    }

    const theGoal = () => {
        console.log("the goal")
        setShow("the goal")
    }

    const coding = () => {
        console.log("coding")
        setShow("coding")
    }

    return (
        <div className="w-full lg:w-5/12 items-center mx-auto space-y-8">
            <Card rounded={true} flat={false}>
                <p class="pb-16 text-3xl bg-gradient-to-r from-[rgb(76,194,255)] to-[rgb(214,76,255)] text-transparent bg-clip-text">
                    A Malaysian high school student that knows the sky is not the limit, the specialist in generalising.
                </p>

                <h1 class="pb-8 text-xl">
                    Howdy, the name's Luqman - also goes by Luq. Currently based in Kuala Lumpur, Malaysia.
                    The renaissance man? Oh, it just means I do a bit of everything.
                </h1>

                <div class="flex space-x-4 font-mono-[rgb(25,25,25] pb-8 text-sm text-[rgb(214,76,255)]">
                      <button onclick={(interests)} class={`rounded-md p-2 ${show() === "interests" ? "bg-[rgb(40,40,40)] text-[rgb(76,194,255)]" : "bg-[rgb(20,20,20)]"}`}>interests</button>
                      <button onclick={(theGoal)} class={`rounded-md p-2 ${show() === "the goal" ? "bg-[rgb(40,40,40)] text-[rgb(76,194,255)]" : "bg-[rgb(20,20,20)]"}`}>the goal</button>
                      <button onclick={(coding)} class={`rounded-md p-2 ${show() === "coding" ? "bg-[rgb(40,40,40)] text-[rgb(76,194,255)]" : "bg-[rgb(20,20,20)]"}`}>coding</button>
                </div>

                {show() === "interests" && (
                    <div>
                        <p className="pb-2">
                            My interests cover a handful of fields, such as
                            economics, consumer and semiconductor technologies, startup development,
                            data analysis, computer science and geopolitics.
                        </p>

                        <p className="pb-2">
                            I love researching strategies, corporations, products and individuals that
                            gained my admiration and interest to further understand how and why they got
                            their success - in hoping to learn from their success and failures.
                        </p>

                        <p>
                            Other than these things, I also enjoy architecture, arts and music.
                            Am known as a creative person who talks excessively and is a bit of a perfectionist.
                        </p>
                    </div>
                )}

                {show() === "the goal" && (
                    <div>
                        <p className="pb-2">
                            To love, be loved, constantly be the best version of myself, and serve god.
                        </p>

                        <p>
                            Build unicorn startups, bring it public and into the Fortune 500. Have my listed
                            in the top 10. Start blue ocean companies, bring meaningful solutions to
                            problems plaguing the world.
                        </p>
                    </div>
                )}

                {show() === "coding" && (
                    <div>
                        <p className="pb-2">
                            All the cool things I think deserves a mention is under the Projects section.
                        </p>

                        <p className="pb-2">
                            My preferred languages are JavaScript, Go, and Python. I also use x86 assembly
                            for funsies, alongside C. JS framework of choice? Solidjs.
                        </p>

                        <p>
                            I started actively coding in late July of 2023, and have gotten pretty good and
                            used to most things. Would not admit that I am a pro yet, but I am optimistic
                            that I can do great things with these newfound skills.
                        </p>
                    </div>
                )}

            </Card>

            <Card rounded={true} flat={false}>
                <h1 class="text-2xl pb-2 font-mono text-[rgb(214,76,255)]">projects</h1>
                <p class="pb-8">
                    All the things that I have worked on that deserves a feature!
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card rounded={true} flat={false} inner={true}>
                        <div class="flex items-center gap-4 pb-4">
                            <img src={f35cIcon} alt="F35-C icon" class="w-10 h-10 rounded-full"/>
                            <h1 class="text-xl">F-35C</h1>
                        </div>

                        <p class="pb-4">Generic, multi-role open-source Discord bot designed for you to self-host and use as a template.</p>
                    </Card>

                    <Card rounded={true} flat={false} inner={true}>
                        <div class="flex items-center gap-4 pb-4">
                            <img src={pfp} alt="profile picture" class="w-10 h-10 rounded-full"/>
                            <h1 class="text-xl">Portfolio website</h1>
                        </div>

                        <p class="pb-4">My portfolio website, made using Solidjs. Also my first functional website.</p>
                    </Card>
                </div>
            </Card>

            <Card rounded={true} flat={false}>
                <h1 class="text-2xl pb-2 font-mono text-[rgb(214,76,255)]">contact</h1>
                <p class="pb-8">
                    This section exists only because I have little to no idea what else to put lmao.
                </p>

                <p>
                    Have some idea on what other content to add in this portfolio? Uhh give me a message!
                    I check the inboxes of my public social media accounts every now and then.
                </p>
            </Card>
        </div>
    )
}