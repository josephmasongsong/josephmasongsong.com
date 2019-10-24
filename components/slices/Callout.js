import { RichText } from 'prismic-reactjs'

const Callout = ({ slice }) =>
  <div className="w-full bg-white py-24 px-4 text-center" id={slice.slice_type}>
    <h2 className="block">{RichText.asText(slice.primary.callout_title)}</h2>
    <p className="block text-gray-700 mb-6">{RichText.asText(slice.primary.callout_text)}</p>
    <a className="bg-blue-skies-600 text-gray-100 px-12 py-3 inline-block font-header text-xl" href="/contact">
      {slice.primary.callout_label}
    </a>
  </div>

  export default Callout
