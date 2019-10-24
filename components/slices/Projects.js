import { RichText, Link } from 'prismic-reactjs'

const Projects = ({ slice }) =>
  <div id={slice.slice_type}>
    {slice.items && slice.items.map((item, i) => {
      if (i%2) {
        return(
          <div className="bg-blue-skies-800 text-white pt-16 pb-6 md:pt-32 md:pb-0" key={i}>
            <div className="container mx-auto ">
              <div className="flex flex-wrap items-center xl:-mx-6">
                <div className="order-last md:order-first md:w-1/2 xl:w-6/12 px-6 xl:mr-auto">
                  <h2 className="font-freight leading-snug mb-6 mt-2 md:mt-0">{RichText.asText(item.project_title)}</h2>
                  <div className="project-description">{RichText.render(item.project_description)}</div>
                </div>
                <div className="md:w-1/2 xl:w-5/12 px-6">
                  <a href={Link.url(item.project_link)} className="cursor-pointer block grow"><img src={item.project_image.url} className="object-cover object-top w-full h-400 shadow-md" alt={item.project_image.alt} /></a>
                </div>
              </div>
            </div>
          </div>
        )
      } else {
        return(
          <div className="bg-blue-skies-700 text-white pt-16 pb-6 md:pt-32 md:pb-0" key={i}>
            <div className="container mx-auto ">
              <div className="md:flex items-center xl:-mx-6">
                <div className="md:w-1/2 xl:w-5/12 px-6">
                  <a href={Link.url(item.project_link)} className="cursor-pointer block grow"><img src={item.project_image.url} className="object-cover object-top w-full h-400 shadow-md" alt={item.project_image.alt} /></a>
                </div>
                <div className="md:w-1/2 xl:w-6/12 xl:ml-auto px-6">
                  <h2 className="font-freight leading-snug mb-6 mt-2 md:mt-0">{RichText.asText(item.project_title)}</h2>
                  <div className="project-description">{RichText.render(item.project_description)}</div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    })}
  </div>


export default Projects
