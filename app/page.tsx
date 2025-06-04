"use client"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Youtube,
  Code,
  Database,
  Server,
  Globe,
  Cloud,
  Settings,
  Mail,
  Phone,
  MapPin,
  Send,
  
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Typewriter } from "react-simple-typewriter"


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto  px-4 py-20 md:py-25 flex flex-col md:flex-row items-center gap-10 md:gap-30"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 mx-auto md:mx-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse opacity-70"></div>
          <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-950 flex items-center justify-center overflow-hidden">
            {/* Replace with your own image */}
            <Image
              src="/profile.png"
              alt="Profile"
              width={300}
              height={300}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className=" flex justify-center text-sm mb-2 w-[135px] text-center items-center h-[35px] bg-gray-700 rounded-full">👋 Hello, I&apos;m</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Aklile Ansa
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Full-Stack Developer</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-fit mb-6 text-xl">
            I build scalable backend systems, automate workflows, and create responsive frontends with React. My
            expertise in{" "}
            <span className="text-blue-500 font-mono">
              <Typewriter
                words={[
                  "Express.js",
                  "Node.js",
                  "TypeScript",
                  "API Design",
                  "MongoDb",
                  "Nest.js",
                  "React",
                  "Tailwind Css",
                  "Python",
                  "Next.js",
                  
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <div className="flex gap-4 justify-center md:justify-start  ">
            <Button asChild className="bg-blue-500 hover:bg-blue-600 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-110">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" className="transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-110" >
              <a href="/aklile.ansa.pdf" download>
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex gap-4 mb-0 mt-8 justify-center md:justify-start">
            <a href="https://github.com/Aklile612" target="_blank" aria-label="GitHub" rel="noreferrer">
              <Github className="w-6 h-6 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400  duration-500 ease-out hover:-translate-y-1 hover:scale-110 transition-all" />
            </a>
            <a href="https://www.linkedin.com/in/aklile-ansa-691a73336/" target="_blank" aria-label="LinkedIn" rel="noreferrer">
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-110" />
            </a>
            {/* <a href="https://twitter.com" target="_blank" aria-label="Twitter" rel="noreferrer">
              <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" />
            </a> */}
            <a href="https://t.me/Remb0727" target="_blank" aria-label="Telegram" rel="noreferrer">
              <MessageCircle className="w-6 h-6 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-110" />
            </a>
            <a href="https://youtube.com" target="_blank" aria-label="YouTube" rel="noreferrer">
              <Youtube className="w-6 h-6 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-110" />
            </a>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="flex justify-center mb-12 mt-0 ">
        <a href="#about" className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400  hover:text-blue-500"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>

          <div className=" gap-12 items-center">
            
            

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Who am I?</h3>
              <p className="text-gray-600 dark:text-gray-400">
              As a student currently striving for excellence, I enjoy working behind the scenes to build systems that are efficient, scalable, and reliable. My curiosity about how things work under the hood is what drives me to explore the logic, structure, and performance of web applications.

              I am currently focused on learning backend technologies, databases, and algorithms to strengthen my problem-solving skills. I'm passionate about clean code, optimized performance, and creating solutions that can handle real-world challenges.
              </p>

              <h3 className="text-2xl font-semibold pt-4">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-400">
              My journey in tech is just beginning, and while I have not achieved major milestones yet, I am working hard to build a strong foundation. I started exploring backend development out of a deep curiosity for how systems work and interact behind the scenes. Since then, I have been teaching myself the basics, practicing regularly, and slowly gaining confidence in my skills.

              Being a student in Information Science has helped me understand the bigger picture of technology, and I'm now focused on turning that knowledge into practical skills. I believe in learning through consistency and patience, and even though I am not where I want to be yet, I am committed to the journey ahead.
              </p>

              <h3 className="text-2xl font-semibold pt-4">Education</h3>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                <li>Degree, Addis Ababa (2023-2027)</li>
               
              </ul>

              <h3 className="text-2xl font-semibold pt-4">Interests</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Outside of tech, I enjoy spending time on activities that help me relax and stay inspired. I love listening to music, exploring new ideas through reading or watching documentaries, and having meaningful conversations with friends. I also enjoy learning new things beyond my field, whether it's about personal growth, creativity, or how the world works. These moments outside of coding help me stay balanced and motivated in my learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Work</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Project 3 */}
            <a href="#" className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src="/reminder.png"
                    alt="Reminder App"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                  <div className="group container flex flex-row gap-4">

                    <a href="https://github.com/Aklile612/Reminder-App" target="_blank" aria-label="GitHub" rel="noreferrer">
                    <Github className="w-6 h-6 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 hover:scale-110 transition-all" />
                    </a>
                    <span>Reminder App</span>
                    </div>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I designed this web app to students to help them with acadamic calander. I designed the front-end with <span className="font-bold text-blue-400">React</span> and the backend with <span className="font-bold text-blue-400">Node.js</span> and for the Data-base <span className="font-bold text-blue-400">Mongodb</span>. It was designed to help students manage the acadamic calander with the remider based on the day set.
                  </p>
                </CardContent>
              </Card>
            </a>

            {/* Project 4 */}
            <a href="#" className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src="/abe.png"
                    alt="Project Title 4"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                  <div className="group container flex flex-row gap-4">

                    <a href="https://github.com/Aklile612/Abe-Garage" target="_blank" aria-label="GitHub" rel="noreferrer">
                    <Github className="w-6 h-6 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 hover:scale-110 transition-all" />
                    </a>
                    <span>Abe Garage</span>
                  </div>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I have done while I was learing Evangadi project and this is the Front end of the app
                  </p>
                </CardContent>
              </Card>
            </a>
            {/* Project 1 */}
            <a href="#" className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src="/football.png"
                    alt="Project Title 1"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 ">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    <div className="container flex flex-row gap-4">

                      <a href="https://github.com/Aklile612/football-matches-viewer" target="_blank" aria-label="GitHub" rel="noreferrer">
                      <Github className="w-6 h-6 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 hover:scale-110 transition-all" />
                      </a>
                    <span>Football Fixture</span>
                    </div>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    This is done with restful api that allows you to choose a team that you want and see there result and matches with in weeks and matches in specified compitition.
                  </p>
                </CardContent>
              </Card>
            </a>

            {/* Project 2 */}
            <a href="#" className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src="/evangadi.png?height=400&width=600"
                    alt="Project Title 2"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="container flex flex-row gap-4">
                  <a href="https://github.com/Aklile612/Evangadi-forum-backend" target="_blank" aria-label="GitHub" rel="noreferrer">
                      <Github className="w-6 h-6 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 hover:scale-110 transition-all" />
                      </a>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                      <span>Evangadi Forum</span>
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    I have done this project for the EVAGADI project phase. I have done the front end with <span className="font-bold text-blue-400">React</span> and Backend with MySQL. This project gave me more insight in react , react hooks and basic or CRUD operation in the <span className="font-bold text-blue-400">MySQL</span>.
                  </p>
                </CardContent>
              </Card>
            </a>

            
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Here are the technologies and tools I work with. I'm constantly learning and expanding my skillset.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skill Category 1 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-semibold">Frontend Development</h3>
                </div>
                <ul className="space-y-2">
                  {["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"].map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skill Category 2 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-semibold">Backend Development</h3>
                </div>
                <ul className="space-y-2">
                  {["Node.js", "Express", "Nest.js","Next.js" ].map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skill Category 3 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-purple-500" />
                  <h3 className="text-xl font-semibold">Database</h3>
                </div>
                <ul className="space-y-2">
                  {["MySQL", "PostgreSQL", "MongoDB", "Firebase"].map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            

            
            {/* Skill Category 6 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-indigo-500" />
                  <h3 className="text-xl font-semibold">Web Services</h3>
                </div>
                <ul className="space-y-2">
                  {["RESTful APIs"].map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Have a question or want to work together? Feel free to contact me using the form below or through my contact
            information.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">aklileansa@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-400">+(251) 941108719</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <Input id="name" name="name" placeholder="Your Name..." required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Your Email
                        </label>
                        <Input id="email" name="email" type="email" placeholder="aklile@example.com" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" name="subject" placeholder="How can I help you?" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" name="message" placeholder="Your message here..." rows={6} required />
                    </div>

                    <Button type="submit" className="bg-blue-500 hover:bg-blue-600 w-full md:w-auto transition-all ease-out hover:scale-110 hover:-translate-y-1">
                      <Send className="w-4 h-4 mr-2 " />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
