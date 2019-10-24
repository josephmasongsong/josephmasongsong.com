import { RichText } from 'prismic-reactjs'

const AboutMe = ({ slice }) =>
  <div className="bg-circuit py-16 md:py-32" id={slice.slice_type}>
    <div className="container mx-auto flex items-center">
      <div className="w-full flex flex-wrap lg:items-center lg:-mx-6">
        <div className="md:w-2/5 xl:w-1/3 px-6 mx-auto">
          <img src={slice.primary.image.url} className="shadow-md rounded-full w-40 mb-6 md:mb-0 md:w-full" alt={slice.primary.image.alt} />
        </div>
        <div className="md:w-3/5 xl:w-3/5 px-6 ml-auto">
          <h2 className="mb-6 leading-snug">
            {RichText.asText(slice.primary.about_title)}
          </h2>
          <div className="content-body text-gray-700">
            {RichText.render(slice.primary.about_body)}
          </div>
        </div>
      </div>
    </div>
  </div>

export default AboutMe
