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
    <section className={styles.home}>
      <Image
        src="/gina.jpg"
        alt="Gina enjoying the sea spray at Milford Sound"
        width={350}
        height={554}
        priority
      />
      <div className={styles.bio}>
        <div>
          <h2>About Me</h2>
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
            I became interested in software engineering by writing scripts for a
            text based game. Then while studying computer science in college, I
            got a job at a high energy astrophysics experiment at the University
            of Utah. The experiment had a great need for a floating software
            engineer; after building and deploying their website, I went on to
            write data analysis scripts in Python, perform laboratory data
            acquisition, and design and carry out instrument calibration
            processes.
          </p>
          <p>
            I have gone on to focus on web applications development and
            architecture. My beginning in a scientific environment has led me to
            focus on ensuring a shared understanding of product requirements,
            accuracy, and reliability.
          </p>
        </div>
        <div className={styles.skills}>
          <h2>Skills</h2>
          <ul>
            {skills.map((s, i) => (
              <li key={`skill-${i}`}>{s}</li>
            ))}
          </ul>
        </div>
        <div className={styles.links}>
          <a href="https://github.com/ginavasiloff">
            <Image src="/github.svg" alt="github" width={50} height={50} />
          </a>
          <a href="https://www.linkedin.com/in/gina-vasiloff-63075390/">
            <Image src="/linkedin.svg" alt="linkedIn" width={50} height={50} />
          </a>
          <a href="https://codepen.io/ginavasiloff">
            <Image
              src="/codepen-white.png"
              alt="codepen"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
