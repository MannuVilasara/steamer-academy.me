import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import ReviewCard from "./ReviewCard";
import Layout from "@/components/Layout";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export const metadata: Metadata = {
  title: "STEAMer Academy | English Club",
  description: "Join our English Club and improve your language skills",
};

export default function EnglishClubPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <main>
          <h1 className="mb-8 text-center text-3xl font-bold">
            <TypewriterEffect
              words={[
                {
                  text: "Our",
                },
                {
                  text: "services",
                },
              ]}
            />
          </h1>
          <h2 className="mb-12 text-center text-4xl font-bold">
            <TypewriterEffect
              words={[
                {
                  text: "English",
                },
                {
                  text: "Club",
                },
              ]}
            />
          </h2>

          <section className="mb-12">
            <h3 className="mb-4 text-center text-xl font-semibold">
              Introduction
            </h3>
            <h4 className="mb-2 text-lg font-medium">
              Calling all Word Wizards and Grammar Gurus!
            </h4>
            <p>
              Are you passionate about the English language? Do you dream of
              expressing yourself with confidence in English? Then look no
              further! Our English Club at STEAMer Academy is the perfect place
              for you.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="mb-4 text-xl font-semibold">Management</h3>
            <h4 className="mb-2 text-lg font-medium">
              Keeping it Fun and Functional: How We Manage the English Club
            </h4>
            <p>
              The English Club at STEAMer Academy is managed by a dedicated team
              of language enthusiasts and educators. We create an environment
              that fosters learning, creativity, and enjoyment. Leadership &
              Mentorship, Managing Events, Feedback & Improvement, and Resource
              Management are our key focus areas.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="mb-4 text-xl font-semibold">Target</h3>
            <h4 className="mb-2 text-lg font-medium">
              Goals of the English Club
            </h4>
            <ul className="list-inside list-disc">
              <li>
                To create a supportive and inclusive environment where members
                can develop their confidence and skills in using the English
                language.
              </li>
              <li>
                To provide opportunities for members to practice and improve
                their English language skills through various activities and
                events.
              </li>
              <li>
                To explore English language culture and literature, broadening
                members understanding and appreciation of the language.
              </li>
              <li>
                To foster a community of English language enthusiasts who can
                learn from and support each other.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="mb-4 text-xl font-semibold">Support</h3>
            <h4 className="mb-2 text-lg font-medium">
              Unleash Your Inner Wordsmith: How the English Club Supports You
            </h4>
            <p>
              At our English Club, we&apos;re committed to supporting your
              language learning journey every step of the way. We offer a range
              of resources to help you improve your English skills, including
              regular speaking practice sessions, writing workshops, and access
              to a variety of English language materials.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="mb-4 text-xl font-semibold">Our Partner</h3>
            <h4 className="mb-2 text-lg font-medium">
              Thanks to our Ass. Headmaster for supervision
            </h4>
            <p>
              Establishing an English Club was not possible for us without the
              help of our Assistant Headmaster, MD. Masud Karim. Without his
              supportance it was just impossible to do. When he first came to
              know about our idea, he encouraged us and played the most
              important role in management sector. He is the only person to be
              by our side in every step of the club. In few word it can be said
              that this club is more of our teacher than STEAMer.
            </p>
          </section>

          <section className="mb-12">
            <h3 className="mb-4 text-xl font-semibold">Join Club</h3>
            <p className="mb-4">
              Welcome to a world of endless possibilities, where the journey to
              mastering the English language begins! By joining our English
              Club, you&apos;re not just becoming a member; you&apos;re becoming
              part of a vibrant community dedicated to the love of language and
              the pursuit of knowledge.
            </p>
            <CountdownTimer />
            <div className="flex gap-2">
              <Button variant="default">Join Now</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="mb-4 text-xl font-semibold">Deadline</h3>
            <p className="mb-4">
              You can also join us indirectly through Duolingo for School. This
              button will allow you to join our Duolingo Classroom.
            </p>
            <Button variant="default">Join Duolingo Classroom</Button>
          </section>

          <section className="mb-12">
            <h3 className="mb-8 text-xl font-semibold">Reviews</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <ReviewCard
                review="The English Club has been a game-changer for my language skills! The supportive environment and engaging activities have boosted my confidence in speaking and writing."
                name="Sarah J."
                imageSrc="/placeholder-avatar.png"
              />
              <ReviewCard
                review="I've made great friends and improved my English at the same time. The club's events are always fun and educational. Highly recommend joining!"
                name="Mike L."
                imageSrc="/placeholder-avatar.png"
              />
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
