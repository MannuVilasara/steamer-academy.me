import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from '../components/Image'
import { motion } from 'framer-motion'
import '../styles/globals.css'
import React from 'react'

export default function About() {
  const teamMembers = [
    { name: "H. Mondal", role: "CEO & Founder", image: "/HmondalDiscordpfp.webp?height=200&width=200", content: "He sets the strategic goals and ensures STEAMer stays on track with its mission. Besides he does external representation and leadership team management." },
    { name: "Muntasir Mahmud", role: "Chief Technology Officer", image: "/MuntasirDiscordpfp.webp?height=200&width=200", content: "Manages A-Z of technology related works of our organization and plays one of the most vital roles. He is also a great open source fighter and always helpful to all." },
    { name: "Ayman", role: "Chief Education Officer", image: "/AymanDiscordpfp.webp?height=200&width=200", content: "Assesses student learning outcomes through evaluations, feedback mechanisms, and competition results. This helps ensure the effectiveness of the STEAMer programs and allows for adjustments if needed." },
  ]

  return (
    <div className="space-y-16">
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8">About STEAMer Academy</h1>
          <p className="mb-4">At STEAMer, we&aposre passionate about igniting a love for Science, Technology, Engineering, Arts, and Math (STEAM) in young minds. Our mission is to create a dynamic learning environment that fosters creativity, critical thinking, and innovation.</p>
          <p className="mb-4">Through our engaging and interactive programs, STEAMer empowers young learners to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Discover the wonders of STEAM and make science exciting, engaging, and relevant.</li>
            <li>Develop critical thinking skills, be curious, and ask questions.</li>
            <li>Engage in hands-on learning experiences that encourage exploration and discovery.</li>
            <li>Foster collaboration and innovation: Teamwork is at the heart of our programs, where students learn to work together to solve problems.</li>
            <li>Build confidence and a sense of accomplishment through project-based learning.</li>
          </ul>
        </motion.div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 hover:bg-gray-700 p-7 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <Image src={member.image} alt={member.name} width={200} height={200} className="rounded-full mx-auto" />
                </CardHeader>
                <CardContent className="text-center p-12 pb-4">
                  <CardHeader className="text-xl font-semibold text-white mb-2 p-1">{member.name}</CardHeader>
                  <CardTitle className="text-lg text-gray-400 mb-4 p-4">{member.role}</CardTitle>
                  <CardDescription className="font-medium text-gray">{member.content}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
