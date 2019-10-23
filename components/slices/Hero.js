import { RichText } from 'prismic-reactjs'
import ReactRotatingText from 'react-rotating-text'

const Hero = ({ slice }) => {
  const rotatingItems = slice.items.map(item => item.rotating_text)
  return(
    <div className="bg-graph h-1/2 md:h-650 w-full flex items-center relative px-4 xl:px-0" id={slice.slice_type}>
      <div className="container mx-auto">
        <div className="w-full">
          <h1 className="text-blue-skies-200 text-2xl md:text-4xl lg:text-5xl">
            {RichText.asText(slice.primary.banner_title)}
            &nbsp;
            <ReactRotatingText
              items={rotatingItems}
              color="#ffffff"
            />
          </h1>
        </div>
      </div>
    </div>
  )
}
export default Hero
