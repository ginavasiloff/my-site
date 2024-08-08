import Image from 'next/image'
import styles from './page.module.css'

const skills = [
  'Typescript',
  'Docker',
  'JavaScript',
  'C#',
  'Kubernetes',
  'Unit Testing',
  'Integration Testing',
  'Pair Programming',
  'Node',
  'React',
  'RESTful APIs',
  'Debugging',
  'Next.js',
  'Data Visualizations',
  'CSS',
  'HTML',
  'SQL',
  'git',
]

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <Image
          src="/gina.jpg"
          alt="Gina enjoying the sea spray at Milford Sound"
          width={350}
          height={554}
        />
        <div className={styles.bio}>
          <div>
            <h3>About Me</h3>
            <p>
              I love to build projects and try out new ideas. This has made
              software engineering a rewarding career for me.
            </p>
            <p>
              Web application development has been my focus the last several
              years. I have been building analytics systems through the full
              stack. I would love to talk to you in detail about my recent work
              such as improving Postgres query performance, building a widget
              dashboard, and architecting then implementing a cloud system for
              automated analytics reports.
            </p>
            <p>
              I became interested in software engineering by writing scripts for
              a text based game. Then while studying computer science in
              college, I got a job at a high energy astrophysics experiment at
              the University of Utah. The experiment had a great need for a
              floating software engineer; after building and deploying their
              website, I went on to write data analysis scripts in Python,
              perform laboratory data acquisition, and design and carry out
              instrument calibration processes.
            </p>
            <p>
              I have gone on to focus on web applicatons development and
              architecture. My beginning in a scientific environment has led me
              to focus on ensuring a shared understanding of product
              requirements, accuracy, and reliability.
            </p>
          </div>
          <div className={styles.skills}>
            <h3>Skills</h3>
            <ul>
              {skills.map((s, i) => (
                <li key={`skill-${i}`}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
