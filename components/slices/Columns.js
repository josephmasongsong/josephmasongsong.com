import { RichText } from 'prismic-reactjs'

const Columns = ({ slice }) =>
  <div className="bg-white xl:px-0" id={slice.slice_type}>
    <div className="container mx-auto py-12 lg:py-24">
      <div className="w-full xl:-mx-6 md:flex md:flex-wrap">
        {slice.items && slice.items.map((item, i) => (
          <div className="md:w-1/2 lg:w-1/3 text-center px-6 mt-8 mb-8" key={i}>
            <span dangerouslySetInnerHTML={{ __html: item.icon }} className="text-5xl" />
            <h4 className="mb-4">
              {RichText.asText(item.header)}
            </h4>
            <p className="text-gray-700 mb-0">
              {RichText.asText(item.content)}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>

export default Columns
