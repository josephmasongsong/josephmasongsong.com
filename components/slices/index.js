import Callout from './Callout'
import AboutMe from './AboutMe'
import Columns from './Columns'
import Projects from './Projects'
import ContactForm from './ContactForm'
import Hero from './Hero'

export default props => {
  return props.sliceZone.map((slice, i) => {
    switch (slice.slice_type) {
      case("hero"):
        return <Hero slice={slice} key={i} />
      case("3_columns"):
        return <Columns slice={slice} key={i} />
      case("about_me"):
        return <AboutMe slice={slice} key={i} />
      case("projects"):
        return <Projects slice={slice} key={i} />
      case("callout"):
        return <Callout slice={slice} key={i} />
      case("contact_form"):
        return <ContactForm slice={slice} key={i} />
      default:
        return null
    }
  })
}
