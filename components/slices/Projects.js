import { RichText } from 'prismic-reactjs'

const Projects = ({ slice }) =>
  <div id={slice.slice_type}>
    {slice.items && slice.items.map((item, i) => {
      if (i%2) {
        return(
          <div className="bg-blue-skies-800 text-white pt-16 pb-6 md:pt-32 md:pb-0" key={i}>
            <div className="container mx-auto ">
              <div className="flex flex-wrap items-center md:-mx-6">
                <div className="order-last md:order-first md:w-6/12 px-6 md:mr-auto">
                  <h2 className="font-freight leading-snug mb-6 mt-2 md:mt-0">{RichText.asText(item.project_title)}</h2>
                  <p>{RichText.asText(item.project_description)}</p>
                </div>
                <div className="md:w-5/12 px-6">
                  <img src={item.project_image.url} className="object-cover object-top w-full h-400 shadow-md" alt="" />
                </div>
              </div>
            </div>
          </div>
        )
      } else {
        return(
          <div className="bg-blue-skies-700 text-white pt-16 pb-6 md:pt-32 md:pb-0" key={i}>
            <div className="container mx-auto ">
              <div className="md:flex items-center md:-mx-6">
                <div className="md:w-5/12 px-6">
                  <img src={item.project_image.url} className="object-cover object-top w-full h-400 shadow-md" alt="" />
                </div>
                <div className="md:w-6/12 md:ml-auto px-6">
                  <h2 className="font-freight leading-snug mb-6 mt-2 md:mt-0">{RichText.asText(item.project_title)}</h2>
                  <p>{RichText.asText(item.project_description)}</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    })}
  </div>


export default Projects
