import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Globe } from "@/components/Globe";
import { Metadata } from "next";
import Layout from "../components/Layout";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export const metadata: Metadata = {
	title: "STEAMer Academy | Home",
	description:
		"STEAMer Academy offers comprehensive education in Science, Technology, Engineering, Arts, and Mathematics.",
};

export default function Home() {
	return (
		<Layout>
			<div className="space-y-6">
				<section className="relative flex h-screen w-full flex-row items-center justify-center py-20 md:h-auto">
					<div className="relative mx-auto h-full w-full max-w-7xl px-4 md:h-[40rem]">
						<div>
							<h2 className="text-center text-xl font-bold text-black dark:text-white md:text-4xl">
								<TypewriterEffectSmooth
									words={[
										{
											text: "A",
										},
										{
											text: "World",
										},
										{
											text: "Of",
										},
										{
											text: "Possibilities",
										},
									]}
								/>
							</h2>
							<p className="mx-auto mt-2 max-w-md text-center text-base font-normal text-neutral-700 dark:text-neutral-200 md:text-lg">
								STEAMer Academy Is Here To Guide You On Your Learning Journey
							</p>
							<div className="text-center">
								<Link href="https://discord.gg/Kqpbawj9KU" passHref>
									<div className="space-y-6">
										<Button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
											<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
											<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
												Get Started
											</span>
										</Button>
									</div>
								</Link>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 w-full select-none from-transparent" />
						<div className="-bottom-20 z-10 h-[30vh] w-full md:h-full">
							<Globe />
						</div>
					</div>
				</section>
				<section className="container mx-auto px-4">
					<h2 className="mb-8 text-center text-3xl font-bold">
						<TypewriterEffectSmooth
							words={[
								{
									text: "Learn",
								},
								{
									text: "with",
								},
								{
									text: "STEAMer",
								},
							]}
						/>
					</h2>
					<p className="mb-8">
						STEAMer Academy offers comprehensive education in Science,
						Technology, Engineering, Arts, and Mathematics. Our innovative
						approach combines hands-on learning with cutting-edge technology to
						prepare students for the challenges of tomorrow.
					</p>
          <div className="content-center text-center">
					<Link
						href="/services"
						aria-label="Learn More About Steamer Academy, by visiting the services page."
						passHref
					>
						<Button variant="outline">
							Learn More About Us
						</Button>
					</Link>
          </div>
				</section>

				<section className="container mx-auto px-4">
					<h2 className="mb-8 text-3xl font-bold">New arrivals</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{[1, 2, 3].map((i) => (
							<Card key={i}>
								<CardHeader>
									<CardTitle>Course Title {i}</CardTitle>
									<CardDescription>
										Brief description of the course
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Image
										src="/placeholder.webp?height=200&width=300"
										alt={`Course ${i}`}
										width={300}
										height={200}
										className="rounded-lg"
									/>
								</CardContent>
								<CardFooter>
									<Button className="content-center">Learn more</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</section>

				<section className="container mx-auto px-4">
					<h2 className="mb-8 text-center text-3xl font-bold">
						<TypewriterEffectSmooth
							words={[
								{
									text: "Create",
								},
								{
									text: "anything",
								},
							]}
						/>
					</h2>
					<p className="mb-8">
						Join us on this exciting journey! Explore our website, contact us
						today to learn more, and let STEAMer become the launchpad for your
						child&apos;s exploration and innovation!
					</p>
					<div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
						<div className="text-center">
							<h3 className="text-4xl font-bold">150</h3>
							<p>Students enrolled</p>
						</div>
						<div className="text-center">
							<h3 className="text-4xl font-bold">Eco</h3>
							<p>Friendly approach</p>
						</div>
						<div className="text-center">
							<h3 className="text-4xl font-bold">10</h3>
							<p>Expert teachers</p>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
}
