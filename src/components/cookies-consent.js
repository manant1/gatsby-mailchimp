import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "antd"

const styles = {
  cookiesContainer: {
    position: "absolute",
    bottom: "15px",
    right: "15px",
    maxWidth: "50vw",
    border: "1px solid lightgrey",
    padding: "10px 15px"
  }
}

const CookiesConsent = () => {
  const [open, setOpen] = React.useState(() => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("cookies-consent") !== "1"
    }
  })

  const onAccept = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("cookies-consent", 1);
    }
    setOpen(false);
  }

  if (!open) {
    return null
  }

  return <div style={styles.cookiesContainer}>
    <StaticImage
      src="../images/cookie.png"
      width={50}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="cookie consent"
    />
    <p>We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.</p>
    <Button onClick={() => onAccept()}>Accept</Button>
  </div>
}

export default CookiesConsent