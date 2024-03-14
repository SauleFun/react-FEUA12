/* eslint-disable react/prop-types */
const Hero = ({ title, subtitle, color }) => {
  return (
    <div style={{background: color, padding: "1rem" }}>
    <h1 style={{margin: "1rem"}}>{title}</h1>
    <h3>{subtitle}</h3>
    </div>
  )
}

export default Hero