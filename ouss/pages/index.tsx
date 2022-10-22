import type { GetStaticProps } from 'next'
import Link from 'next/link';
import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import WorkExperience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocial } from '../utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};




const Home = ({ pageInfo, experiences, projects, socials, skills }: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
      <Head>
        <title>{pageInfo?.name} Portfolio </title>  
      </Head>
      {/* header */}
      <Header socials={socials}/>

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      {/* skills */}
      <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects projects={projects}/>
      </section>

      {/* Contact Me */}
      <section id="contact" className='snap-start'>
        <ContactMe pageInfo={pageInfo}/>
      </section>

      <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img 
          className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
          src="https://avatars.githubusercontent.com/u/102801929?v=4" 
          alt=""
          />
          </div>
      </footer>
      </Link>
    </div>
  )
}

export default Home


export const getStaticProps: GetStaticProps<Props> = async () => {
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();
  const pageInfo: PageInfo = await fetchPageInfo();
  
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },


    revalidate: 10,
  }

}